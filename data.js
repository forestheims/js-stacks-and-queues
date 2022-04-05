console.log("Hellow world!");

class LinkedListNode {
  #value;
  #next;

  constructor(data) {
    this.#value = data;
    this.#next = null;
  }

  // next is left as null until we add a new node
  add(node) {
    // if next is null
    if (!this.#next) {
      // we can set next as node
      this.#next = node;
      // if next is not null
    } else {
      // we call add on the node that already occupies next
      this.#next.add(node);
    }
  }
}

const root = new LinkedListNode("A");
const nodeB = new LinkedListNode("B");
root.add(nodeB);
console.log("root", root);
