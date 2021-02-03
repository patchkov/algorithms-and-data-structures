export function insertionSort(arr, desc = false) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let j = i - 1;
    // move elements of arr[0..i-1], that are greater/smaller than key,
    // to one position ahead of their current position
    // swap only if neighbors are in incorrect position - stable algorithm
    while (j > -1 && desc ? current > arr[j] : current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
