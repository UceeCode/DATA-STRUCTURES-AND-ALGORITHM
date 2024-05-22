//MAX SUBSET SUM NO ADJACENT

// let arr = [5,20,20,50,60];

// let findmaxSubsetSum = (arr) => {
//     if(!arr.length) return 0;
//     if(arr.length === 1) return arr[0];

//     let second = arr[0];
//     let first = Math.max(arr[0], arr[1]);

//     for(let i = 2; i < arr.length; i++){
//         let current = Math.max(first, second + arr[i]);

//         second = first;
//         first = current;
//     }
//     return first;
// }

// console.log(findmaxSubsetSum(arr));


//NUMBER OF WAYS TO MAKE CHANGE

let denom = [1,5,2];
let n = 5;

let findNumOfWays = (arr, n) => {
    let ways = new Array(n + 1).fill(0);
    ways[0] = 1;

    for(let coin of arr){
        for(let amount = coin; amount < ways.length; amount++){
            ways[amount] += ways[amount - coin];
        }
    }
    return ways[n];
}

console.log(findNumOfWays(denom, n));


//MinNumberOfCoinsForChange

// function minNumberOfCoinsForChange(n, denoms) {

//     let numofcoins = new Array(n + 1).fill(Infinity);
//     numofcoins[0] = 0;
  
//     for (let denom of denoms) {
//       for (let amount = 0; amount < numofcoins.length; amount++) {
//         if(denom <= amount){
//           numofcoins[amount] = Math.min(numofcoins[amount], numofcoins[amount - denom] + 1);
//         }
//       }
//     }
//     return numofcoins[n] !== Infinity ? numofcoins[n] : -1;
//   }



//Levenshtein Distance

// let str1 = "spec";
// let str2 = "pets";

// function levenshteinDistance(str1, str2) {
//     let edits = [];

//     for(let i = 0; i < str2.length + 1; i++){
//         let row = [];
//         for(let j = 0; j < str1.length + 1; j++){
//             row.push(j);
//         }
//         row[0] = i;
//         edits.push(row);  
//     }

//     for(let i = 1; i < str2.length + 1; i++){
//         for(let j = 1; j < str1.length + 1; j++){
//             if(str2[i - 1] === str1[j - 1]){
//                 edits[i][j] = edits[i - 1][j - 1];
//             } else {
//                 edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i- 1][j], edits[i][j - 1]);
//             }
//         }
//     }
//     return edits[str2.length][str1.length];
// }

// console.log(levenshteinDistance(str1, str2));


//Number of ways to traverse graph

// function numberOfWaysToTraverseGraph(width, height){
//     let numberOfWays = [];
//     for(let h = 0; h < height + 1; h++){
//         numberOfWays.push([]);
//         for(let w = 0; w < width + 1; w++){
//             numberOfWays[h].push(0);
//         }
//     }
   
//     for(let w = 1; w < width + 1; w++){
//         for(let h = 1; h < height + 1; h++){
//             if(w === 1 || h === 1){
//                 numberOfWays[h][w] = 1;
//             } else {
//                 let wayUp = numberOfWays[h][w - 1];
//                 let wayleft = numberOfWays[h - 1][w];
//                 numberOfWays[h][w] = wayUp + wayleft;
//             }
//         }
//     }
//     return numberOfWays[height][width];
// }

// console.log(numberOfWaysToTraverseGraph(3,4));


// function numberOfWaysToTraverseGraph(width, height){
//     let numberOfWays = [];

//     // Initialize the grid with zeros
//     for(let h = 0; h < height + 1; h++){
//         numberOfWays.push([]);
//         for(let w = 0; w < width + 1; w++){
//             numberOfWays[h].push(0);
//         }
//     }
   
//     // Populate the grid using dynamic programming
//     for(let w = 1; w < width + 1; w++){
//         for(let h = 1; h < height + 1; h++){
//             if(w === 1 || h === 1){
//                 // If we are on the first row or first column, there is only one way to reach that cell
//                 numberOfWays[h][w] = 1;
//             } else {
//                 // Otherwise, the number of ways to reach the current cell is the sum of the ways
//                 // to reach the cell to the left and the cell above it.
//                 let wayUp = numberOfWays[h][w - 1];
//                 let wayLeft = numberOfWays[h - 1][w];
//                 numberOfWays[h][w] = wayUp + wayLeft;
//             }
//         }
//     }
    
//     // Return the number of ways to reach the bottom-right cell
//     return numberOfWays[height][width];
// }

// // Call the function and log the result
// console.log(numberOfWaysToTraverseGraph(4,3));




  
