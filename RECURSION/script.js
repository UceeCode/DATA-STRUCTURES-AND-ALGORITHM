//Nth Fibonacci

// let Nthfibonacci = (n) => {
//     if (n == 1){
//         return 0;
//     } else if (n == 2){
//         return 1;
//     } else return Nthfibonacci(n - 1) + Nthfibonacci(n - 2);
// }

// console.log(Nthfibonacci(5));

// let Nthfibonacci = (n, memoize = {2: 1, 1: 0}) => {
//     if (n in memoize){
//         return memoize[n];
//     }else{
//         memoize[n] = Nthfibonacci(n-1, memoize) + Nthfibonacci(n-2, memoize);
//         return memoize[n];
//     }
// }
// console.log(Nthfibonacci(5));

// let Nthfibonacci = (n) => {
//     let lastTwo = [0, 1];
//     let counter = 3;
//     while(counter <= n){
//         let next = lastTwo[0] + lastTwo[1];
//         lastTwo[0] = lastTwo[1];
//         lastTwo[1] = next;
//         counter++;
//     }
//     if(n > 1){
//         return lastTwo[1];
//     } else {
//         return lastTwo[0];
//     }
// }

// console.log(Nthfibonacci(5));


//PRODUCT SUM

// function productSum(array, depth = 1) {

//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       let arr = array[i];
//       if (Array.isArray(arr)) {
//         sum += productSum(arr, depth + 1);
//       } else {
//         sum += arr;
//       }
//     }
//     return sum * depth;
    
//   }
  

//PERMUTATIONS

// function findPermutation(array){
//   let permutation = [];
//   permutationHelper(array, [], permutation);
//   return permutation;
// }

// function permutationHelper(array, currentPermutation, permutation){
//   if(!array.length && currentPermutation.length !== 0){
//     permutation.push(currentPermutation);
//   } else {
//       for(let i = 0; i < array.length; i++){
//         let newArray = array.slice(0, i).concat(array.slice(i + 1));
//         let newPermutation = currentPermutation.concat([array[i]]);
//         permutationHelper(newArray, newPermutation, permutation);
//       }
//   }
// }

// let arr = [10, 20, 30];
// console.log(findPermutation(arr));

// function findPermutation(array){
//   let permutation = [];
//   permutationHelper(0, array, permutation);
//   return permutation;
// }

// function permutationHelper(i, array, permutation){
//   if(i === array.length - 1){
//     permutation.push(array.slice());
//   } else {
//     for(let j = i; j < array.length; j++){
//       swap(i, j, array);
//       permutationHelper(i + 1, array, permutation);
//       swap(i, j, array);
//     }
//   }
// }

// function swap(i, j, array){
//   [array[i], array[j]] = [array[j], array[i]];
// }

// let arr = [10, 20, 30];
// console.log(findPermutation(arr));

//POWERSET

// function powerSet(array) {
//   // Initialize the powerset with an empty subset
//   let powerset = [[]];

//   // Iterate through each element in the input array
//   for (let element of array) {
//     // Get the current length of the powerset
//     let currentLength = powerset.length;

//     // Iterate over each existing subset in the powerset
//     for (let i = 0; i < currentLength; i++) {
//       // Create a new subset by concatenating the current element to the existing subset
//       let subset = powerset[i].concat(element);

//       // Add the new subset to the powerset
//       powerset.push(subset);
//     }
//   }

//   // Return the complete powerset
//   return powerset;
// }

// // Example usage:
// let arr = [1, 2, 3];
// console.log(powerSet(arr));

//PHONE NUMBER MNEMONICS

// function phoneNumberMnemonics(PhoneNo){
//   let digitToNum = {
//     '0': ['0'],
//     '1': ['1'],
//     '2': ['a', 'b', 'c'],
//     '3': ['d', 'e', 'f'],
//     '4': ['g', 'h', 'i'],
//     '5': ['j', 'k', 'l'],
//     '6': ['m', 'n', 'o'],
//     '7': ['p', 'q', 'r', 's'],
//     '8': ['t', 'u', 'v'],
//     '9': ['w', 'x', 'y', 'z']
//   }

//   let Mnemonics = [];
//   let currentMnemonics = new Array(PhoneNo.length);

//   function generateMnemonics(idx){
//     if(idx === PhoneNo.length){
//       Mnemonics.push(currentMnemonics.join(""));
//     } else {
//       let digits = PhoneNo[idx];
//       let letters = digitToNum[digits];

//       for(let letter of letters){
//         currentMnemonics[idx] = letter;
//         generateMnemonics(idx + 1);      
//       }
//     }
//   }
//   generateMnemonics(0);
//   return Mnemonics;
// }

// let phoneNo = "1234";
// console.log(phoneNumberMnemonics(phoneNo));


//STAIRCASE TRAVERSAL

// function stairCaseTraversal(height, maxsteps){
//   return getTotalStepsToTheTop(height, maxsteps);
// }

