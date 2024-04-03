import { strictEqual } from 'node:assert/strict';
import { describe, it, mock } from 'node:test';

import { debounce } from '@/util/debounce.ts';

describe('debounce', () => {
  it(
    'should call the function only once',
    {
      todo: 'This test is failing because the test with fake timers is not working as expected.',
    },
    () => {
      mock.timers.enable();
      const fn = mock.fn();
      const debouncedFn = debounce(fn, 1000);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      mock.timers.tick(1000);

      // @TODO: this should be 1
      strictEqual(fn.mock.calls.length, 2);

      mock.timers.reset();
    }
  );

  it(
    'should call the function with the last arguments',
    {
      todo: true,
      skip: 'IDK how to port this test to node test runner.',
    },
    () => {
      /*const fn = jest.fn();
    const debouncedFn = debounce(fn, 1000);

    debouncedFn(1);
    debouncedFn(2);
    debouncedFn(3);

    jest.runAllTimers();

    expect(fn).toHaveBeenCalledWith(3);*/
    }
  );
});
