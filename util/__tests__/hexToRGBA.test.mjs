import { strictEqual } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { hexToRGBA } from '@/util/hexToRGBA.ts';

describe('hexToRGBA', () => {
  it('should convert a hex color to an rgba color', () => {
    const hexColor = '#000000';
    const rgbaColor = hexToRGBA(hexColor, 0.5);

    strictEqual(rgbaColor, 'rgba(0, 0, 0, 0.5)');
  });

  it('should convert a hex color to an rgba color', () => {
    const hexColor = '#ffffff';
    const rgbaColor = hexToRGBA(hexColor, 0.5);

    strictEqual(rgbaColor, 'rgba(255, 255, 255, 0.5)');
  });
});
