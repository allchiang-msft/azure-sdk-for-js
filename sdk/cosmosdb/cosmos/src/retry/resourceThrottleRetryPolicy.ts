﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Constants } from "../common/constants.js";
import type { DiagnosticNodeInternal } from "../diagnostics/DiagnosticNodeInternal.js";
import type { ErrorResponse } from "../request/index.js";
import type { RetryOptions } from "./retryOptions.js";

/**
 * This class implements the resource throttle retry policy for requests.
 * @hidden
 */
export class ResourceThrottleRetryPolicy {
  /** Current retry attempt count. */
  public currentRetryAttemptCount: number = 0;
  /** Cummulative wait time in milliseconds for a request while the retries are happening. */
  public cummulativeWaitTimeinMs: number = 0;
  /** Retry interval in milliseconds to wait before the next request will be sent. */
  public retryAfterInMs: number = 0;

  /** Max wait time in milliseconds to wait for a request while the retries are happening. */
  private timeoutInMs: number;
  /**
   * @param maxTries - Max number of retries to be performed for a request.
   * @param fixedRetryIntervalInMs - Fixed retry interval in milliseconds to wait between each
   * retry ignoring the retryAfter returned as part of the response.
   * @param timeoutInSeconds - Max wait time in seconds to wait for a request while the
   * retries are happening.
   */

  private maxTries: number;
  private fixedRetryIntervalInMs: number;
  constructor(options: RetryOptions) {
    this.maxTries = options.maxRetryAttemptCount ?? Constants.ThrottledRequestMaxRetryAttemptCount;
    this.fixedRetryIntervalInMs =
      options.fixedRetryIntervalInMilliseconds ?? Constants.ThrottledRequestFixedRetryIntervalInMs;
    const timeoutInSeconds =
      options.maxWaitTimeInSeconds ?? Constants.ThrottledRequestMaxWaitTimeInSeconds;
    this.timeoutInMs = timeoutInSeconds * 1000;
    this.currentRetryAttemptCount = 0;
    this.cummulativeWaitTimeinMs = 0;
  }
  /**
   * Determines whether the request should be retried or not.
   * @param err - Error returned by the request.
   */
  public async shouldRetry(
    err: ErrorResponse,
    diagnosticNode: DiagnosticNodeInternal,
  ): Promise<boolean> {
    // TODO: any custom error object
    if (err) {
      if (this.currentRetryAttemptCount < this.maxTries) {
        this.currentRetryAttemptCount++;
        this.retryAfterInMs = 0;

        if (this.fixedRetryIntervalInMs) {
          this.retryAfterInMs = this.fixedRetryIntervalInMs;
        } else if (err.retryAfterInMs) {
          this.retryAfterInMs = err.retryAfterInMs;
        }

        if (this.cummulativeWaitTimeinMs < this.timeoutInMs) {
          this.cummulativeWaitTimeinMs += this.retryAfterInMs;
          diagnosticNode.addData({ successfulRetryPolicy: "resourceThrottle" });
          return true;
        }
      }
    }
    return false;
  }
}
