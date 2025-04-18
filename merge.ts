export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  // Reverse collection_2 to make it ascending
  const reversed2 = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    reversed2.push(collection_2[i]);
  }

  const mergeTwo = (a: number[], b: number[]): number[] => {
    let result: number[] = [];
    let i = 0, j = 0;

    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
        result.push(a[i++]);
      } else {
        result.push(b[j++]);
      }
    }

    while (i < a.length) result.push(a[i++]);
    while (j < b.length) result.push(b[j++]);

    return result;
  };

  return mergeTwo(mergeTwo(collection_1, reversed2), collection_3);
}
