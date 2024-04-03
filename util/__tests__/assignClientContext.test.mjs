import { deepEqual } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { assignClientContext } from '@/util/assignClientContext.ts';

const mockContext = {
  frontmatter: { title: 'Sample Title' },
  pathname: '/sample-path',
  headings: ['Heading 1', 'Heading 2'],
  readingTime: {
    text: '2 mins read',
    minutes: 2,
    time: 120000,
    words: 200,
  },
  filename: 'sample-file.md',
};

describe('assignClientContext', () => {
  it('should assign properties to the client context', () => {
    const result = assignClientContext(mockContext);

    deepEqual(result, mockContext);
  });

  it('should use default values for missing properties', () => {
    const result = assignClientContext({});
    const expected = {
      frontmatter: {},
      pathname: '',
      headings: [],
      readingTime: {
        text: '',
        minutes: 0,
        time: 0,
        words: 0,
      },
      filename: '',
    };

    deepEqual(result, expected);
  });
});
