//Representation of graphs in adjacency matrix

// let vertexdata = ["A", "B", "C", "D"];

// let adjacencyMatrix = [
//     [0,1,1,1], //edges for A
//     [1,0,1,0], //edges for B
//     [1,1,0,0], //edges for C
//     [1,0,0,0]  //edges for D
// ];

// function PrintMatrix(matrix){
//     for(let i = 0; i < matrix.length; i++){
//         console.log(matrix[i]);
//     }
// }
// console.log(vertexdata);
// console.log(PrintMatrix(adjacencyMatrix));


// function PrintConnections(vertices, matrix) {
//     for (let i = 0; i < vertices.length; i++) {
//         let connection = `${vertices[i]}: `;
//         for (let j = 0; j < vertices.length; j++) {
//             if (matrix[i][j]) {
//                 connection += vertices[j] + " ";
//             }
//         }
//         console.log(connection);
//     }
// }

// const vertexData = ['A', 'B', 'C', 'D'];

// const adjacencyMatrix = [
//     [0, 1, 1, 1],  // Edges for A
//     [1, 0, 1, 0],  // Edges for B
//     [1, 1, 0, 0],  // Edges for C
//     [1, 0, 0, 0]   // Edges for D
// ];

// PrintConnections(vertexData, adjacencyMatrix);


// //graph implementation using classes
// class Graph {
//     constructor(size) {
//         // Initialize adjacency matrix with all zeros
//         this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0));
//         // Initialize vertex data array with empty strings
//         this.vertexData = Array(size).fill('');
//     }

//     // Add an edge between vertices u and v
//     addEdge(u, v) {
//         this.adjMatrix[u][v] = this.adjMatrix[v][u] = 1;
//     }

//     // Set data for a vertex
//     setDataForVertex(vertex, data) {
//         this.vertexData[vertex] = data;
//     }

//     // Print the graph's adjacency matrix and vertex data
//     printGraph() {
//         console.log("Adjacency Matrix:");
//         this.adjMatrix.forEach(row => console.log(row.join(' ')));
//         console.log("\nVertex Data:");
//         this.vertexData.forEach((data, vertex) => console.log(`Vertex ${vertex}: ${data}`));
//     }
// }

// // Create a new graph instance
// let g = new Graph(4);

// // Set data for vertices
// g.setDataForVertex(0, 'A');
// g.setDataForVertex(1, 'B');
// g.setDataForVertex(2, 'C');
// g.setDataForVertex(3, 'D');

// // Add edges between vertices
// g.addEdge(0, 1); // A - B
// g.addEdge(0, 2); // A - C
// g.addEdge(1, 3); // A - D
// g.addEdge(1, 2); // B - C

// // Print the graph
// g.printGraph();


// class graph {
//     constructor(size){
//         this.AdjMatrix = Array.from({length: size}, () => Array(size).fill(0));
//         this.VertexData = Array(size).fill(' ');
//     }

//     setData(index, NodeInString){
//         this.VertexData[index] = NodeInString;
//     }

//     AddEdge(u, v){
//         this.AdjMatrix[u][v] = this.AdjMatrix[v][u] = 1;
//     }

//     PrintGraph(){
//         this.AdjMatrix.forEach(row => console.log(row.join(' ')));
//     }
// }

// let myg = new graph(5);

// myg.setData(0, "A");
// myg.setData(1, "B");
// myg.setData(2, "C");
// myg.setData(3, "D");
// myg.setData(4, "E");

// myg.AddEdge(0, 4);
// myg.AddEdge(0, 1);
// myg.AddEdge(0, 3);
// myg.AddEdge(1, 0);
// myg.AddEdge(1, 2);
// myg.AddEdge(2, 1);
// myg.AddEdge(3, 0);
// myg.AddEdge(3, 4);
// myg.AddEdge(4, 3);

// myg.PrintGraph();

// class Graph {
//     constructor(sizeOfMatrix) {
//         this.adjacencyMatrix = Array.from({ length: sizeOfMatrix }, () => Array(sizeOfMatrix).fill(0));
//         this.nodesData = Array(sizeOfMatrix).fill(' ');
//     }

//     addNodesWithIndex(index, node) {
//         this.nodesData[index] = node;
//     }

//     setEdgesWithIndex(u, v) {
//         this.adjacencyMatrix[u][v] = this.adjacencyMatrix[v][u] = 1;
//     }

//     print() {
//         this.adjacencyMatrix.forEach(row => {
//             console.log(row.join(' '));
//         });
//     }
// }

// let myg = new Graph(5);

// myg.addNodesWithIndex(0, "A");
// myg.addNodesWithIndex(1, "B");
// myg.addNodesWithIndex(2, "C");
// myg.addNodesWithIndex(3, "D");
// myg.addNodesWithIndex(4, "E");

// myg.setEdgesWithIndex(0, 4);
// myg.setEdgesWithIndex(0, 1);
// myg.setEdgesWithIndex(0, 3);
// myg.setEdgesWithIndex(1, 0);
// myg.setEdgesWithIndex(1, 2);
// myg.setEdgesWithIndex(2, 1);
// myg.setEdgesWithIndex(3, 0);
// myg.setEdgesWithIndex(3, 4);
// myg.setEdgesWithIndex(4, 3);

// myg.print();
  

//Implementation of Directed and Weighted Graphs

// class Graph {
//     constructor(size) {
//         // Initialize the adjacency matrix with null values
//         this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(null));
//         this.size = size; // Number of vertices in the graph
//         this.vertexData = Array(size).fill(''); // Array to store data for each vertex
//     }

