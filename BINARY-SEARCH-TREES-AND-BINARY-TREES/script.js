//SIMPLE BINARY TREES

// class TreeNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// let root = new TreeNode('R');
// let nodeA = new TreeNode('A');
// let nodeB = new TreeNode('B');
// let nodeC = new TreeNode('C');
// let nodeD = new TreeNode('D');
// let nodeE = new TreeNode('E');
// let nodeF = new TreeNode('F');
// let nodeG = new TreeNode('G');

// root.left = nodeA;
// root.right = nodeB;

// nodeA.left = nodeC;
// nodeA.right = nodeD;

// nodeB.left = nodeE;
// nodeB.right = nodeF;

// nodeF.left = nodeG;

// // Test
// console.log("root.right.left.data:", root.right.data);

// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// let root = new Node(8);
// let one = new Node(5);
// let two = new Node(10);
// let three = new Node(2);
// let four = new Node(20);
// let five = new Node(7);

// root.left = one;
// root.right = two;


// one.left = three;
// one.right = four;

// two.left = five;

// console.log(root.left.left.value);


// class Tree {
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// let root = new Tree(50);

// let A = new Tree(20);
// let B = new Tree(70);
// let C = new Tree(10);
// let D = new Tree(30);

// root.left = A;
// root.right = B;

// A.left = C;
// A.right = D;

// console.log(root.right.data);

//BINARY SEARCH TREE


// class Node {
//     constructor(data, left = null, right = null){
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// class Bst {
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         let newNode = new Node(value);

//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }

//         let CurrentRoot = this.root;

//         while(true){
//             if(value < CurrentRoot.data){
//                 if(!CurrentRoot.left){
//                     CurrentRoot.left = newNode;
//                     break;
//                 }
//                 CurrentRoot = CurrentRoot.left;
//             } else if(value > CurrentRoot.data){
//                 if (!CurrentRoot.right){
//                     CurrentRoot.right = newNode;
//                     break;
//                 }
//                 CurrentRoot = CurrentRoot.right;
//             }
//         }
//         return this;
//     }

//     search(value){
//         let currentRoot = this.root;

//         while(currentRoot){
//             if(currentRoot.data === value){
//                 return currentRoot;
//             } else if (currentRoot.data < value){
//                 currentRoot = currentRoot.right;
//             } else {
//                 currentRoot = currentRoot.left;
//             }
//         }
//         return null;
//     }

//     delete(root, value){
//         if(!root){
//             return null;
//         }

//         if(root.data < value){
//             root.right = this.delete(root.right, value);
//         } else if (root.data > value){
//             root.left = this.delete(root.left, value);
//         } else {
//             if(!root.left){
//                 let temp = root.right;
//                 root = null;
//                 return temp;
//             } else if (!root.right){
//                 let temp = root.left;
//                 root = null;
//                 return temp;
//             }

//             root.data = this.minvalue(root.right).data;
//             root.right = this.delete(root.right, root.data);
//         }
//         return root;
//     }

//     minvalue(node) {
//         let current = node;
//         while (current.left !== null) {
//             current = current.left;
//         }
//         return current;
//     }
    

//     findClosestValue(tree, target){
//         return this.findclosestValueHelper(tree, target, tree.data);
//     }

//     findclosestValueHelper(tree, target, closest){
//         if(!tree){
//             return closest;
//         }

//         if(Math.abs(target - tree.data) < Math.abs(target - closest)){
//             closest = tree.data;
//         }

//         if(target < tree.data){
//             return this.findclosestValueHelper(tree.left, target, closest);
//         } else if (target > tree.data){
//             return this.findclosestValueHelper(tree.right, target, closest);
//         } else {
//             return closest;
//         }
        
//     }

// }

// let tree = new Bst();
// tree.insert(50);
// tree.insert(80);
// tree.insert(10);
// tree.insert(100);
// tree.insert(20);
// tree.insert(5);
// tree.insert(30);

// console.log(tree.search(100));

// console.log(tree.root);

// console.log(tree.findClosestValue(tree.root, 9));

// console.log(tree.delete(tree.root, 50));



// class Node {
//     constructor(value, left = null, right = null){
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }


// function InorderTraversal(val) {
//     if(val === null){
//         return;
//     }

//     InorderTraversal(val.left);
//     console.log(val.value);

