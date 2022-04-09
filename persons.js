class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
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

  // person object
  // name
  // phone
  // address

  findPerson(name) {
    // compare name to this.value
    if (name === this.value) return this.person;
    //sort things by alphabetical order
    if (name < this.value) {
      // look to the left
      this.left.findPerson(name);
    } else {
      // look to the right
      this.right.findPerson(name);
    }
  }
}

const person = {
  name: "Nelson",
  phone: "555-1212",
  address: "123 Main St",
};
const root = new PersonTreeNode(person);

// "root" is the node at the root of the tree (the tree)
let person3 = root.find("Nelson");
// person looks like
// {
//   name: 'Nelson',
//   phone: '555-1212',
//   address: '123 Main St'
// }

let person2 = root.findPerson("Foo");
// person2 is null