//     // Method to add an edge between vertices u and v with a given weight
//     addEdge(u, v, weight) {
//         // Check if u and v are valid vertices
//         if (0 <= u < this.size && 0 <= v < this.size) {
//             // Add the edge from u to v and from v to u in the adjacency matrix
//             this.adjMatrix[u][v] = weight;
//         }
//     }

//     // Method to set data for a vertex
//     addVertexData(vertex, data) {
//         // Check if the vertex index is valid
//         if (0 <= vertex < this.size) {
//             // Set the data for the specified vertex
//             this.vertexData[vertex] = data;
//         }
//     }
// }

// // Create a new graph instance with 4 vertices
// let g = new Graph(4);

// // Set data for vertices
// g.addVertexData(0, 'A');
// g.addVertexData(1, 'B');
// g.addVertexData(2, 'C');
// g.addVertexData(3, 'D');

// // Add edges between vertices with their weights
// g.addEdge(0, 1, 3);  // Edge from vertex 0 to vertex 1 with weight 3
// g.addEdge(0, 2, 2);  // Edge from vertex 0 to vertex 2 with weight 2
// g.addEdge(3, 0, 4);  // Edge from vertex 3 to vertex 0 with weight 4
// g.addEdge(2, 1, 1);  // Edge from vertex 2 to vertex 1 with weight 1

// // Print the adjacency matrix
// console.log("Adjacency Matrix:");
// g.adjMatrix.forEach(row => {
//     // Convert null values to '0' for readability
//     console.log(row.map(x => x !== null ? x : '0').join(' '));
// });

// // Print the vertex data
// console.log("\nVertex Data:");
// g.vertexData.forEach((data, vertex) => {
//     console.log(`Vertex ${vertex}: ${data}`);
// });


// class Graph {
//     constructor(size) {
//         this.adjMatrix = Array.from({length: size}, () => Array(size).fill(0));
//         this.NodesData = Array(size).fill(" ");
//         this.size = size;
//     }

//     addNode(index, node){
//         this.NodesData[index] = node;
//     }

//     addEdges(u, v, weight){
//         this.adjMatrix[u][v] = weight;
//     }

//     printGraph(){
//         this.adjMatrix.forEach(row => console.log(row.join(" ")));
//     }

//     dfsutil(v, visited){ 
//         visited[v] = true;
//         console.log(this.NodesData[v]);

//         for(let i = 0; i < this.size; i++){
//             if(this.adjMatrix[v][i] === 1 && !visited[i]){
//                 this.dfsutil(i, visited);
//             }
//         }
//     }

//     dfs(startNode){
//         let visited = Array(this.size).fill(false);
//         let startIndex = this.NodesData.indexOf(startNode);
//         this.dfsutil(startIndex, visited);
//     }
// }

// // Create a new graph instance with 4 vertices
// let g = new Graph(4);

// // Set data for vertices
// g.addNode(0, 'A');
// g.addNode(1, 'B');
// g.addNode(2, 'C');
// g.addNode(3, 'D');

// // Add edges between vertices with their weights
// g.addEdges(0, 1, 3);  // Edge from vertex 0 to vertex 1 with weight 3
// g.addEdges(0, 2, 2);  // Edge from vertex 0 to vertex 2 with weight 2
// g.addEdges(3, 0, 4);  // Edge from vertex 3 to vertex 0 with weight 4
// g.addEdges(2, 1, 1);  // Edge from vertex 2 to vertex 1 with weight 1

// g.printGraph();

// g.dfs('A'); // Will traverse all nodes and print them



//DEPTH FIRST SEARCH




// class Graph {
//     constructor(size) {
//         this.adjMatrix = Array.from({length: size}, () => Array(size).fill(0));
//         this.size = size;
//         this.vertexData = Array(size).fill('');
//     }

//     addEdge(u, v) {
//         if (0 <= u && u < this.size && 0 <= v && v < this.size) {
//             this.adjMatrix[u][v] = 1;
//         }
//     }

//     addVertexData(vertex, data) {
//         if (0 <= vertex && vertex < this.size) {
//             this.vertexData[vertex] = data;
//         }
//     }

//     printGraph() {
//         console.log("Adjacency Matrix:");
//         for (let row of this.adjMatrix) {
//             console.log(row.join(' '));
//         }
//         console.log("\nVertex Data:");
//         this.vertexData.forEach((data, vertex) => console.log(`Vertex ${vertex}: ${data}`));
//     }

//     dfsUtil(v, visited) {
//         visited[v] = true;
    

//         for (let i = 0; i < this.size; i++) {
//             if (this.adjMatrix[v][i] === 1 && !visited[i]) {
//                 this.dfsUtil(i, visited);
//             }
//         }
//     }

//     dfs(startVertexData) {
//         let visited = Array(this.size).fill(false);
//         let startVertex = this.vertexData.indexOf(startVertexData);
//         this.dfsUtil(startVertex, visited);
//     }
// }

// let g = new Graph(7);

// g.addVertexData(0, 'A');
// g.addVertexData(1, 'B');
// g.addVertexData(2, 'C');
// g.addVertexData(3, 'D');
// g.addVertexData(4, 'E');
// g.addVertexData(5, 'F');
// g.addVertexData(6, 'G');

// g.addEdge(3, 0);  // D - A
// g.addEdge(0, 2);  // A - C
// g.addEdge(0, 3);  // A - D
// g.addEdge(0, 4);  // A - E
// g.addEdge(4, 2);  // E - C
// g.addEdge(2, 5);  // C - F
// g.addEdge(2, 1);  // C - B
// g.addEdge(2, 6);  // C - G
// g.addEdge(1, 5);  // B - F

