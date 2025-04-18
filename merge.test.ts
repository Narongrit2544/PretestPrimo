import { merge } from './merge';

describe('merge', () => {
  it('should merge arrays correctly', () => {
    const c1 = [1, 3, 5];
    const c2 = [8, 6, 4]; // descending
    const c3 = [7, 9, 10];
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should handle empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 2], [])).toEqual([2, 3]);
  });
});
