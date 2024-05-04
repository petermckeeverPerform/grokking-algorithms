function iterativeBinarySearch<T>({
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

function recursiveBinarySearch<T>({
  list,
  low,
  high,
  item,
}: {
  list: T[];
  low: number;
  high: number;
  item: T;
}): number | null {
  if (high >= low) {
    const mid = Math.floor(high + low / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      return recursiveBinarySearch({ list, low, high: mid - 1, item });
    } else {
      return recursiveBinarySearch({ list, low: mid + 1, high, item });
    }
  } else {
    return null;
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("====================================");
console.log("running iterative binary search");
console.log("====================================");
console.log(
  "exected result: 2, output: ",
  iterativeBinarySearch({ list, item: 3 }),
);
console.log(
  "exected result: 7, output: ",
  iterativeBinarySearch({ list, item: 8 }),
);
console.log(
  "exected result: null, output: ",
  iterativeBinarySearch({ list, item: -1 }),
);

console.log("====================================");
console.log("running recursive binary search");
console.log("====================================");
console.log(
  "exected result: 2, output: ",
  recursiveBinarySearch({ list, low: 0, high: list.length - 1, item: 3 }),
);
console.log(
  "exected result: 7, output: ",
  recursiveBinarySearch({ list, low: 0, high: list.length - 1, item: 8 }),
);
console.log(
  "exected result: null, output: ",
  recursiveBinarySearch({ list, low: 0, high: list.length - 1, item: -1 }),
);
console.log("====================================");
