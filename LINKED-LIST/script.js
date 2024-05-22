//LINKED LIST IMPLEMENTATION

// class Node{
//     constructor(data, next = null){
//         this.data = data;
//         this.next = next;
//     }
// }

// function Printlist(node){
//     let result = '';
//     while(node){
//         result += `${node.data} -> `;
//         node = node.next;
//     }
//     result += 'null';
//     console.log(result);
// }

// let node1 = new Node(5);
// let node2 = new Node(7, node1);
// let node3 = new Node(8, node2);
// let node4 = new Node(10, node3);

// Printlist(node4);

// class LinkedList {
//     constructor(data, next = null){
//         this.data = data;
//         this.next = next;
//     }
// }

// let PrintList = (node) => {
//     let result = '';
//     while(node){
//         result += `${node.data} -> `;
//         node = node.next;
//     }
//     result += 'null';
//     console.log(result);
// }

// let node4 = new LinkedList(20);
// let node3 = new LinkedList(15, node4);
// let node2 = new LinkedList(10, node3);
// let node1 = new LinkedList(5, node2);

// PrintList(node1);


//DOUBLY LINKED LIST IMPLEMENTATION

// class Node {
//     constructor(data, prev = null, next = null){
//         this.data = data;
//         this.prev = prev;
//         this.next = next;
//     }
// }

// let PrintPrev = (node) => {
//     let result = '';
//     while(node){
//         result = `${node.data} -> ` + result;
//         node = node.prev;
//     }
//     result += 'null';
//     console.log(result);
// }

// let PrintNext = (node) => {
//     let result = '';
//     while(node){
//         result += `${node.data} -> `;
//         node = node.next;
//     }
//     result += 'null';
//     console.log(result);
// }

// let findMinVal = (head) => {
//     let minVal = head.data;
//     let secVal = head.next;

//     while(secVal){
//         if(secVal.data < minVal){
//             minVal = secVal.data;
//         }
//         secVal = secVal.next;
//     }
//     return minVal;
// }

// let findMaxVal = (head) => {
//     let maxval = head.data;
//     let secval = head.next;

//     while(secval){
//         if(secval.data > maxval){
//             maxval = secval.data;
//         }
//         secval = secval.next;
//     }
//     return maxval;
// }

// let removeDuplicateVal = (head) => {
//     let current = head;

//     while (current !== null) {
//         let runner = current;

//         while (runner.next !== null) {
//             if (runner.next.data === current.data) {
//                 runner.next = runner.next.next;
//             } else {
//                 runner = runner.next;
//             }
//         }
//         current = current.next;
//     }

//     return head;
// }

// let middleNode = (linkedlist) => {
//     let slow = linkedlist;
//     let fast = linkedlist;

//     while(fast !== null && fast.next !== null){
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// }


// let node1 = new Node(5);
// let node2 = new Node(10, node1);
// let node3 = new Node(15, node2);
// let node4 = new Node(20, node3);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// node2.prev = node1;
// node3.prev = node2;
// node4.prev = node3;

// let node5 = new Node(5);
// let node6 = new Node(10);
// let node7 = new Node(15);
// let node8 = new Node(20);

// node4.next = node5;
// node5.prev = node4;
// node5.next = node6;
// node6.prev = node5;
// node6.next = node7;
// node7.prev = node6;
// node7.next = node8;
// node8.prev = node7;

// PrintPrev(node3);
// PrintNext(node1);

// console.log(findMinVal(node1));
// console.log(findMaxVal(node1));

// // Remove duplicates
// let modifiedHead = removeDuplicateVal(node1);
// console.log("Linked list after removing duplicates:");
// PrintNext(modifiedHead);
// console.log(middleNode(node1));


//LINKED LIST CONSTRUCTION

// class Node{
//     constructor(value){
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     setHead(node){
//         if(this.head === null){
//             this.head = node;
//             this.tail = node;
//             return;
//         }
//         this.insertBefore(this.head, node);
//     }

//     setTail(node){
//         if(this.tail === null){
//             this.setHead(node);
//             return;
//         }
//         this.insertAfter(this.tail, node);
//     }

//     insertBefore(node, nodeToInsert){
//         if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
//         this.remove(nodeToInsert);
//         nodeToInsert.prev = node.prev;
//         nodeToInsert.next = node;
//         if(node.prev === null){
//             this.head = nodeToInsert;
//         } else {
//             node.prev.next = nodeToInsert;
//         }
//         node.prev = nodeToInsert;
//     }

//     insertAfter(node, nodeToInsert){
//         if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
//         this.remove(nodeToInsert);
//         nodeToInsert.prev = node;
//         nodeToInsert.next = node.next;
//         if(node.next === null){
//             this.tail = nodeToInsert;
//         } else {
//             node.next.prev = nodeToInsert;
//         }
//         node.next = nodeToInsert;
//     }

//     insertAtPosition(position, positionToInsert){
//         if(position === 1){
//             this.setHead(positionToInsert);
//             return;
//         }
//         let node = this.head;
//         let currentPosition = 1;
//         while(node !== null && currentPosition++ !== position) node = node.next;
//         if(node !== null){
//             this.insertBefore(node, positionToInsert);
//         } else {
//             this.setTail(positionToInsert)
//         }
//     }

//     removeNodeWithValue(value){
//         let node = this.head;
//         while(node !== null){
//             let nodeToRemove = node;
//             node = node.next;
//             if(nodeToRemove === value) this.remove(value);
//         }
//     }

//     remove(node){
//         if(node === this.head) this.head = this.head.next;
//         if(node === this.tail) this.tail = this.tail.prev;
//         this.removeNodeBindings(node);
//     }

//     containNodeWithValue(value){
//         let node = this.head;
//         while(node !== null && node.value !== value){
//             node = node.next;
//         }
//         return node !== null;
//     }

//     removeNodeBindings(node){
//         if(node.prev !== null) node.prev.next = node.next;
//         if(node.next !== null) node.next.prev = node.prev;
//         node.prev = null;
//         node.next = null;
//     }
// }

// // Example usage:

// // Create a new doubly linked list
// let dll = new DoublyLinkedList();

// // Create new nodes
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);

