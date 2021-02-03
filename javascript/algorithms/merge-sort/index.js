export function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    // be sure that condition ensures stable algorithm
    // if (left[0].value >= right[0].value) {
    if (left[0] > right[0]) {
      result = [...result, right.shift()];
    } else {
      result = [...result, left.shift()];
    }
  }

  return [...result, ...left, ...right];
}
