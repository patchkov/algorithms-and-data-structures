import { bubbleSort } from "./index";

describe("Bubble Sort", function () {
  test("Sort Ascending", function () {
    expect(bubbleSort([1, 5, 4, 3, 8, 6, 2])).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });

  test("Sort Descending", function () {
    expect(bubbleSort([1, 5, 4, 3, 2, 6], true)).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