// // Set the head of the list
// dll.setHead(node1);
// console.log("Set head to node1:", dll.head);

// // Set the tail of the list
// dll.setTail(node4);
// console.log("Set tail to node4:", dll.tail);

// // Insert node2 before node1
// dll.insertBefore(node1, node2);
// console.log("Inserted node2 before node1:", dll.head);

// // Insert node3 after node2
// dll.insertAfter(node2, node3);
// console.log("Inserted node3 after node2:", dll.head);

// // Insert node4 at position 2
// dll.insertAtPosition(2, node4);
// console.log("Inserted node4 at position 2:", dll.head);

// // Check if the list contains a node with value 3
// let containsNodeWithValue3 = dll.containNodeWithValue(3);
// console.log("Contains node with value 3:", containsNodeWithValue3);

// // Remove node with value 2
// dll.removeNodeWithValue(2);
// console.log("Removed node with value 2:", dll.head);

// // Remove a specific node
// dll.remove(node3);
// console.log("Removed node3:", dll.head);


//REMOVE NTH NODE FROM THE END

// class Linkedlist{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// function removeKthNodeFromTheEnd(head, k){
//     let counter = 1;
//     let first = head;
//     let second = head;

//     while(counter <= k){
//         second = second.next;
//         counter++;
//     }

//     if(second === null){
//         head.value = head.next.value;
//         head.next = head.next.next;
//         return;
//     }

//     while(second.next !== null){
//         first = first.next;
//         second = second.next;
//     }
//     first.next = first.next.next;
// }



//SUM OF LINKED LIST

// class Linkedlist{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// function sumOfLinkedlist(linkedlistOne, linkedlistTwo){
//     let LinkedlistPointer = new Linkedlist(0);
//     let currentNode = LinkedlistPointer;
//     let carry = 0;

//     let nodeOne = linkedlistOne;
//     let nodeTwo = linkedlistTwo;

//     while(nodeOne !== null || nodeTwo !== null || carry !== 0){
//         let valone = nodeOne !== null ? nodeOne.value : 0;
//         let valuetwo = nodeTwo !== null ? nodeTwo.value : 0;
//         let sum = valone + valuetwo + carry;

//         let newVal = sum % 10;
//         let newNode = new Linkedlist(newVal);
//         currentNode.next = newNode;
//         currentNode = newNode;

//         carry = Math.floor(sum / 10);
//         nodeOne = nodeOne !== null ? nodeOne.next : null;
//         nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
//     }
//     return LinkedlistPointer.next;
// }


//MERGING LINKED LISTS

// class Linkedlist{
//         constructor(value){
//             this.value = value;
//             this.next = null;
//     }
// }

// function MergingLinkedLists(linkedlistOne, linkedlistTwo){
//     let LinkedOneNodes = new Set();
//     let currentNodeOne = linkedlistOne;

//     while(currentNodeOne !== null){
//         LinkedOneNodes.add(currentNodeOne);
//         currentNodeOne = currentNodeOne.next;
//     }

//     let currentNodeTwo = linkedlistTwo;

//     while(currentNodeTwo !== null){
//         if(LinkedOneNodes.has(currentNodeTwo)) return currentNodeTwo;
//         currentNodeTwo = currentNodeTwo.next;
//     }
//     return null;
// }



class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  
  function mergingLinkedLists(linkedListOne, linkedListTwo) {
    let currentNodeOne = linkedListOne;
    let currentNodeTwo = linkedListTwo;
  
    while (currentNodeOne !== currentNodeTwo) {
      if(currentNodeOne === null){
        currentNodeOne = linkedListTwo;
      } else {
        currentNodeOne = currentNodeOne.next;
      }
  
      if(currentNodeTwo === null){
        currentNodeTwo = linkedListOne;
      } else {
        currentNodeTwo = currentNodeTwo.next;
      }
    }
    return currentNodeOne;
  }