//     InorderTraversal(val.right);
// }

// class BST {
//     constructor(){
//         this.root = null;
//     }



//     insert(value){
//         let newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }

//         let currentRoot = this.root;

//         while(true){
//             if(value < currentRoot.value){
//                 if(!currentRoot.left){
//                     currentRoot.left = newNode;
//                     return this;
//                 }
//                 currentRoot = currentRoot.left;
//             } else {
//                 if(!currentRoot.right){
//                     currentRoot.right = newNode;
//                     return this;
//                 }
//                 currentRoot = currentRoot.right;
//             }
//         }
//     }


//     search(value){
//         let currentRoot = this.root;
//         while(currentRoot){
//             if(value === currentRoot.value){
//                 return currentRoot;
//             } else if (value < currentRoot.value){
//                 currentRoot = currentRoot.left;
//             } else {
//                 currentRoot = currentRoot.right;
//             }
//         }
//         return null;
//     }
// }


// let tree = new BST();

// tree.insert(20);
// tree.insert(30);
// tree.insert(15);
// tree.insert(8);
// tree.insert(10)
// tree.insert(17);

// console.log(tree.root.right, tree.root.left);

// console.log(tree.search(20));

// console.log(InorderTraversal(tree.root));


//IN ORDER TRAVERSAL

// class Tree {
//     constructor(data, left = null, right = null){
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// function InorderTraversal(val) {
//     if(val === null){
//         return;
//     }

//     InorderTraversal(val.left);
//     console.log(val.data);

//     InorderTraversal(val.right);
// }




// let root = new Tree(13)
// let node7 = new Tree(7)
// let node15 = new Tree(15)
// let node3 = new Tree(3)
// let node8 = new Tree(8)
// let node14 = new Tree(14)
// let node19 = new Tree(19)
// let node18 = new Tree(18)

// root.left = node7
// root.right = node15

// node7.left = node3
// node7.right = node8

// node15.left = node14
// node15.right = node19

// node19.left = node18

// console.log(InorderTraversal(root));


//Searching for a value in binary search tree

// class Node {
//     constructor(value, left = null, right = null){
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }

// class BST {
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         let newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }

//         let currentRoot = this.root;

//         while(true){
//             if(value < currentRoot.value){
//                 if(!currentRoot.left){
//                     currentRoot.left = newNode;
//                     return this;
//                 }
//                 currentRoot = currentRoot.left;
//             } else {
//                 if(!currentRoot.right){
//                     currentRoot.right = newNode;
//                     return this;
//                 }
//                 currentRoot = currentRoot.right;
//             }
//         }
//     }

//     search(node, target){
//         if(node === null){
//             return null;
//         } else if(node.value === target){
//             return node;
//         } else if(target < node.value){
//             return this.search(node.left, target);
//         } else {
//             return this.search(node.right, target);
//         }
//     }
// }


// function InorderTraversal(val){
//     if (val === null){
//         return;
//     }

//     InorderTraversal(val.left);
//     console.log(val.value);
//     InorderTraversal(val.right);
// }

// let tree = new BST();


// tree.insert(20);
// tree.insert(30);
// tree.insert(15);
// tree.insert(8);
// tree.insert(10);
// tree.insert(17);
// tree.insert(5);
// tree.insert(25);
// tree.insert(40);
// tree.insert(35);

// console.log(tree.root);
// console.log(InorderTraversal(tree.root));
// console.log(tree.search(tree.root, 30));


// class Tree {
//     constructor(val, left = null, right = null){
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// class Bst {
//     constructor(){
//         this.root = null;
//     }

//     insert(val){
//         let NewVal = new Tree(val);
//         if(!this.root){
//             this.root = NewVal;
//             return this;
//         }
//         let current = this.root;

//         while(true){
//             if(val < current.val){
//                if(!current.left){
//                 current.left = NewVal;
//                 return this;
//                }
//                current = current.left;
//             } else {
//                 if(!current.right){
//                     current.right = NewVal;
//                     return this;
//                 }
//                 current = current.right;
//             }
//         }
//     }

//     search(node, target){
//         if(node === null){
//             return null;
//         } else if(node.val === target){
//             return node;
//         } else if (node.val < target){
//             return this.search(node.right, target);
//         } else {
//             return this.search(node.left, target);
//         }
//     }


