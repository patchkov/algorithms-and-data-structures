import { quickSort } from "./index";

describe("Quick Sort", function () {
  test("Sort Array", function () {
    expect(quickSort([1, 3, 5, 6, 2, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