// g.printGraph();

// console.log("\nDepth First Search starting from vertex D:");
// g.dfs('A');


// class Graph {
//     constructor(size) {
//         this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0));
//         this.size = size;
//         this.vertexData = Array(size).fill('');
//     }

//     addEdge(u, v) {
//         if (u >= 0 && u < this.size && v >= 0 && v < this.size) {
//             this.adjMatrix[u][v] = 1;
//             this.adjMatrix[v][u] = 1;
//         }
//     }

//     addVertexData(vertex, data) {
//         if (vertex >= 0 && vertex < this.size) {
//             this.vertexData[vertex] = data;
//         }
//     }

//     printGraph() {
//         console.log("Adjacency Matrix:");
//         for (let row of this.adjMatrix) {
//             console.log(row.join(' '));
//         }
//         console.log("\nVertex Data:");
//         for (let vertex = 0; vertex < this.size; vertex++) {
//             console.log(`Vertex ${vertex}: ${this.vertexData[vertex]}`);
//         }
//     }

//     dfsUtil(v, visited) {
//         visited[v] = true;
//         console.log(this.vertexData[v]);

//         for (let i = 0; i < this.size; i++) {
//             if (this.adjMatrix[v][i] === 1 && !visited[i]) {
//                 this.dfsUtil(i, visited);
//             }
//         }
//     }

//     dfs(startVertexData) {
//         const visited = Array(this.size).fill(false);
//         const startVertex = this.vertexData.indexOf(startVertexData);
//         this.dfsUtil(startVertex, visited);
//     }
// }

// const g = new Graph(5);

// g.addVertexData(0, 'A');
// g.addVertexData(1, 'B');
// g.addVertexData(2, 'C');
// g.addVertexData(3, 'D');
// g.addVertexData(4, 'E');

// g.addEdge(3, 0);  // D - A
// g.addEdge(0, 2);  // A - C
// g.addEdge(0, 3);  // A - D
// g.addEdge(0, 4);  // A - E
// g.addEdge(2, 1);  // C - B
// g.addEdge(1, 4);  // B - E

// g.printGraph();

// console.log("\nDepth First Search starting from vertex D:");
// g.dfs('A');


// class Node {
//     constructor(name) {
//       this.name = name;
//       this.children = [];
//     }
  
//     addChild(name) {
//       this.children.push(new Node(name));
//       return this;
//     }
  
//     depthFirstSearch(array) {
//       // Push the current node's name to the array
//       array.push(this.name);
      
//       // Traverse each child of the current node recursively
//       for (let i = 0; i < this.children.length; i++) {
//         const child = this.children[i];
//         child.depthFirstSearch(array);
//       }
      
//       // Return the array containing the DFS traversal
//       return array;
//     }
//   }
  
//   // Example usage:
  
//   // Create the tree
//   const root = new Node("A");
//   root.addChild("B").addChild("C");
//   root.children[0].addChild("D").addChild("E");
//   root.children[1].addChild("F").addChild("G");
  
//   // Perform DFS
//   const dfsArray = root.depthFirstSearch([]);
//   console.log(dfsArray); // Output: ['A', 'B', 'D', 'E', 'C', 'F', 'G']


// class Node {
//     constructor(name){
//         this.name = name;
//         this.children = [];
//     }

//     addChild(name){
//         this.children.push(new Node(name));
//         return this;
//     }

//     dfs(array){
//         array.push(this.name);

//         for (let i = 0; i < this.children.length; i++) {
//             let child = this.children[i];
//             child.dfs(array);
//         }
//         return array;
//     }
// }

// let root = new Node('A');
// root.addChild('B').addChild('C');
// root.children[0].addChild('D').addChild('E');
// root.children[1].addChild('F').addChild('G');
// root.children[0].children[0].addChild('H').addChild('I');
// root.children[0].children[1].addChild('J').addChild('K');
// root.children[1].children[0].addChild('L').addChild('M');
// root.children[1].children[1].addChild('N').addChild('O');

// console.log(root.dfs([]));

// class Node{
//     constructor(name){
//         this.name = name;
//         this.children = [];
//     }

//     addChild(name){
//         this.children.push(new Node(name));
//         return this;
//     }

//     dfs(array){
//         array.push(this.name)

//         for(let i = 0;i < this.children.length; i++){
//             let child = this.children[i];
//             child.dfs(array);
//         }
//         return array;
//     }
// }

// let root = new Node('A');
// root.addChild('B').addChild('C');
// root.children[0].addChild('D').addChild('E');
// root.children[1].addChild('F').addChild('G');
// root.children[0].children[0].addChild('H').addChild('I');
// root.children[0].children[1].addChild('J').addChild('K');
// root.children[1].children[0].addChild('L').addChild('M');
// root.children[1].children[1].addChild('N').addChild('O');

// console.log(root.dfs([]));
  


//DEPTH FIRST SEARCH

// Define the Node class
// class Node {
//     constructor(name) {
//       this.name = name;
//       this.children = [];
//     }
  
//     addChild(name) {
//       this.children.push(new Node(name));
//       return this;
//     }
  
//     depthFirstSearch(array) {
//       array.push(this.name);
  
//       for (let i = 0; i < this.children.length; i++) {
//         let child = this.children[i];
//         child.depthFirstSearch(array);
//       }
//       return array;
//     }
//   }
  
//   // Example usage
//   // Create a tree structure
//   const rootNode = new Node("A");
//   rootNode.addChild("B").addChild("C");
//   rootNode.children[0].addChild("D").addChild("E");
//   rootNode.children[1].addChild("F");
  
