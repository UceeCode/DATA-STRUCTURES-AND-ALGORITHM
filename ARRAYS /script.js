//Validate Subsequence

// let arr = [1,5,3,7,8,9];
// let Subsequence = [1, 5, 7];

// function validatesequence(arr, sequence){
//     let arrIdx = 0;
//     let seqIdx = 0;

//     while(arrIdx < arr.length && seqIdx < sequence.length){
//         if(arr[arrIdx] === sequence[seqIdx]){
//             seqIdx++
//         }
//         arrIdx++;
//     }
//     return seqIdx === sequence.length;
// }

// let sequence = validatesequence(arr, Subsequence);
// console.log(sequence);


//Sorted Squared Array

// function SortedSquaredArray(array){
//     let sortedArray = new Array(array.length);

//     for(let i = 0; i < array.length; i++){
//         let values = array[i];
//         sortedArray[i] = values * values;

//         sortedArray.sort((a, b) => a - b);
//     }
//     return sortedArray;
// }

// let arr = [2,4,6,8,10];
// let sortsquarearray = SortedSquaredArray(arr);
// console.log(sortsquarearray);


// function SortedSquaredArray(array){
//     let SortedArray = new Array(array.length);

//     let firstIdx = 0;
//     let lastIdx = array.length - 1;

//     for(let i = array.length - 1; i>= 0; i--){
//         let firstval = array[firstIdx];
//         let lastval = array[lastIdx];

//         if(Math.abs(firstval) > Math.abs(lastval)){
//             SortedArray[i] = firstval * firstval;
//             firstval++;
//         } else {
//             SortedArray[i] = lastval * lastval;
//             lastIdx--;
//         }
//     }
//     return SortedArray;
// }

// let arr = [2,4,6,8,10];
// let sortsquarearray = SortedSquaredArray(arr);
// console.log(sortsquarearray);

//TOURNAMENT WINNER


// // Define a constant to represent when the home team wins
// const HOME_TEAM_WON = 1;

// // Function to determine the tournament winner
// function tournamentWinner(competition, results) {
//     // Initialize the current best team to the first team in the competition
//     let currentBestTeam = '';
    
//     // Create an object to store scores, starting with the current best team
//     let scores = { [currentBestTeam]: 0 };

//     // Loop through each match in the competition
//     for (let i = 0; i < competition.length; i++) {
//         // Get the result of the match
//         let result = results[i];

//         // Split the competition entry to get the names of the home and away teams
//         let [homeTeam, awayTeam] = competition[i];

//         // Determine the winning team based on the result
//         let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

//         // Update the scores for the winning team
//         updateScores(winningTeam, 3, scores);

//         // Check if the winning team has more points than the current best team
//         if (scores[winningTeam] > scores[currentBestTeam]) {
//             // If yes, update the current best team
//             currentBestTeam = winningTeam;
//         }
//     }
//     // Return the name of the current best team, which is the tournament winner
//     return currentBestTeam;
// }

// // Function to update scores for a team
// function updateScores(team, points, scores) {
//     // If the team is not already in the scores object, initialize its score to 0
//     if (!(team in scores)) scores[team] = 0;
    
//     // Add the points to the team's score
//     scores[team] += points;
// }

// // Example usage:
// let competition = [
//     "Player1 Player2",
//     "Player3 Player4",
//     "Player2 Player3",
//     "Player4 Player1",
//     "Player1 Player3"
// ];
// let results = [1, 0, 1, 0, 1]; // 1 means home team won, 0 means away team won

// // Determine the tournament winner
// let winner = tournamentWinner(competition, results);

// // Output the tournament winner
// console.log(winner);

// let HOME_TEAM_WON = 1;
// function tournamentWinner(competition, results){
//     let currentBestTeam = competition[0].split(" ")[0];
//     let score = {[currentBestTeam] : 0};

//     for(let i = 0; i < competition.length; i++){
//         let result = results[i];
//         let [home, away] = competition[i].split(' ');

//         let winningTeam;
//         if(result === HOME_TEAM_WON){
//             winningTeam = home;
//         } else {
//             winningTeam = away;
//         }

//         updateScores(winningTeam, 3, score);

//         if(score[winningTeam] > score[currentBestTeam]){
//             currentBestTeam = winningTeam;
//         }
//     }
//     return currentBestTeam;
// }

// function updateScores(team, points, scores){
//     if(!(team in scores)){
//         scores[team] = 0;
//     }
//     scores[team] += points;
// }

