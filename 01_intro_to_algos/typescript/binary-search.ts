function binarySearch<T>({
  list,
  item,
}: {
  list: T[];
  item: T;
}): number | null {
  // list should already be sorted but making sure
  list.sort((a, b) => (a < b ? -1 : 1));
  let low = 0;
  let high: number = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess: T = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const list = [2,5,7,1,3,6,8,9,4];
console.log("running	binary search");
console.log("exected result: 2, output: ", binarySearch({ list, item: 3 }));
console.log("exected result: 7, output: ", binarySearch({ list, item: 8 }));
console.log("exected result: null, output: ", binarySearch({ list, item: -1 }));
