import { strictEqual, throws } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { dateIsBetween } from '@/util/dateUtils.ts';

describe('dateIsBetween', () => {
  it('returns true when the current date is between start and end dates', () => {
    const startDate = '2022-01-01T00:00:00.000Z';
    const endDate = '2069-01-01T00:00:00.000Z';

    const result = dateIsBetween(startDate, endDate);

    strictEqual(result, true);
  });

  it('returns false when the current date is not between start and end dates', () => {
    const startDate = '2010-01-01T00:00:00.000Z';
    const endDate = '2020-01-01T00:00:00.000Z';

    const result = dateIsBetween(startDate, endDate);

    strictEqual(result, false);
  });

  it('throws when either start or end date is invalid', () => {
    const invalidStartDate = 'Invalid Start Date';
    const validEndDate = '2024-01-01T00:00:00.000Z';

    throws(() => dateIsBetween(invalidStartDate, validEndDate), {
      message: 'dateIsBetween got called with invalid dates',
    });
  });
});