// let competition = [
//         "Player1 Player2",
//         "Player3 Player4",
//         "Player2 Player3",
//         "Player4 Player1",
//         "Player1 Player3"
// ];

// let results = [1, 0, 1, 0, 1];

// console.log(tournamentWinner(competition, results));

//NON CONSTRUCTIBLE CHANGE

// function nonConstructibleChange(coins){
//     coins.sort((a, b) => a - b);

//     let change = 0;

//     for(let i = 0; i < coins.length; i++){
//         let coin = coins[i];

//         if(coin > change + 1){
//             return change + 1;
//         }
//         change += coin;
//     }
//     return change + 1;
// }

// let coin = [1,2,1,7];
// let r = nonConstructibleChange(coin);
// console.log(r);


// function nonConstructibleChange(coin){
//     coin.sort( (a,b)=>a-b );

//     let change = 0;

//     for(let i = 0; i < coin.length; i++){
//         let coinval = coin[i];

//         if(coinval > change + 1){
//             return change + 1;
//         }
//         change += coinval;
//     }
//     return change + 1;
// }

// let num = [1,4,6,10];
// console.log(nonConstructibleChange(num));


// function transposeMatrix(matrix){
//     let numrows = matrix.length;
//     let numcols = matrix[0].length;
//     let result = [];

//     for(let j = 0; j < numcols; j++) {
//         let newRow = [];

//         for(let i = 0; i < numrows; i++){
//             newRow.push(matrix[i][j]);
//             // console.log(matrix[i][j]);
//             //console.log(newRow)
//         }
//         result.push(newRow);
//     }
//     return result;
// }

// let matrix = [
//     [1,2,3],
//     [10,20,30],
// ]


// console.log(transposeMatrix(matrix));

// console.log(matrix.length);
// console.log(matrix[0].length);


//Three Number sum
// let arr = [5,4,1,8,6,2];
// let target = 9;

// let threeNumSum = (array, target) => {
//     //sort in ascending order
//     array.sort((a, b) => a-b);

//     let ThreeNum = [];

//     for(let i = 0; i < array.length - 2; i++){
//         let left = i + 1;
//         let right = array.length - 1;

//         while(left < right){
//             let sum = array[i] + array[left] + array[right];

//             if(sum === target){
//                 ThreeNum.push([array[i], array[left], array[right]]);
//                 left++;
//                 right--;
//             } else if (sum < target){
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
//     return ThreeNum;
// }

// console.log(threeNumSum(arr, target));


// let arr = [5,4,1,8,6,2];
// let target = 10;

// let threeNumSum = (array, target) => {
//     let ThreeNum = [];

//     array.sort((a, b) => a-b);

//     for(let i = 0; i < array.length - 2; i++){
//         let left = i+1;
//         let right = array.length - 1;

//         while(left < right){
//             let sum = array[i] + array[left] + array[right];

//             if(sum === target){
//                 ThreeNum.push([array[i], array[left], array[right]]);
//                 left++;
//                 right--;
//             } else if(sum < target){
//                 left++;
//             }else {
//                 right--;
//             }
//         }
//     }
//     return ThreeNum;
// }

// console.log(threeNumSum(arr, target));


//SMALLEST DIFFERENCE


// let arr1 = [5,8,3,1];
// let arr2 = [9,10,29,6];

// let smallestDifference = (arr1, arr2) => {
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);

//     let oneIdx = 0;
//     let twoIdx = 0;

//     let smallest = Infinity;
//     let current = Infinity;
//     let smallestPairs = [];

//     while(oneIdx < arr1.length && twoIdx < arr2.length){
//         let First = arr1[oneIdx];
//         let Second = arr2[twoIdx];

//         if(First < Second){
//             current = Second - First;
//             oneIdx++;
//         } else if (Second < First){
//             current = First - Second;
//             twoIdx++;
//         } else if (First === Second){
//             return [First, Second];
//         }

//         if(smallest > current){
//             smallest = current;
//             smallestPairs = [First, Second];
//         }
//     }
//     return smallestPairs;
// }

// console.log(smallestDifference(arr1, arr2));


//MOVE ELEMENT TO THE END

// let arr = [3,6,7,8,1,6,2,6,9,8,6];
// let tomove = 6;

