import { strictEqual } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getNodeDownloadUrl } from '@/util/getNodeDownloadUrl.ts';

const version = 'v18.16.0';

describe('getNodeDownloadUrl', () => {
  it('returns the correct download URL for Mac', () => {
    const os = 'MAC';
    const bitness = 86;
    const expectedUrl = 'https://nodejs.org/dist/v18.16.0/node-v18.16.0.pkg';

    strictEqual(getNodeDownloadUrl(version, os, bitness), expectedUrl);
  });

  it('returns the correct download URL for Windows (32-bit)', () => {
    const os = 'WIN';
    const bitness = 86;
    const expectedUrl =
      'https://nodejs.org/dist/v18.16.0/node-v18.16.0-x86.msi';

    strictEqual(getNodeDownloadUrl(version, os, bitness), expectedUrl);
  });

  it('returns the correct download URL for Windows (64-bit)', () => {
    const os = 'WIN';
    const bitness = 64;
    const expectedUrl =
      'https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi';

    strictEqual(getNodeDownloadUrl(version, os, bitness), expectedUrl);
  });

  it('returns the default download URL for other operating systems', () => {
    const os = 'OTHER';
    const bitness = 86;
    const expectedUrl = 'https://nodejs.org/dist/v18.16.0/node-v18.16.0.tar.gz';

    strictEqual(getNodeDownloadUrl(version, os, bitness), expectedUrl);
  });
});
