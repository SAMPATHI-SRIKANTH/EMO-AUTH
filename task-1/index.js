const readline = require("readline");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.data + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

function reverseList(list) {
  let prev = null;
  let current = list.head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;
  return list;
}
function findSecondLargest(list) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  let current = list.head;

  while (current !== null) {
    if (current.data > firstMax) {
      secondMax = firstMax;
      firstMax = current.data;
    } else if (current.data > secondMax && current.data < firstMax) {
      secondMax = current.data;
    }

    current = current.next;
  }

  return secondMax;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbersList = new LinkedList();

function getUserInput() {
  rl.question(
    "Enter a number (or type a non-numeric value to stop): ",
    function (userInput) {
      if (!isNaN(userInput)) {
        numbersList.add(parseFloat(userInput));
        getUserInput();
      } else {
        rl.close();
        numbersList.printList();
        let revLL = reverseList(numbersList);
        revLL.printList();

        const secondLargest = findSecondLargest(numbersList);
        console.log("Second Largest Number:", secondLargest);
      }
    }
  );
}

getUserInput();
