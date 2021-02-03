import { BST } from "./index";

describe("Binary Search Tree", function () {
  let tree;

  beforeEach(function () {
    tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(10);
    tree.add(4);
    tree.add(11);
  });

  test("Add nodes in proper order", function () {
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.right.value).toEqual(4);
    expect(tree.root.right.right.value).toEqual(11);
  });

  test("Get elements in BFS order", function () {
    expect(tree.bfs()).toEqual([5, 3, 10, 4, 11]);
  });

  test("Remove nodes", function () {
    tree.remove(5);
    tree.remove(11);
    tree.remove(3);

    expect(tree.bfs()).toEqual([4, 10]);
  });
});