//   // Perform depth-first search
//   const resultArray = [];
//   rootNode.depthFirstSearch(resultArray);
//   console.log(resultArray); // Output: ["A", "B", "D", "E", "C", "F"]
  


//SINGLE CYCLE CHECK

// Function to check if the given array forms a single cycle
// function hasSingleCycle(array) {
//     // Initialize variables to keep track of the number of elements visited and the current index
//     let numElementsVisited = 0;
//     let currentIdx = 0;

//     // Iterate through the array until all elements are visited
//     while (numElementsVisited < array.length) {
//         // If it's not the first iteration and the current index returns to the starting point prematurely,
//         // indicating a cycle that doesn't visit all elements exactly once, return false
//         if (numElementsVisited > 0 && currentIdx === 0) return false;

//         // Increment the number of elements visited
//         numElementsVisited++;

//         // Get the next index based on the current index and the array
//         currentIdx = getNextIdx(currentIdx, array);
//     }

//     // Check if the final index is the same as the starting index
//     return currentIdx === 0;
// }

// // Function to get the next index based on the current index and the array
// function getNextIdx(currentIdx, array) {
//     // Get the jump value (number of steps to move) based on the value at the current index
//     let jump = array[currentIdx];

//     // Calculate the next index by adding the jump to the current index and taking the modulo of the array length
//     let nextIndex = (currentIdx + jump) % array.length;

//     // If the next index is negative, adjust it to ensure it stays within the bounds of the array
//     return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
// }

// // Example usage
// let arr = [2, 3, 1, -4, -4, 2];
// console.log(hasSingleCycle(arr)); // Output: true


// function hasSingleCycle(array){
//     let noVisited = 0;
//     let currentIdx = 0;

//     while(noVisited < array.length){
//         if(noVisited > 0 && currentIdx === 0) return false;
//         noVisited++;
//         currentIdx = getNextIdx(currentIdx, array);
//     }
//     return currentIdx === 0;
// }

// function getNextIdx(currentIdx, array){
//     let jump = array[currentIdx];
//     let nextidx = (jump + currentIdx) % array.length;
//     return nextidx >= 0 ? nextidx : nextidx + array.length;
// }

// let arr = [2, 3, 1, -4, -4, 2];
// console.log(hasSingleCycle(arr)); // Output: true


// function hasSingleCycle(array){
//     let noVisited = 0;
//     let currentIdx = 0;

//     while(noVisited < array.length){
//         if(noVisited > 0 && currentIdx === 0) return false;
//         noVisited++;
//         currentIdx = getNextIdx(currentIdx, array);
//     }
//     return currentIdx === 0;
// }

// function getNextIdx(currentIdx, array){
//     let jump = array[currentIdx];
//     let nextIdx = (currentIdx + jump) % array.length;
//     return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
// }

// let arr = [2, 3, 1, -4, -4, 2];
// console.log(hasSingleCycle(arr)); 


//BREATH-FIRST-SEARCH

// class Node {
//     constructor(name) {
//         this.name = name;
//         this.children = [];
//     }

//     addChild(name) {
//         this.children.push(new Node(name));
//         return this;
//     }
// }

// // Example graph creation
// const rootNode = new Node("A");
// rootNode.addChild("B").addChild("C");
// rootNode.children[0].addChild("D").addChild("E");
// rootNode.children[1].addChild("F");

// // Example usage of BFS function
// function BreathFirstSearch(rootNode) {
//     let array = [];
//     let queue = [rootNode];

//     while (queue.length > 0) {
//         let current = queue.shift();
//         array.push(current.name);
//         for (let child of current.children) {
//             queue.push(child);
//         }
//     }
//     return array;
// }

// console.log(BreathFirstSearch(rootNode)); // Output: ["A", "B", "C", "D", "E", "F"]



//RIVER SIZES

// function riverSize(array){
//     let sizes = [];
//     let visited = array.map(row => row.map(val => false));

//     function exploreRiver(row, col){
//         if(row < 0 || row >= array.length || col < 0 || col >= array[0].length || visited[row][col] || array[row][col] === 0){
//             return 0;
//         }

//         visited[row][col] = true;
//         let size = 1;
//         size += exploreRiver(row + 1, col);
//         size += exploreRiver(row - 1, col);
//         size += exploreRiver(row, col + 1);
//         size += exploreRiver(row, col - 1);
//         return size;
//     }

//     for(let row = 0; row < array.length; row++){
//         for(let col = 0; col < array[0].length; col++){
//             if(!visited[row][col] && array[row][col] === 1){
//                 sizes.push(exploreRiver(row, col));
//             }
//         }
//     }
//     return sizes;
// }

// let matrix = [
//     [1, 0, 1, 1],
//     [1, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 0]
// ];

// console.log(riverSize(matrix));


// function riverSize(array){
//     let sizes = [];
//     let visited = array.map(row => row.map(val => false));

//     function exploreRiver(row, col){
//         if(row < 0 || row >= array.length || col < 0 || col >= array[0].length || visited[row][col] || array[row][col] === 0){
//             return 0;
//         }
//         visited[row][col] = true;
//         let size = 1;
//         size += exploreRiver(row + 1, col);
//         size += exploreRiver(row - 1, col);
//         size += exploreRiver(row, col + 1);
//         size += exploreRiver(row, col - 1);

//         return size;
//     }

//     for(let row = 0; row < array.length; row++){
//         for(let col = 0; col < array[0].length; col++){
//             if(!visited[row][col] && array[row][col] === 1){
//                 sizes.push(exploreRiver(row, col));
//             }
//         }
//     }
//     return sizes;
// }

