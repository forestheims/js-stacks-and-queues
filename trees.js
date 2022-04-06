console.log("Hello trees!");

class BinaryTreeNode {
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // duplicate removal
    if (node.value === this.value) {
      return;
    }

    // compare node value to this value

    // if left is null, set this.left to node
    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    }

    // if right is null, set this.left to node
    else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");

// B will be the root of the tree:
B.add(A);
// B.add(D);
// B.add(C);
console.log(B);
