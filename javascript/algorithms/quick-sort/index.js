export function quickSort(arr) {
  return quickSortRecursive(arr, 0, arr.length - 1);
}

function quickSortRecursive(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);

  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);

  return arr;
}

function partition(arr, start, end) {
  // it's a naive implementation where we always pick pivot as the last element
  // it can cause the worst case which is getting pivot as min/max element
  // and increases time complexity to O(n^2)
  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}
