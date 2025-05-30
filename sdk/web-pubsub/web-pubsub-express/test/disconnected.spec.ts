// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { describe, it, assert, expect, vi, beforeEach } from "vitest";
import { CloudEventsDispatcher } from "../src/cloudEventsDispatcher.js";
import { IncomingMessage, ServerResponse } from "node:http";
import { Socket } from "node:net";

function buildRequest(
  req: IncomingMessage,
  hub: string,
  connectionId: string,
  userId?: string,
): void {
  req.headers["webhook-request-origin"] = "xxx.webpubsub.azure.com";
  req.headers["content-type"] = "application/json; charset=utf-8";
  req.headers["ce-awpsversion"] = "1.0";
  req.headers["ce-specversion"] = "1.0";
  req.headers["ce-type"] = "azure.webpubsub.user.disconnected";
  req.headers["ce-source"] = `/hubs/${hub}/client/${connectionId}`;
  req.headers["ce-id"] = "1";
  req.headers["ce-time"] = new Date().toUTCString();
  if (userId !== undefined) {
    req.headers["ce-userId"] = userId;
  }
  req.headers["ce-connectionId"] = connectionId;
  req.headers["ce-hub"] = hub;
  req.headers["ce-event"] = "disconnected";
}

function mockBody(req: IncomingMessage, body: string): void {
  req.emit("data", body);
  req.emit("end");
}

describe("Can handle disconnected event", function () {
  let req: IncomingMessage;
  let res: ServerResponse;

  beforeEach(async () => {
    req = new IncomingMessage(new Socket());
    res = new ServerResponse(req);
  });

  it("Should not handle the request if request is not cloud events", async () => {
    const endSpy = vi.spyOn(res, "end");

    const dispatcher = new CloudEventsDispatcher("hub1");
    const result = await dispatcher.handleRequest(req, res);
    assert.isFalse(result);
    expect(endSpy).not.toBeCalled();
  });

  it("Should not handle the request if hub does not match", async () => {
    const endSpy = vi.spyOn(res, "end");
    buildRequest(req, "hub", "conn1");

    const dispatcher = new CloudEventsDispatcher("hub1");
    const result = await dispatcher.handleRequest(req, res);
    assert.isFalse(result);
    expect(endSpy).not.toBeCalled();
  });

  it("Should response with 200 when option is not specified", async () => {
    const endSpy = vi.spyOn(res, "end");
    buildRequest(req, "hub", "conn1");

    const dispatcher = new CloudEventsDispatcher("hub");
    const result = await dispatcher.handleRequest(req, res);
    assert.isTrue(result, "should handle");
    expect(endSpy).toBeCalledTimes(1);
    assert.equal(200, res.statusCode, "should be 200");
  });

  it("Should response with 200 when handler is not specified", async () => {
    const endSpy = vi.spyOn(res, "end");
    buildRequest(req, "hub", "conn1");

    const dispatcher = new CloudEventsDispatcher("hub", {});
    const result = await dispatcher.handleRequest(req, res);
    assert.isTrue(result, "should handle");
    expect(endSpy).toBeCalledTimes(1);
    assert.equal(200, res.statusCode, "should be 200");
  });

  it("Should response 200 even the event handler throws", async () => {
    const endSpy = vi.spyOn(res, "end");
    buildRequest(req, "hub", "conn1");

    const dispatcher = new CloudEventsDispatcher("hub", {
      onConnected: async () => {
        throw new Error();
      },
    });
    const process = dispatcher.handleRequest(req, res);
    mockBody(req, JSON.stringify({}));
    const result = await process;
    assert.isTrue(result, "should handle");
    expect(endSpy).toBeCalledTimes(1);
    assert.equal(200, res.statusCode, "should be error");
  });
});
