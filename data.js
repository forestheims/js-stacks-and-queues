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

  getList() {
    // if next is null, return the list
    if (!this.#next) {
      return this.#value;
    } else {
      return `${this.#value} ${this.#next.getList()}`;
      // if next is not null, return list + this.value
    }
  }
}

const root = new LinkedListNode("A");
const nodeB = new LinkedListNode("B");
root.add(nodeB);
console.log("root", root);
const nodeC = new LinkedListNode("C");
const nodeD = new LinkedListNode("D");
const nodeE = new LinkedListNode("E");
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
