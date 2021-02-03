import { mergeSort } from "./index";

describe("Merge Sort", function () {
  test("Sort Ascending", function () {
    expect(mergeSort([1, 3, 2, 5, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
