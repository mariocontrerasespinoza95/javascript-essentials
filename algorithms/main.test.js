import { expect, test } from 'vitest';

import { cumSum } from './sum';
import { binarySearch } from './binary-search';
import {} from './least-recently-used';

test('cumulative sum of an array', () => {
  expect(cumSum([1, 3, 5, 7])).toBe(16);
  expect(cumSum([-2, -4, -8])).toBe(-14);
});

test('should find value in array using binary search', () => {
  expect(binarySearch(['a', 'b', 'c', 'x', 'y', 'z'], 'y')).toBe('y');
  expect(binarySearch(['a', 'b', 'c', 'x', 'y', 'z'], 'q')).toBe(-1);
});