// let matrix = [
//     [1, 0, 1, 1],
//     [1, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 0]
// ];

// console.log(riverSize(matrix));


// let matrix = [
//     [1, 0, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0],
//     [0, 1, 0, 0, 1, 0],
//     [1, 0, 0, 0, 1, 0],
//     [1, 1, 1, 0, 1, 0]
// ];

// function FindRiverSizes(array){
//     let sizes = [];
//     let visited = array.map(row => row.map(val => false));

//     function exploreRiver(row, col){
//         if(row < 0 || row >= array.length || col < 0 || col >= array[0].length || visited[row][col] || array[row][col] === 0){
//             return 0;
//         }

//         visited[row][col] = true;
//         let size = 1;
//         size += exploreRiver(row + 1, col);
//         size += exploreRiver(row - 1, col);
//         size += exploreRiver(row, col + 1);
//         size += exploreRiver(row, col - 1);
//         return size;
//     }

//     for(let row = 0; row < array.length; row++){
//         for(let col = 0; col < array[0].length; col++){
//             if(!visited[row][col] && array[row][col] === 1){
//                 sizes.push(exploreRiver(row, col));
//             }
//         }
//     }
//     return sizes;
// }

// console.log(FindRiverSizes(matrix));


//YOUNGEST COMMON ANCESTOR

// class AncestralTree {
//     constructor(name) {
//       this.name = name;
//       this.ancestor = null;
//     }
// }
  
// function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
//     let depthOne = getDepth(descendantOne, topAncestor);
//     let depthTwo = getDepth(descendantTwo, topAncestor);
  
//     if (depthOne > depthTwo) {
//       return backTraceAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo);
//     } else {
//       return backTraceAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
//     }
// }
  
// function getDepth(descendant, topAncestor) {
//     let depth = 0;
//     while (descendant !== topAncestor) {
//       depth++;
//       descendant = descendant.ancestor;
//     }
//     return depth;
// }
  
// function backTraceAncestralTree(lowDescendant, highDescendant, diff) {
//     while (diff > 0) {
//       lowDescendant = lowDescendant.ancestor;
//       diff--;
//     }
  
//     while (lowDescendant !== highDescendant) {
//       lowDescendant = lowDescendant.ancestor;
//       highDescendant = highDescendant.ancestor;
//     }
//     return lowDescendant;
// }

  
// const A = new AncestralTree("A");
// const B = new AncestralTree("B");
// const C = new AncestralTree("C");
// const D = new AncestralTree("D");
// const E = new AncestralTree("E");
// const F = new AncestralTree("F");
// const G = new AncestralTree("G");
// const H = new AncestralTree("H");
// const I = new AncestralTree("I");

// // Construct the ancestral tree relationships
// A.ancestor = null;
// B.ancestor = A;
// C.ancestor = A;
// D.ancestor = B;
// E.ancestor = B;
// F.ancestor = C;
// G.ancestor = C;
// H.ancestor = E;
// I.ancestor = E;

// // Find the youngest common ancestor of nodes H and I
// console.log(getYoungestCommonAncestor(A, H, I).name); // Output: B


//REMOVE ISLANDS

// function RemoveIslands(matrix){
//     let OnesConnectedToBorder = [];
//     for(let row = 0; row < matrix.length; row++){
//         OnesConnectedToBorder.push([]);
//         for(let col = 0; col < matrix[0].length; col++){
//             OnesConnectedToBorder[row].push(false);
//         }
//     }

//     for(let row = 0; row < matrix.length; row++){
//         for(let col = 0; col < matrix[row].length; col++){
//             let isRowBorder = row === 0 || row === matrix.length - 1;
//             let isColBorder = col === 0 || col === matrix[row].length - 1;
//             let isBorder = isRowBorder || isColBorder;

//             if(!isBorder) continue;

//             if(matrix[row][col] !== 1) continue;

//             findOnesConnectedToBorder(matrix, row, col, OnesConnectedToBorder);
//         }
//     }

//     for(let row = 0; row < matrix.length; row++){
//         for(let col = 0; col < matrix[row].length; col++){
//             if(matrix[row][col] === 1 && !OnesConnectedToBorder[row][col]) {
//                 matrix[row][col] = 0;
//             }
//         }
//     }
//     return matrix;
// }

// function findOnesConnectedToBorder(matrix, Startrow, Startcol, OnesConnectedToBorder){
//     let stack = [[Startrow, Startcol]];

//     while(stack.length > 0){
//         let currentPosition = stack.pop();
//         let [currentRow, currentCol] = currentPosition;

//         let alreadyVisited = OnesConnectedToBorder[currentRow][currentCol];
//         if(alreadyVisited) continue;

//         OnesConnectedToBorder[currentRow][currentCol] = true;

//         let neighbors = getNeighbors(matrix, currentRow, currentCol);
//         for(let neighbor of neighbors){
//             let [row, col] = neighbor;
//             if(matrix[row][col] !== 1) continue;
//             stack.push(neighbor);
//         }
//     }
// }


// function getNeighbors(matrix, row, col){
//     let neighbors = [];

//     let numRows = matrix.length;
//     let numCols = matrix[0].length;

//     if(row - 1 >= 0) neighbors.push([row - 1, col]);
//     if(row + 1 < numRows) neighbors.push([row + 1, col]);
//     if(col - 1 >= 0) neighbors.push([row, col - 1]);
//     if(col + 1 < numCols) neighbors.push([row, col + 1]);

//     return neighbors;
// }

