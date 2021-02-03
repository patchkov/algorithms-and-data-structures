class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.addRecursively(this.root, value);
    }
  }

  addRecursively(node, value) {
    if (value > node.value) {
      if (node.right) {
        this.addRecursively(node.right, value);
      } else {
        node.right = new Node(value);
      }
    } else {
      if (node.left) {
        this.addRecursively(node.left, value);
      } else {
        node.left = new Node(value);
      }
    }
  }

  bfs() {
    const nodes = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      nodes.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return nodes;
  }

  remove(value) {
    this.root = this.removeRecursively(this.root, value);
  }

  removeRecursively(node, value) {
    if (value === node.value) {
      if (!node.left && !node.right) {
        return;
      } else if (node.left && !node.right) {
        return node.left;
      } else if (!node.left && node.right) {
        return node.right;
      } else {
        // removing element with 2 children is actually 
        // (1) copy value one form of "neighbors"
        // (2) removing the neighbor from the tree
        const newRoot = this.findTheMaxInSubTree(node.left);
        node.value = newRoot.value;
        node.left = this.removeRecursively(node.left, newRoot.value);
      }
    } else if (value > node.value) {
      node.right = this.removeRecursively(node.right, value);
    } else {
      node.left = this.removeRecursively(node.left, value);
    }
    return node;
  }

  findTheMaxInSubTree(node) {
    if (node.right) {
      return this.findTheMaxInSubTree(node.right);
    }
    return node;
  }
}
