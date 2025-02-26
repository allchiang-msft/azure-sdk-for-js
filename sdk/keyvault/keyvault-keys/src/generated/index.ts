// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { KeyVaultClient } from "./keyVaultClient.js";
export {
  KeyCreateParameters,
  KnownJsonWebKeyType,
  JsonWebKeyType,
  KnownJsonWebKeyOperation,
  JsonWebKeyOperation,
  KeyAttributes,
  KnownDeletionRecoveryLevel,
  DeletionRecoveryLevel,
  KeyAttestation,
  KnownJsonWebKeyCurveName,
  JsonWebKeyCurveName,
  KeyReleasePolicy,
  KeyBundle,
  JsonWebKey,
  KeyVaultError,
  ErrorModel,
  ErrorModel_1,
  KeyImportParameters,
  DeletedKeyBundle,
  KeyUpdateParameters,
  KeyItem,
  BackupKeyResult,
  KeyRestoreParameters,
  KeyOperationsParameters,
  KnownJsonWebKeyEncryptionAlgorithm,
  JsonWebKeyEncryptionAlgorithm,
  KeyOperationResult,
  KeySignParameters,
  KnownJsonWebKeySignatureAlgorithm,
  JsonWebKeySignatureAlgorithm,
  KeyVerifyParameters,
  KeyVerifyResult,
  KeyReleaseParameters,
  KnownKeyEncryptionAlgorithm,
  KeyEncryptionAlgorithm,
  KeyReleaseResult,
  DeletedKeyItem,
  KeyRotationPolicy,
  LifetimeActions,
  LifetimeActionsTrigger,
  LifetimeActionsType,
  KeyRotationPolicyAction,
  KeyRotationPolicyAttributes,
  GetRandomBytesRequest,
  RandomBytes,
  KnownVersions,
} from "./models/index.js";
export {
  KeyVaultClientOptionalParams,
  GetKeyAttestationOptionalParams,
  GetRandomBytesOptionalParams,
  UpdateKeyRotationPolicyOptionalParams,
  GetKeyRotationPolicyOptionalParams,
  RecoverDeletedKeyOptionalParams,
  PurgeDeletedKeyOptionalParams,
  GetDeletedKeyOptionalParams,
  GetDeletedKeysOptionalParams,
  ReleaseOptionalParams,
  UnwrapKeyOptionalParams,
  WrapKeyOptionalParams,
  VerifyOptionalParams,
  SignOptionalParams,
  DecryptOptionalParams,
  EncryptOptionalParams,
  RestoreKeyOptionalParams,
  BackupKeyOptionalParams,
  GetKeysOptionalParams,
  GetKeyVersionsOptionalParams,
  GetKeyOptionalParams,
  UpdateKeyOptionalParams,
  DeleteKeyOptionalParams,
  ImportKeyOptionalParams,
  RotateKeyOptionalParams,
  CreateKeyOptionalParams,
} from "./api/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
