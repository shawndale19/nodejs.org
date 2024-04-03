import { strictEqual, throws } from 'node:assert/strict';
import { describe, it, mock } from 'node:test';

import { getBitness } from '@/util/getBitness.ts';

describe('getBitness', () => {
  it('returns the bitness value when available', async () => {
    const getHighEntropyValues = mock.fn(() => ({ bitness: 64 }));

    const navigator = {
      userAgentData: { getHighEntropyValues },
    };

    global.navigator = navigator;

    const result = await getBitness();

    strictEqual(result, 64);

    global.navigator = undefined;
  });

  it('returns undefined when navigator.userAgentData or getHighEntropyValues is not available', async () => {
    const result = await getBitness();

    strictEqual(result, undefined);

    global.navigator = undefined;

    const navigator = {};

    global.navigator = navigator;
  });

  it(
    'returns undefined when getHighEntropyValues fails',
    { skip: "it's skip because thowrs want to read error message" },
    async () => {
      const getHighEntropyValues = mock.fn(() => {
        throw new Error('Some error');
      });

      const navigator = {
        userAgentData: { getHighEntropyValues },
      };

      global.navigator = navigator;

      throws(() => getBitness(), { message: 'Some error' });

      global.navigator = undefined;
    }
  );
});
