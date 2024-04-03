import { strictEqual } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getNodeJsChangelog } from '@/util/getNodeJsChangelog.ts';

describe('getNodeJsChangelog', () => {
  it('returns the correct changelog URL for major version >= 4', () => {
    const version = '14.2.0';
    const expectedUrl =
      'https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md#14.2.0';

    const result = getNodeJsChangelog(version);

    strictEqual(result, expectedUrl);
  });

  it('returns the correct changelog URL for major version >= 1', () => {
    const version = '1.8.3';
    const expectedUrl =
      'https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_IOJS.md#1.8.3';

    const result = getNodeJsChangelog(version);

    strictEqual(result, expectedUrl);
  });

  it('returns the correct changelog URL for minor version 12 or 10', () => {
    const version1 = '6.12.0';
    const expectedUrl1 =
      'https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V6.md#6.12.0';

    const result1 = getNodeJsChangelog(version1);

    strictEqual(result1, expectedUrl1);

    const version2 = '8.10.0';
    const expectedUrl2 =
      'https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V8.md#8.10.0';

    const result2 = getNodeJsChangelog(version2);

    strictEqual(result2, expectedUrl2);
  });

  it('returns the correct changelog URL for other versions', () => {
    const version = '0.12.7';
    const expectedUrl =
      'https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V012.md#0.12.7';

    const result = getNodeJsChangelog(version);

    strictEqual(result, expectedUrl);
  });
});