// let matrix = [
//     [1,0,0,0,1],
//     [0,1,1,0,0],
//     [0,0,0,1,1],
//     [1,0,0,0,1]
// ];

// console.log(RemoveIslands(matrix));


// function RemoveIslands(matrix){

//     //initialize an array to track if 1 is connected to the border;

//     let OnesConnectedToBorder = [];
//     for(let row = 0; row < matrix.length; row++){
//         OnesConnectedToBorder.push([]);
//         for(let col = 0; col < matrix[0].length; col++){
//             OnesConnectedToBorder[row].push(false);
//         }
//     }

//     //iterate through each cell and check if each cell is in the border.
//     //if it is, it calls a function to find all ones connected to the border

//     for(let row = 0; row < matrix.length; row++){
//         for(let col = 0; col < matrix[row].length; col++){
//             let isRowBorder = row === 0 || row === matrix.length - 1;
//             let isColBorder = col === 0 || col === matrix[0].length - 1;
//             let isBorder = isRowBorder || isColBorder;

//             if(!isBorder || matrix[row][col] !== 1) continue;

//             findOnesConnectedToBorder(matrix, row, col, OnesConnectedToBorder);
//         }
//     }

//     //iterate through each cells in the matrix excluding the border and change all the ones
//     //that are not true to be Zero. thats removing the islands.

//     for(let row = 0; row < matrix.length; row++){
//         for(let col = 0; col < matrix[row].length; col++){
//             if(!OnesConnectedToBorder[row][col]) matrix[row][col] = 0;
//         }
//     }
//     return matrix;
// }

// //function to find all ones connected to the border

// function findOnesConnectedToBorder(matrix, startRow, startCol, OnesConnectedToBorder){
//     let stack = [[startRow, startCol]];

//     while(stack.length > 0){
//         let currentPosition = stack.pop();
//         let [currentRow, currentCol] = currentPosition;

//         let alreadyVisited = OnesConnectedToBorder[currentRow][currentCol];
//         if(alreadyVisited) continue;

//         OnesConnectedToBorder[currentRow][currentCol] = true;

//         let neighbors = getNeighbors(matrix, currentRow, currentCol);

//         for(let neighbor of neighbors){
//             let [row, col] = neighbor;

//             if(matrix[row][col] === 1) stack.push(neighbor);
//         }
//     }
// }

// //function to get neighors of all the ones connected to a one

// function getNeighbors(matrix, row, col){
//     let neighbors = [];

//     let numrows = matrix.length;
//     let numCols = matrix[0].length;

//     if(row - 1 >= 0) neighbors.push([row - 1, col]);
//     if(row + 1 < numrows) neighbors.push([row + 1, col]);
//     if(col - 1 >= 0) neighbors.push([row, col - 1]);
//     if(col + 1 < numCols) neighbors.push([row, col + 1]);

//     return neighbors;
// }

// let matrix = [
//     [1,0,0,0,1],
//     [0,1,1,0,0],
//     [0,0,0,1,1],
//     [1,0,0,0,1]
// ];

// console.log(RemoveIslands(matrix));

// function RemoveIslands(matrix){
//     let OnesConnectedToBorder = [];
//     for(let row = 0; row < matrix.length; row++){
//         OnesConnectedToBorder.push([]);
//         for(let col = 0; col < matrix[0].length; col++){
//             OnesConnectedToBorder[row].push(false);
//         }
//     }

//     for(let row = 0; row < matrix.length; row++){
//         for(let col = 0; col < matrix[row].length; col++){
//             let isRowBorder = row === 0 || row === matrix.length - 1;
//             let isColBorder = col === 0 || col === matrix[0].length - 1;
//             let isBorder = isRowBorder || isColBorder;

//             if(!isBorder || matrix[row][col] === 0) continue;

//             findOnesConnectedToBorder(matrix, row, col, OnesConnectedToBorder);
//         }
//     }

//     for(let row = 0; row < matrix.length; row++){
//         for(let col = 0; col < matrix[row].length; col++){
//             let colors = matrix[row][col];
//             if(colors === 2){
//                 matrix[row][col] = 1;
//             } else if(colors === 1){
//                 matrix[row][col] = 0;
//             }
//         }
//     }
//     return matrix;
// }

// function findOnesConnectedToBorder(matrix, startRow, startCol, OnesConnectedToBorder){
//     let stack = [[startRow, startCol]];

//     while(stack.length > 0){
//         let currentPosition = stack.pop();
//         let [currentRow, currentCol] = currentPosition;

//         matrix[currentRow][currentCol] = 2;

//         let alreadyVisited = OnesConnectedToBorder[currentRow][currentCol];
//         if(alreadyVisited) continue;

//         let neighbors = getNeighbors(matrix, currentRow, currentCol);
//         for(let neighbor of neighbors){
//             let [row, col] = neighbor;
//             if(matrix[row][col] === 1) stack.push(neighbor);
//         }
//     }
// }

// function getNeighbors(matrix, row, col){
//     let neighbor = [];

//     let numRows = matrix.length;
//     let numCols = matrix[0].length;

//     if (row - 1 >= 0) neighbor.push([row - 1, col]);
//     if (row + 1 < numRows) neighbor.push([row + 1, col]);
//     if(col - 1 >= 0) neighbor.push([row, col - 1]);
//     if ( col + 1 < numCols) neighbor.push([row, col + 1]);

//     return neighbor;
// }

// let matrix = [
//     [1,0,0,0,1],
//     [0,1,1,0,0],
//     [0,0,0,1,1],
//     [1,0,0,0,1]
// ];