// }

// let tree = new Bst();
// tree.insert(50)
// tree.insert(30)
// tree.insert(40)
// tree.insert(70)
// tree.insert(60)
// tree.insert(80);

// console.log(tree.root.right);
// console.log(tree.search(tree.root, 30))


// class Tree {
//     constructor(val, left = null, right = null){
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// class BST {
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         let newNode = new Tree(value);

//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }
//         let CurrentNode = this.root;

//         while(true){
//             if(value < CurrentNode.val){
//                 if(!CurrentNode.left){
//                     CurrentNode.left = newNode;
//                     return this;
//                 }
//                 CurrentNode = CurrentNode.left;
//             } else {
//                 if(!CurrentNode.right){
//                     CurrentNode.right = newNode;
//                     return this;
//                 }
//                 CurrentNode = CurrentNode.right;
//             }
//         }
//     }

//     search(node, target){
//         if(node === null){
//             return null;
//         } else if(node.val === target){
//             return node;
//         } else if(node.val > target){
//             return this.search(node.left, target);
//         } else {
//             return this.search(node.right, target);
//         }
//     }

// }

// function findMinValue(node) {
//     let current = node;
//     while (current.left !== null) {
//         current = current.left;
//     }
//     return current;
// }

// function findMaxValue(node){
//     let current = node;
//     while(current.right !== null){
//         current = current.right;
//     }
//     return current;
// }

// let arr = [];
// function inOrderTraversal(tree, array) {
//     if(tree !== null){
//         inOrderTraversal(tree.left, array);
//         array.push(tree.val);
//         inOrderTraversal(tree.right, array);
//     }
//     return array;
// }

// let bst = new BST();

// bst.insert(20);
// bst.insert(12);
// bst.insert(11);
// bst.insert(30);
// bst.insert(22);
// bst.insert(2);
// bst.insert(32);
// bst.insert(82);
// bst.insert(9);
// bst.insert(8);
// bst.insert(10);

// console.log(bst.root.right);

// console.log(bst.search(bst.root, 20));

// console.log(findMinValue(bst.root));

// console.log(findMaxValue(bst.root));

// console.log(inOrderTraversal(bst.root, arr));