// let moveTomovetoEnd = (arr, tomove) => {
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         while(left < right && arr[right] === tomove){
//             right--;
//         }

//         if(arr[left] === tomove){
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//         }
//         left++;
//     }
//     return arr;
// }

// console.log(moveTomovetoEnd(arr, tomove));


//MONOTONIC ARRAY ALGORITHM

// let arr = [5,4,3,2,1];

// let isMonotonic = (array) => {
//     let increasing = true;
//     let decreasing = true;

//     for(let i = 1; i < array.length; i++){
//         let firstval = array[i - 1];
//         let secVal = array[i];

//         if(secVal < firstval){
//             increasing = false;
//         }
//         if(firstval < secVal){
//             decreasing = false;
//         }
//     }
//     return increasing || decreasing;
// }

// console.log(isMonotonic(arr));


// let matrix = [
//     [1,2,3,4],
//     [12,13,14,5],
//     [11,16,15,6],
//     [10,9,8,7]
// ];

// let SpiralTraverse = (array) => {
//     let result = [];

//     let top = 0;
//     let bottom = array.length - 1;
//     let left = 0;
//     let right = array[0].length - 1;

//     while(top <= bottom && left <= right){
//         for(let col = left; col <= right; col++){
//             result.push(array[top][col]);
//         }
//         top++;

//         for(let row = top; row <= bottom; row++){
//             result.push(array[row][right]);
//         }
//         right--;

//         if(top <= bottom){
//             for(let col = right; col >= left; col--){
//                 result.push(array[bottom][col]);
//             }
//             bottom--;
//         }

//         if(left <= right){
//             for(let row = bottom; row >= top; row--){
//                 result.push(array[row][left]);
//             }
//             left++
//         }
//     }
//     return result;
// }

// console.log(SpiralTraverse(matrix));


// let matrix = [
//     [1,2,3,4],
//     [12,13,14,5],
//     [11,16,15,6],
//     [10,9,8,7]
// ];


// let SpiralTraverse = (array) => {
//     let result = [];

//     let top = 0;
//     let bottom = array.length - 1;
//     let left = 0;
//     let right = array[0].length - 1;

//     while (top <= bottom && left <= right){

//         for(let col = left; col <= right; col++){
//             result.push(array[top][col]);
//         }
//         top++;

//         for(let row = top; row <= bottom; row++){
//             result.push(array[row][right]);
//         }
//         right--;

//         if(left <= right){
//             for(let col = right; col >= left; col--){
//                 result.push(array[bottom][col]);
//             }
//             bottom--;
//         }

//         if(top <= bottom){
//             for(let row = bottom; row >= top; row--){
//                 result.push([row][left]);
//             }
//             left++
//         }
//     }
//     return result;
// }

// console.log(SpiralTraverse(matrix));


//LONGEST PEAK

// let arr = [1,2,3,3,4,0,10,6,5,-1,-3,2,3];

// let longestPeak = (arr) => {
//     let longestpeak = 0;

//     let i = 1;
//     while(i < arr.length - 1){
//         let peak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1];
//         if(!peak){
//             i++;
//             continue;
//         }

//         let leftIdx = i - 2;
//         while(leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]){
//             leftIdx--;
//         }

//         let rightIdx = i + 2;
//         while(rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]){
//             rightIdx++;
//         }

//         let currentPeak = rightIdx - leftIdx - 1;
//         longestpeak = Math.max(longestpeak, currentPeak);
//         i = rightIdx;
//     }
//     return longestpeak;
// }

// console.log(longestPeak(arr));


// let arr = [1,2,3,3,4,0,10,6,5,-1,-3,2,3];

// let longestPeak = (arr) => {
//     let Longest = 0;
//     let i = 1;

//     while(i < arr.length - 1){
//         let peak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1];
//         if(!peak){
//             i++;
//             continue;
//         }

//         let left = i - 2;
//         while(left >= 0 && arr[left] < arr[left + 1]){
//             left--;
//         }

//         let right = i + 2;
//         while(right < arr.length && arr[right] < arr[right - 1]){
//         right++;
//         }


//         let currentPeak = right - left - 1;
//         Longest = Math.max(Longest, currentPeak);
//         i = right;
//     }
//     return Longest;
// }

// console.log(longestPeak(arr));



//ARRAY OF PRODUCTS


//Brute force approach;

// let arr = [5,4,3,2,1];

// let arrOfProduct = (arr) => {
//     let product = [];

//     for(let i = 0; i < arr.length; i++){
//         let runningProduct = 1;
//         for(let j = 0; j < arr.length; j++){
//             if(i !== j){
//                 runningProduct *= arr[j];
//             }
//             product[i] = runningProduct;
//         }
//     }
//     return product;
// }

// console.log(arrOfProduct(arr));


//optimal approach

// let arr = [5,4,3,2,1];

// let arrOfProduct = (arr) => {
//     let product = new Array(arr.length).fill(1);
//     let leftProduct = new Array(arr.length).fill(1);
//     let rightProduct = new Array(arr.length).fill(1);

//     let leftRunning = 1;
//     for(let i = 0; i < arr.length; i++){
//         leftProduct[i] = leftRunning;
//         leftRunning *= arr[i];
//     }

//     let Rightrunning = 1;
//     for(let i = arr.length - 1; i > -1; i--){
//         rightProduct[i] = Rightrunning;
//         Rightrunning *= arr[i];
//     }

//     for(let i = 0; i < arr.length; i++){
//         product[i] = leftProduct[i] * rightProduct[i];
//     }
//     return product;
// }

// console.log(arrOfProduct(arr));


// let arr = [5,4,3,2,1];

// let arrOfProduct = (arr) => {
//     let Product = new Array(arr.length).fill(1);

//     let leftRunningProduct = 1;
//     for(let i = 0; i < arr.length; i++){
//         Product[i] *= leftRunningProduct;
//         leftRunningProduct *= arr[i];
//     }

//     let rightRunningProduct = 1;
//     for(let i = arr.length - 1; i > -1; i--){
//         Product[i] *= rightRunningProduct;
//         rightRunningProduct *= arr[i];
//     }

//     return Product;
// }

// console.log(arrOfProduct(arr));



//FIRST DUPLICATE VALUE

// let arr = [1,4,5,3,4,6,6];

// let firstDuplicate = (arr) => {
//     let seen = new Set();

//     for(let i = 0; i < arr.length; i++){
//         if(seen.has(arr[i])){
//             return arr[i];
//         } else {
//             seen.add(arr[i]);
//         }
//     }
//     return -1;
// }

// console.log(firstDuplicate(arr));

// let arr = [1,4,5,3,4,6,6];

// let firstDuplicate = (arr) => {
//     for(let i of arr){
//         let AbsVal = Math.abs(i);

//         if(arr[AbsVal - 1] < 0){
//             return AbsVal;
//         }else{
//             arr[AbsVal - 1] *= -1;
//         }
//     }
//     return -1;
// }

// console.log(firstDuplicate(arr));


//MERGE OVERLAPPING INTERVALS

// let arr = [[1,3], [2,8], [5,12], [14,18], [20,22]];

// let mergeOverlappingIntervals = (arr) => {
//     arr.sort((a, b) => a[0] - b[0]);

//     let Merged = [arr[0]];

//     for(let i = 1; i < arr.length; i++){
//         let lastMerged = Merged[Merged.length - 1];

//         if(arr[i][0] > lastMerged[1]){
//             Merged.push(arr[i]);
//         } else {
//             lastMerged[1] = Math.max(lastMerged[1], arr[i][1]);
//         }
//     }
//     return Merged;
// }

// console.log(mergeOverlappingIntervals(arr));

// let arr = [[1,3], [2,9], [15,18], [12,22]];

// let mergeOverlappingIntervals = (arr) => {
//     arr.sort((a,b) => a[0] - b[0]);

//     let Merged = [arr[0]];

//     for(let i = 1; i < arr.length; i++){
        
//         let LastMerged = Merged[Merged.length - 1];

//         if(arr[i][0] > LastMerged[1]){
//             Merged.push(arr[i]);
//         } else {
//             LastMerged[1] = Math.max(LastMerged[1], arr[i][1]);
//         }
//     }
//     return Merged;
// }

// console.log(mergeOverlappingIntervals(arr));



//BEST SEAT

// let seats = [1,0,1,1,0,0,0,1,0];

// let BestSeat = (arr) => {
//     let BestSpace = -1;
//     let MaxSpace = 0;

//     let left = 0;

//     while(left < arr.length){
//         let right = left + 1;

//         while(right <= arr.length && arr[right] === 0){
//             right += 1;
//         }

//         let AvailableSpace = right - left - 1;
//         if(AvailableSpace > MaxSpace){
//             MaxSpace = AvailableSpace;
//             BestSpace = Math.floor((left + right) / 2);
//         }
//         left = right;
//     }
//     return BestSpace;
// }

// console.log(BestSeat(seats));


//ZERO SUM SUB-ARRAY

// let arr = [4,-3,2,4,-1,-5,7];

// let zeroSumSubarray = (arr) => {
//     let Sums = new Set([0]);

//     let currentSum = 0;

//     for(let val of arr){
//         currentSum += val;

//         if(Sums.has(currentSum)){
//             return true;
//         } else {
//             Sums.add(currentSum);
//         }
//     }
//     return false;
// }

// console.log(zeroSumSubarray(arr));


//MISSING NUMBERS

// let nums = [1, 4, 6, 3];

// function missingNumbers(nums) {
//     // Write your code here.
//     // Create a Set to store the numbers in the input array.
//     let includedNums = new Set(nums);
  
//     // Create an array to store the missing numbers.
//     let solution = [];
  
//     // Loop through the range of numbers from 1 to the length of input array + 2.
//     for (let i = 1; i < nums.length + 3; i++) {
//       // If the current number 'i' is not in the Set of input numbers,
//       // then it is a missing number.
//       if (!includedNums.has(i)) {
//         // Add the missing number to the solution array.
//         solution.push(i);
//       }
//     }
//     // Return the array containing the missing numbers.
//     return solution;
//   }
  
// console.log(missingNumbers(nums));

// let nums = [1, 4, 6, 3];

// let findMissingNum = (arr) => {
//     let foundNumbers = new Set(arr);

//     let missingNum = [];

//     for(let i = 1; i < arr.length + 3; i++){
//         if(!foundNumbers.has(i)){
//             missingNum.push(i);
//         }
//     }
//     return missingNum;
// }

// console.log(findMissingNum(nums));


//MAJORITY ELEMENT
// let arr = [1,1,2,2,7,2,2];
// // let arr = [3,3,4,3,4,4,2,4,4];

// let FindMajorityElement = (arr) => {
//     let MajorElement = null;
//     let Count = 0;

//     for(let val of arr){
//         if(Count === 0){
//             MajorElement = val;
//         }

//         if(val === MajorElement){
//             Count++;
//         } else {
//             Count--;
//         }

//     }
//     return MajorElement;
// }

// console.log(FindMajorityElement(arr));


//SWEET AND SAVORY

// let dishes = [2,5,-4,-7,12,100,-25];
// let target = -20;

// let sweetAndSavory = (arr, target) => {
//     let Sweet = arr.filter(a => a < 0).sort((a, b) => b - a);
//     let Savory = arr.filter(a => a > 0).sort((a, b) => a - b);
    
//     let BestPair = [0, 0];
//     let BestDifference = Infinity;

//     let sweetIdx = 0;
//     let savoryIdx = 0;

//     while(sweetIdx < Sweet.length && savoryIdx < Savory.length){
//         let currentSum = Sweet[sweetIdx] + Savory[savoryIdx];

//         if(currentSum <= target) {
//             let CurrentDifference = target - currentSum;

//             if(CurrentDifference < BestDifference){
//                 BestDifference = CurrentDifference;
//                 BestPair = [Sweet[sweetIdx], Savory[savoryIdx]];
//             }
//             savoryIdx++;
//         } else {
//             sweetIdx++;
//         }
//     }
//     return BestPair;
// }

// console.log(sweetAndSavory(dishes, target));

// let dishes = [-3, -5, 1, 7];
// let target = 8;

// let sweetAndSavory = (arr, target) => {
//     let sweet = arr.filter(a => a < 0).sort((a, b) => b - a);
//     let savory = arr.filter(a => a > 0).sort((a, b) => a - b);

//     let bestPair = [0, 0];
//     let BestDifference = Infinity;

//     let sweetidx = 0;
//     let savoryIdx = 0;

//     while(sweetidx < sweet.length && savoryIdx < savory.length){
//         let currentsum = sweet[sweetidx] + savory[savoryIdx];

//         if(currentsum < target){
//             let CurrentDifference = target - currentsum;
//             if(CurrentDifference < BestDifference){
//                 BestDifference = CurrentDifference;
//                 bestPair = [sweet[sweetidx], savory[savoryIdx]];
//             }
//             savoryIdx++
//         } else {
//             sweetidx++;
//         }
//     }
//     return bestPair;
// }

// console.log(sweetAndSavory(dishes, target));

