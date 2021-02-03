export function bubbleSort(arr, desc = false) {
  const n = arr.length;
  // "n-1" to avoid accessing the element outside of the array
  // "n-i-1" decreases number of inner iterations
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // swap elements only if they are in incorrect positions, what causes that stable algorithm
      // for equals elements swapping doesn't occur
      if (isIncorrectPosition(arr[j], arr[j + 1], desc)) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function isIncorrectPosition(prev, next, desc = false) {
  return desc ? prev < next : prev > next;
}
