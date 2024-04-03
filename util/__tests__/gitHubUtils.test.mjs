import { strictEqual, ok } from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  getGitHubAvatarUrl,
  createGitHubSlugger,
  getGitHubBlobUrl,
  getGitHubApiDocsUrl,
} from '@/util/gitHubUtils.ts';

describe('GitHub utils', () => {
  it('getGitHubAvatarUrl returns the correct URL', () => {
    const result = getGitHubAvatarUrl('octocat');
    const expected = 'https://avatars.githubusercontent.com/octocat';

    strictEqual(result, expected);
  });

  it('createGitHubSlugger returns a slugger', () => {
    const slugger = createGitHubSlugger();

    ok(slugger);
  });

  it('getGitHubBlobUrl returns the correct URL', () => {
    const result = getGitHubBlobUrl('learn/getting-started/introduction.md');
    const expected =
      'https://github.com/nodejs/nodejs.org/blob/main/pages/en/learn/getting-started/introduction.md';

    strictEqual(result, expected);
  });

  it('getGitHubApiDocsUrl returns the correct URL', () => {
    const result = getGitHubApiDocsUrl('assert');
    const expected =
      'https://api.github.com/repos/nodejs/node/contents/doc/api?ref=assert';

    strictEqual(result, expected);
  });
});