// function getTotalStepsToTheTop(height, maxsteps){
//   if(height <= 1) return 1;

//   let totalsteps = 0;
//   for(let steps = 1; steps < Math.min(height, maxsteps) + 1; steps++){
//     totalsteps += getTotalStepsToTheTop(height - steps, maxsteps);
//   }
//   return totalsteps;
// }

// let height = 6;
// let maxsteps = 3;
// console.log(stairCaseTraversal(height, maxsteps));


// function stairCaseTraversal(height, maxsteps){
//   return GetStepsToTheTop(height, maxsteps, {0:1, 1:1});
// }

// function GetStepsToTheTop(height, maxsteps, memoize){

//   if(height in memoize) return memoize[height];
//   let totalsteps = 0;
//   for(let steps = 1; steps < Math.min(height, maxsteps) + 1; steps++){
//     totalsteps += GetStepsToTheTop(height - steps, maxsteps, memoize);
//   }
//   memoize[height] = totalsteps;
//   return totalsteps;
// }

// let height = 6;
// let maxsteps = 3;
// console.log(stairCaseTraversal(height, maxsteps));

// function stairCaseTraversal(height, maxsteps){
//   let waysToTop = new Array(height + 1).fill(0);
//   waysToTop[0] = 1;
//   waysToTop[1] = 1;

//   for(let currentHeight = 2; currentHeight < height + 1; currentHeight++){
//     let steps = 1;
//     while(steps <= maxsteps && steps <= currentHeight){
//       waysToTop[currentHeight] = waysToTop[currentHeight] + waysToTop[currentHeight - steps];
//       steps++;
//     }
//   }
//   return waysToTop[height];
// }

// let height = 6;
// let maxsteps = 3;
// console.log(stairCaseTraversal(height, maxsteps));



// function stairCaseTraversal(height, maxsteps){
//   let currentNumberOfWays = 0;
//   let waysToTop = [1];

//   for(let currentHeight = 1; currentHeight <= height + 1; currentHeight++){
//     let startWindow = currentHeight - maxsteps - 1;
//     let endWindow = currentHeight - 1;
//     if(startWindow >= 0){
//       currentNumberOfWays -= waysToTop[startWindow];
//     }
//     currentNumberOfWays += waysToTop[endWindow];
//     waysToTop.push(currentNumberOfWays);
//   }
//   return waysToTop[height];
// }

// let height = 6;
// let maxsteps = 3;
// console.log(stairCaseTraversal(height, maxsteps));


//BLACKJACK PROBABILITY

// function blackJackProbability(startingHand, Target){
//   let memo = {};
//   return parseFloat(calculateProb(startingHand, Target, memo)).toFixed(3);
// }

// function calculateProb(currentHand, Target, memo){
//   if(currentHand in memo) return memo[currentHand];
//   if(currentHand > Target) return 1;
//   if(currentHand + 4 >= Target) return 0;

//   let totalProbability = 0;
//   for(let drawnCard = 1; drawnCard <= 10; drawnCard++){
//     totalProbability += 0.1 * calculateProb(currentHand + drawnCard, Target, memo);
//   }
//   memo[currentHand] = totalProbability;
//   return totalProbability;
// }

// let startingHand = 15;
// let Target = 21;

// console.log(blackJackProbability(startingHand, Target));


//REVEAL MINESWEEPER

function RevealMinesweeper(board, row, col){
  if(board[row][col] === 'M'){
    board[row][col] = 'X';
    return board;
  }

  let neighbors = getNeighbors(board, row, col);
  let adjacentPoint = 0;
  for(let [neighborRow, neighborCol] of neighbors){
    if(board[neighborRow][neighborCol] === 'M'){
      adjacentPoint += 1;
    }
  }

  if(adjacentPoint > 0){
    board[row][col] = adjacentPoint.toString();
  } else {
    board[row][col] = 0;
    for(let [neighborRow, neighborCol] of neighbors){
      if(board[neighborRow][neighborCol] === 'H'){
        RevealMinesweeper(board, neighborRow, neighborCol);
      }
    }
  }
  return board;
}

function getNeighbors(board, row, col){
  let directions = [
    [1, 0], [0, 1], [-1, 0], [0, -1],
    [-1, 1], [1, -1], [1, 1], [-1, -1]
  ];

  let neighbors = [];
  for(let [currentRow, currentCol] of directions){
    let newRow = row + currentRow;
    let newCol = row + currentCol;
    if(0 <= newRow && newRow < board.length && 0 <= newCol && newCol < board[0].length){
      neighbors.push([newRow, newCol]);
    }
  }
  return neighbors;
}


let board = [
  ['H', 'H', 'H', 'H', 'H'],
  ['H', 'M', 'H', 'H', 'H'],
  ['H', 'H', 'H', 'M', 'H'],
  ['H', 'H', 'H', 'H', 'H'],
  ['H', 'H', 'M', 'H', 'H']
];

// Function to reveal a cell at (row, col)
console.log(RevealMinesweeper(board, 1, 2));
