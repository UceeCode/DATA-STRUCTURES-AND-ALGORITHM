//Binary Search


// let binarySearch = (array, target) => {
//     let left = 0; 
//     let right = array.length - 1;

//     while(left <= right){
//         let middle = Math.floor(left + right / 2);

//         if(array[middle] === target){
//             return array[middle];
//         } 

//         if(target < array[middle]){
//             right--;
//         } else {
//             left ++;
//         }
//     }
//     return -1;
// }

// let arr = [3,4,6,3,7,8];
// let target = 8;

// console.log(binarySearch(arr, target));


//THREE NUMBER SUM

// let threenumsum = (array) => {
//     let threeLargest = [null, null, null];

//     let ShiftorUpdate = (threelargestArray, numInarray, index) => {
//         for(let i = 0; i <= index; i++){
//             if(i === index){
//                 threelargestArray[i] = numInarray;
//             } else {
//                 threelargestArray[i] = threelargestArray[i+1];
//             }
//         }
//     }

//     let updateLargest = (threeLargest, numInarray) => {
//         if(threeLargest[2] === null || numInarray > threeLargest[2]){
//             ShiftorUpdate(threeLargest, numInarray, 2);
//         } else if (threeLargest[1] === null || numInarray > threeLargest[1]){
//             ShiftorUpdate(threeLargest, numInarray, 1);
//         } else if (threeLargest[0] === null || numInarray > threeLargest[0]){
//             ShiftorUpdate(threeLargest, numInarray, 0);
//         }
//     }

//     for(let i = 0; i < array.length; i++){
//         let numInarray = array[i];
//         updateLargest(threeLargest, numInarray);
//     }
//     return threeLargest;
// }

// let threeLarge = [20,40,60,80,100];
// console.log("Three largest numbers are: " + threenumsum(threeLarge));