// class Tree {
//     constructor(data, left = null, right = null) {
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(num) {
//         let newNode = new Tree(num);

//         if (!this.root) {
//             this.root = newNode;
//             return this;
//         }
//         let currentNode = this.root;
//         while (true) {
//             if (num < currentNode.data) {
//                 if (!currentNode.left) {
//                     currentNode.left = newNode;
//                     return this;
//                 }
//                 currentNode = currentNode.left;
//             } else {
//                 if (!currentNode.right) {
//                     currentNode.right = newNode;
//                     return this;
//                 }
//                 currentNode = currentNode.right;
//             }
//         }
//     }

//     search(treeRoot, target) {
//         if (!treeRoot) {
//             return null;
//         } else if (treeRoot.data === target) {
//             return treeRoot;
//         } else if (target > treeRoot.data) {
//             return this.search(treeRoot.right, target);
//         } else {
//             return this.search(treeRoot.left, target);
//         }
//     }

//     delete(root, target) {
//         if (!root) {
//             return null;
//         }

//         if (target < root.data) {
//             root.left = this.delete(root.left, target);
//         } else if (target > root.data) {
//             root.right = this.delete(root.right, target);
//         } else {
//             if (!root.left) {
//                 return root.right;
//             } else if (!root.right) {
//                 return root.left;
//             }

//             root.data = this.minValue(root.right).data;
//             root.right = this.delete(root.right, root.data);
//         }

//         return root; // Return the updated root after deletion
//     }

//     minValue(node) {
//         let current = node;
//         while (current.left) {
//             current = current.left;
//         }
//         return current;
//     }

//     maxvalue(node){
//         let current = node;
//         while(current.right){
//             current = current.right;
//         }
//         return current;
//     }

// }

// function findClosestValue(tree, target){
//     return findClosestValueHelper(tree.root, target, tree.root.data);
// }

// function findClosestValueHelper(tree, target, closest){
//     if(tree === null){
//         return closest;
//     }

//     if(Math.abs(target - tree.data) < Math.abs(target - closest)){
//         closest = tree.data;
//     }

//     if(target < tree.data){
//         return findClosestValueHelper(tree.left, target, closest);
//     }else if (target > tree.data){
//         return findClosestValueHelper(tree.right, target, closest);
//     } else {
//         return closest;
//     }

// }

// function branchSum(root){
//     let SumArray = [];

//     function calculateBranchSum(node, runningsum){
//         if(!node){
//             return null;
//         };

//         let newrunningsum = runningsum + node.data;

//         if(!node.left && !node.right){
//             SumArray.push(newrunningsum);
//         }

//         calculateBranchSum(node.left, newrunningsum);
//         calculateBranchSum(node.right, newrunningsum);
//     }

//     calculateBranchSum(root, 0);

//     return SumArray;
// }

// function nodeDepth(root, depth = 0){
//     if(root === null){
//         return 0;
//     }

//     return depth + nodeDepth(root.left, depth + 1) + nodeDepth(root.right, depth + 1);
// }

// let tree = new BST();

// tree.insert(50);
// tree.insert(20);
// tree.insert(80);
// tree.insert(70);
// tree.insert(65);
// tree.insert(30);
// tree.insert(40);
// console.log("Tree: ", tree.root.right.left);

// console.log(nodeDepth(tree.root));

// console.log(branchSum(tree.root));
// console.log(tree.root);
// console.log(tree.search(tree.root, 50));

// console.log(tree.delete(20));
// console.log(tree.search(tree.root, 20));

// console.log(findClosestValue(tree, 10));


//VALIDATE BST

// function validateBst(tree) {
//     return validateBstHelper(tree, -Infinity, Infinity);
// }

// function validateBstHelper(tree, minValue, maxvalue){
//     if(tree === null){
//         return true;
//     }

//     if(tree.value < minValue || tree.value >= maxvalue) {
//         return false;
//     }

//     let isleftvalid = validateBstHelper(tree.left, minValue, tree.value);
//     let isrightvalid = validateBstHelper(tree.right, tree.value, maxvalue);

//     return isleftvalid && isrightvalid;
// }


//BST TRAVERSALS

//inOrderTraversal

function inOrderTraversal(tree, array) {
    if(tree !== null){
        inOrderTraversal(tree.left, array);
        array.push(tree.value);
        inOrderTraversal(tree.right, array);
    }
    return array;
}

//preOrderTraversal

function preOrderTraversal(tree, array) {
    if(tree !== null){
        array.push(tree.value);
        preOrderTraversal(tree.left, array);
        preOrderTraversal(tree.right, array);
    }
    return array;
}

//postOrderTraversal

function postOrderTraversal(tree, array) {
    if(tree !== null) {
        postOrderTraversal(tree.left, array);
        postOrderTraversal(tree.right, array);
        array.push(tree.value);
    }
    return array;
}


class Tree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Tree(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.val) {
                // If the value already exists, you can choose to handle it here.
                // For simplicity, let's not insert duplicate values.
                return this;
            }

            if (value < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
}

// Function for in-order traversal
function inOrderTraversal(tree, array) {
    if (tree !== null) {
        inOrderTraversal(tree.left, array);
        array.push(tree.val);
        inOrderTraversal(tree.right, array);
    }
    return array;
}

// Function for pre-order traversal
function preOrderTraversal(tree, array) {
    if (tree !== null) {
        array.push(tree.val);
        preOrderTraversal(tree.left, array);
        preOrderTraversal(tree.right, array);
    }
    return array;
}

// Function for post-order traversal
function postOrderTraversal(tree, array) {
    if (tree !== null) {
        postOrderTraversal(tree.left, array);
        postOrderTraversal(tree.right, array);
        array.push(tree.val);
    }
    return array;
}

// Create a BST
let bst = new BST();
bst.insert(20);
bst.insert(12);
bst.insert(11);
bst.insert(30);
bst.insert(22);
bst.insert(2);
bst.insert(32);
bst.insert(82);
bst.insert(9);
bst.insert(8);
bst.insert(10);

// Usage examples
let inOrderResult = [];
console.log("In-order traversal:", inOrderTraversal(bst.root, inOrderResult));

let preOrderResult = [];
console.log("Pre-order traversal:", preOrderTraversal(bst.root, preOrderResult));

let postOrderResult = [];
console.log("Post-order traversal:", postOrderTraversal(bst.root, postOrderResult));
