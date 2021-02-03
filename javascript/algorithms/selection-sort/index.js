export function selectionSort(arr, desc = false) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let sortedElement = i;
    // "i+1" we don't have to check the same element
    for (let j = i + 1; j < n; j++) {
      // depending on the condition we put max or min element on the left side
      if (desc ? arr[sortedElement] < arr[j] : arr[sortedElement] > arr[j]) {
        sortedElement = j;
      }
    }
    // unstable - swap with max/min element
    if (sortedElement !== i) {
      const temp = arr[sortedElement];
      arr[sortedElement] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}
