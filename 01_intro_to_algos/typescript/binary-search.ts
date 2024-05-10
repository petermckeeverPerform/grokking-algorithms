function iterativeBinarySearch<T>({
  list,
  item,
}: {
  list: T[];
  item: T | number;
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
  item: T | number;
}): number | null {
  if (high >= low) {
    const mid = Math.floor((high + low) / 2);
    const guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      try {
        return recursiveBinarySearch({
          list,
          low,
          high: mid - 1,
          item,
        });
      } catch (e) {
        const msg = { e, item, mid, low, high, size: list.length };
        console.error(msg);
        throw new Error();
      }
    } else {
      try {
        return recursiveBinarySearch({
          list,
          low: mid + 1,
          high,
          item,
        });
      } catch (e) {
        const msg = { e, item, mid, low, high, size: list.length };
        console.error(msg);
        throw new Error();
      }
    }
  } else {
    return null;
  }
}

function runIterativeBinarySearch<T>(list: T[]) {
  const start = new Date().getTime();
  let value: number | null = Math.floor(Math.random() * list.length - 1);
  const result = iterativeBinarySearch({ list, item: value });
  value = value <= 0 ? null : value - 1;
  console.log(
    "expected result: ",
    value,
    "output: ",
    result,
    value === result ? "✅" : "❌",
  );
  const end = new Date().getTime();
  console.log("Time taken: ", end - start, "ms");
}

function runRecursiveBinarySearchy<T>(list: T[]) {
  const start = new Date().getTime();
  let value: number | null = Math.floor(Math.random() * list.length - 1);
  const result = recursiveBinarySearch({
    list,
    low: 0,
    high: list.length - 1,
    item: value,
  });

  value = value <= 0 ? null : value - 1;
  console.log(
    "expected result: ",
    value,
    "output: ",
    result,
    value === result ? "✅" : "❌",
  );
  const end = new Date().getTime();
  console.log("Time taken: ", end - start, "ms");
}

const sizes = [10, 100, 1000, 10000, 1000000];

sizes.forEach((size, idx) => {
  console.log("");
  console.log(`# running test ${idx + 1} of ${sizes.length} #`);
  const list = Array.from(Array(size).keys()).map((i) => i + 1);

  console.log("====================================");
  console.log(`running iterative binary search on array of ${size} values`);
  console.log("====================================");
  runIterativeBinarySearch(list);
  runIterativeBinarySearch(list);
  runIterativeBinarySearch(list);
  console.log("");
  console.log("====================================");
  console.log(`running recursive binary search on array of ${size} values`);
  console.log("====================================");
  runRecursiveBinarySearchy(list);
  runRecursiveBinarySearchy(list);
  runRecursiveBinarySearchy(list);
  console.log("====================================");
  console.log("");
});