// console.log(RemoveIslands(matrix));


//CYCLE IN GRAPH

// function cycleInGraph(edges) {
//     // Get the number of nodes in the graph
//     let numberOfNodes = edges.length;
    
//     // Arrays to keep track of visited nodes and nodes currently in the recursion stack
//     let visited = new Array(numberOfNodes).fill(false);
//     let currentlyInStack = new Array(numberOfNodes).fill(false);

//     // Iterate over each node in the graph
//     for (let node = 0; node < numberOfNodes; node++) {
//         // Skip if the node is already visited
//         if (visited[node]) continue;

//         // Check if the node is part of a cycle
//         let containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
        
//         // If a cycle is found, return true immediately
//         if (containsCycle) return true;
//     }
    
//     // If no cycle is found after checking all nodes, return false
//     return false;
// }

// function isNodeInCycle(node, edges, visited, currentlyInStack) {
//     // Mark the current node as visited and add it to the recursion stack
//     visited[node] = true;
//     currentlyInStack[node] = true;

//     // Get the neighbors of the current node
//     let neighbors = edges[node];
    
//     // Iterate over each neighbor
//     for (let neighbor of neighbors) {
//         // If the neighbor is not visited, recursively check if it's in a cycle
//         if (!visited[neighbor]) {
//             let containsCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack);
//             if (containsCycle) return true;
//         } 
//         // If the neighbor is in the recursion stack, a cycle is detected
//         else if (currentlyInStack[neighbor]) {
//             return true;
//         }
//     }

//     // Mark the current node as no longer in the recursion stack
//     currentlyInStack[node] = false;
    
//     // If no cycle is found after exploring all neighbors, return false
//     return false;
// }

// // Example graph represented by adjacency lists
// let edges = [
//     [1, 3],
//     [2, 3, 4],
//     [0],
//     [],
//     [2, 5],
//     []
// ];

// // Check if the graph contains a cycle
// console.log(cycleInGraph(edges)); // Output: true (the graph contains a cycle)



// Define colors for nodes: white (0), grey (1), black (2)
// let [white, grey, black] = [0, 1, 2];

// // Main function to check if a graph contains a cycle
// function cycleInGraph(edges) {
//     let numberOfNodes = edges.length;
//     // Array to keep track of traversal state of each node
//     let colors = new Array(numberOfNodes).fill(white);

//     // Iterate over each node in the graph
//     for (let node = 0; node < numberOfNodes; node++) {
//         // Skip if the node is not white (already visited)
//         if (colors[node] != white) continue;

//         // Check if the node is part of a cycle
//         let containsCycle = traverseNode(node, edges, colors);
//         if (containsCycle) return true;
//     }
//     // If no cycle is found after checking all nodes, return false
//     return false;
// }

// // Helper function to traverse the graph starting from a node
// function traverseNode(node, edges, colors) {
//     // Color the current node as grey to indicate it's being visited
//     colors[node] = grey;

//     // Get the neighbors of the current node
//     let neighbors = edges[node];
    
//     // Iterate over each neighbor
//     for (let neighbor of neighbors) {
//         let neighborColor = colors[neighbor];

//         // If the neighbor is grey, a back edge is found, indicating a cycle
//         if (neighborColor === grey) return true;
        
//         // If the neighbor is black, it's already explored, continue to the next neighbor
//         if (neighborColor === black) continue;

//         // If the neighbor is white, recursively traverse it
//         let containsCycle = traverseNode(neighbor, edges, colors);
//         if (containsCycle) return true;
//     }

//     // Mark the current node as black to indicate all its neighbors are explored
//     colors[node] = black;

//     // If no cycle is found after exploring all neighbors, return false
//     return false;
// }

// // Example graph represented by adjacency lists
// let edges = [
//     [1, 3],
//     [2, 3, 4],
//     [0],
//     [],
//     [2, 5],
//     []
// ];

// // Check if the graph contains a cycle
// console.log(cycleInGraph(edges)); // Output: true (the graph contains a cycle)


//MINIMUM PASSES OF MATRIX

// function minimumPassesOfmatrix(matrix){
//     let passes = convertNegatives(matrix);
//     return !containNegatives(matrix) ? passes - 1 : -1;
// }

// // Function to convert negative values to positive by flipping signs and counting passes
// function convertNegatives(matrix) {
//     let nextPassQueue = getAllPositivePositions(matrix); // Get positions of positive values to start
//     let passes = 0;

//     // Repeat until all negatives are converted to positives
//     while (nextPassQueue.length > 0) {
//         let currentPassQueue = nextPassQueue;
//         nextPassQueue = [];

//         // Traverse through the current pass queue
//         while (currentPassQueue.length > 0) {
//             let [currentRow, currentCol] = currentPassQueue.shift();

//             // Get adjacent positions and check for negative values
//             let adjacentPositions = getAdjacentPosition(currentRow, currentCol, matrix);
//             for (let position of adjacentPositions) {
//                 let [row, col] = position;
//                 let value = matrix[row][col];

//                 // If negative, flip sign and add to next pass queue
//                 if (value < 0) {
//                     matrix[row][col] *= -1;
//                     nextPassQueue.push([row, col]);
//                 }
//             }
//         }
//         passes++; // Increment passes for each conversion pass
//     }
//     return passes;
// }

// // Function to get positions of all positive values in the matrix
// function getAllPositivePositions(matrix) {
//     let positivePositions = [];
//     for (let row = 0; row < matrix.length; row++) {
//         for (let col = 0; col < matrix[row].length; col++) {
//             let value = matrix[row][col];
//             if (value > 0) positivePositions.push([row, col]);
//         }
//     }
//     return positivePositions;
// }

