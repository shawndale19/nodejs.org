import { strictEqual } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getUserBitnessByArchitecture } from '@/util/getUserBitnessByArchitecture.ts';

describe('getUserBitnessByArchitecture', () => {
  it('should return "arm64" for arm architecture and 64-bit', () => {
    const result = getUserBitnessByArchitecture('arm', 64);

    strictEqual(result, 'arm64');
  });

  it('should return the user bitness for other architectures', () => {
    const result = getUserBitnessByArchitecture('x86', 32);

    strictEqual(result, 32);
  });
});
