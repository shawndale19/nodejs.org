import { strictEqual, deepStrictEqual } from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  getDownloadCategory,
  mapCategoriesToTabs,
  formatDropdownItems,
} from '@/util/downloadUtils.ts';

describe('formatDropdownItems', () => {
  it('should format dropdown items correctly', () => {
    const items = [
      { value: 'item1', label: 'Item 1' },
      { value: 'item2', label: 'Item 2' },
    ];
    const disabledItems = ['item2'];
    const icons = { item1: 'icon' };
    const defaultIcon = 'defaultIcon';
    const result = formatDropdownItems({
      items: items,
      disabledItems: disabledItems,
      icons: icons,
      defaultIcon: defaultIcon,
    });
    const expected = [
      { value: 'item1', label: 'Item 1', disabled: false, iconImage: 'icon' },
      {
        value: 'item2',
        label: 'Item 2',
        disabled: true,
        iconImage: 'defaultIcon',
      },
    ];

    deepStrictEqual(result, expected);
  });

  it('should mark all items as disabled when all items are in the disabledItems list', () => {
    const items = [
      { value: 'item1', label: 'Item 1' },
      { value: 'item2', label: 'Item 2' },
    ];
    const disabledItems = ['item1', 'item2'];
    const result = formatDropdownItems({
      items: items,
      disabledItems: disabledItems,
    });
    const expected = [
      {
        value: 'item1',
        label: 'Item 1',
        disabled: true,
        iconImage: undefined,
      },
      {
        value: 'item2',
        label: 'Item 2',
        disabled: true,
        iconImage: undefined,
      },
    ];

    deepStrictEqual(result, expected);
  });

  it('should not mark any items as disabled when disabledItems list is empty', () => {
    const items = [
      { value: 'item1', label: 'Item 1' },
      { value: 'item2', label: 'Item 2' },
    ];
    const result = formatDropdownItems({ items: items });
    const expected = [
      {
        value: 'item1',
        label: 'Item 1',
        disabled: false,
        iconImage: undefined,
      },
      {
        value: 'item2',
        label: 'Item 2',
        disabled: false,
        iconImage: undefined,
      },
    ];

    deepStrictEqual(result, expected);
  });
});

describe('getDownloadCategory', () => {
  it('should return correct category information for /download/current', () => {
    const result = getDownloadCategory('/download/current');

    const expected = {
      page: 'download',
      category: 'download',
      subCategory: 'current',
    };

    deepStrictEqual(result, expected);
  });

  it('should return correct category information for /download/category/subcategory', () => {
    const result = getDownloadCategory('/download/category/subcategory');
    const expected = {
      page: 'download',
      category: 'category',
      subCategory: 'subcategory',
    };

    deepStrictEqual(result, expected);
  });

  it('should return correct category information for /download/category', () => {
    const result = getDownloadCategory('/download/category');
    const expected = {
      page: 'download',
      category: 'category',
      subCategory: undefined,
    };

    deepStrictEqual(result, expected);
  });
});

describe('mapCategoriesToTabs', () => {
  it('should return correct tabs for download page when subcategory current', () => {
    const result = mapCategoriesToTabs({
      page: 'download',
      categories: [
        {
          category: 'download',
          label: 'Download',
        },
        {
          category: 'package-manager',
          label: 'Package Manager',
        },
      ],
      subCategory: 'current',
    });
    const expected = [
      { key: 'download', label: 'Download', link: '/download/current' },
      {
        key: 'package-manager',
        label: 'Package Manager',
        link: '/download/package-manager/current',
      },
    ];

    deepStrictEqual(result, expected);
  });

  it('should return correct tabs for download page when subcategory not defined', () => {
    const result = mapCategoriesToTabs({
      page: 'download',
      categories: [
        {
          category: 'download',
          label: 'Download',
        },
        {
          category: 'package-manager',
          label: 'Package Manager',
        },
      ],
    });
    const expected = [
      { key: 'download', label: 'Download', link: '/download' },
      {
        key: 'package-manager',
        label: 'Package Manager',
        link: '/download/package-manager',
      },
    ];

    strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});