// // Function to get adjacent positions of a given position
// function getAdjacentPosition(row, col, matrix) {
//     let adjacentPositions = [];

//     // Check boundaries and add adjacent positions
//     if (row - 1 >= 0) adjacentPositions.push([row - 1, col]);
//     if (row + 1 < matrix.length) adjacentPositions.push([row + 1, col]);
//     if (col - 1 >= 0) adjacentPositions.push([row, col - 1]);
//     if (col + 1 < matrix[0].length) adjacentPositions.push([row, col + 1]);

//     return adjacentPositions;
// }

// // Function to check if the matrix still contains negative values
// function containNegatives(matrix) {
//     for (let row of matrix) {
//         for (let value of row) {
//             if (value < 0) return true;
//         }
//     }
//     return false;
// }

// // Example usage
// let matrix = [
//     [2, -3, 1],
//     [4, 5, -1],
//     [-2, 7, 8]
// ];
// console.log("Minimum passes required:", convertNegatives(matrix)); // Output: 3

// function minimumPassesOfmatrix(matrix){
//     let passes = convertNegative(matrix);
//     return !containNegative(matrix) ? passes - 1 : -1;
// }

// function convertNegative(matrix){
//     let queue = getAllPositivePositions(matrix);

//     let passes = 0;

//     while(queue.length > 0){
//         let currentSize = queue.length;

//         while (currentSize > 0){
//             let [currentRow, currentCol] = queue.shift();

//             let adjacentPositions = getAdjacentPosition(currentRow, currentCol, matrix);
//             for (let position of adjacentPositions){
//                 let [row, col] = position;
//                 let value = matrix[row][col];
//                 if(value < 0){
//                     matrix[row][col] *= -1;
//                     queue.push([row, col]);
//                 }
//             }
//             currentSize--;
//         }
//     }
//     passes++;
// }
// function getAllPositivePositions(matrix){
//     let positivePositions = [];
//     for(let row = 0; row < matrix.length; row++){
//         for(let col =0; col < matrix[row].length; col++){
//             let val = matrix[row][col];
//             if(val > 0) positivePositions.push([row, col]);
//         }
//     }
//     return positivePositions;
// }

// function getAdjacentPosition(row, col, matrix){
//     let adjacentPositions = [];

//     if(row - 1 > 0) adjacentPositions.push([row - 1, col]);
//     if(row + 1 < matrix.length) adjacentPositions.push([row + 1, col]);
//     if(col - 1 > 0) adjacentPositions.push([row, col - 1]);
//     if(col + 1 < matrix[0].length) adjacentPositions.push(row, col + 1);

//     return adjacentPositions;
// }

// function containNegative(matrix){
//     for(let row of matrix){
//         for(let val of row){
//             if(val < 0) return true;
//         }
//     }
//     return false;
// }

// let matrix = [
//     [2, -3, 1],
//     [4, 5, -1],
//     [-2, 7, 8]
// ];

// console.log(ge(matrix));

// function minimumPassesOfmatrix(matrix){
//     let passes = convertNegative(matrix);
//     return !containNegative(matrix) ? passes - 1 : -1;
// }

// function convertNegative(matrix){
//     let queue = getAllPositivePositions(matrix);

//     let passes = 0;

//     while(queue.length > 0){
//         let currentQueue = queue;
//         queue = [];

//         while(currentQueue.length > 0){
//             let [currentRow, currentCol] = currentQueue.shift();

//             let adjacentPositions = getAdjacentPosition(currentRow, currentCol, matrix);

//             for(let position of adjacentPositions){
//                 let [row, col] = position;
//                 if(matrix[row][col] < 0){
//                     matrix[row][col] *= -1;
//                     queue.push([row, col]);
//                 }
//             }
//         }
//         passes++;
//     }
//    return passes;
// }
// function getAllPositivePositions(matrix){
//     let positivePositions = [];
//     for(let row = 0; row < matrix.length; row++){
//         for(let col = 0; col < matrix[row].length; col++){
//             let value = matrix[row][col];
//             if(value > 0) positivePositions.push([row, col]);
//         }
//     }
//     return positivePositions;
// }


// function getAdjacentPosition(row, col, matrix){
//     let adjacentPositions = [];

//     if(row - 1 >= 0) adjacentPositions.push([row - 1, col]);
//     if(row + 1 < matrix.length) adjacentPositions.push([row + 1, col]);
//     if(col - 1 >= 0) adjacentPositions.push([row, col - 1]);
//     if(col + 1 < matrix[0].length) adjacentPositions.push([row, col + 1]);

//     return adjacentPositions;
// }

// function containNegative(matrix){
//     for(let row of matrix){
//         for(let val of row){
//             if(val < 0) return true;
//         }
//     }
//     return false;
// }

// let matrix = [
//     [0, -1, -3, 2, 0],
//     [1, -2, -5, -1, -3],
//     [3, 0, 0, -4, -1]
// ];

// console.log(minimumPassesOfmatrix(matrix));


//TWO COLORABLE

// function twoColorabe(edge){
//     let colors = edge.map(_ => null);
//     colors[0] = true;
//     let stack = [0];

//     while(stack.length > 0){
//         let node = stack.pop();
//         for(let connection of edge[node]){
//             if(colors[connection] === null){
//                 colors[connection] = !colors[node];
//                 stack.push(connection);
//             } else if (colors[connection] === colors[node]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// let edge = [
//     [1],
//     [0, 2],
//     [1]
// ];


// console.log(twoColorabe(edge));