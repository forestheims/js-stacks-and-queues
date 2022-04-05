console.log("Hello world!");

class Stack {
  list = [];

  constructor(initialList) {
    if (initialList) this.list = initialList;
  }

  // methods

  // push
  // pop
  stackPop() {
    return this.list.pop();
  }
  // peek
  stackPeek() {
    return this.list[this.list.length - 1];
  }
}

const myList = new Stack([1, 2, 3]);

console.log("first pop", myList.stackPop());

console.log("second pop", myList.stackPop());
console.log("third pop", myList.stackPop());
console.log("nothing to pop", myList.stackPop());
