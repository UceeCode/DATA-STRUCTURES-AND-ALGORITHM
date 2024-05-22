//TWO NUMBERS SUM
//O(n^2) time || O(1) space
// let array = [2,5,7,8,9,20];
// let targetsum = 25;

// let sumoftwo = (array, targetsum) => {
//     for (let i = 0; i < array.length - 1; i++){
//         let firstnum = array[i];
//         for (let j = i + 1; j < array.length; j++ ){
//             let secondnum = array[j];
//             if ( firstnum + secondnum ===  targetsum){
//                 return [firstnum, secondnum];
//             }
//         }
//     }
//     return [];
// }

//O(n) || O(n) space
// let sumoftwo = (array, targetsum) => {
//     // Initialize hash table
//     let nums = {};
//     for (let num of array) {
//         let potentialMatch = targetsum - num;
//         if (potentialMatch in nums) {
//             // If the potential match exists in the hash table, return the pair
//             return [potentialMatch, num];
//         } else {
//             // Otherwise, store the current number in the hash table
//             nums[num] = true;
//         }
//     }
//     return []; // If no pair is found, return an empty array
// }


//O(nlog(n)) time || 0(1) space
// let sumoftwo = (array, targetsum) => {
//     // Sort the array in non-decreasing order
//     array.sort((a, b) => a - b);
    
//     // Initialize two pointers, left and right, at the beginning and end of the sorted array
//     let left = 0;
//     let right = array.length - 1;

//     // Iterate until the left pointer is less than the right pointer
//     while (left < right) {
//         // Calculate the sum of the elements pointed by left and right pointers
//         let currentSum = array[left] + array[right];
        
//         // If the current sum equals the target sum, return the pair
//         if (currentSum === targetsum) {
//             return [array[left], array[right]];
//         } 
//         // If the current sum is less than the target sum, move the left pointer to the right
//         else if (currentSum < targetsum) {
//             left++;
//         } 
//         // If the current sum is greater than the target sum, move the right pointer to the left
//         else {
//             right--;
//         }
//     }
//     // If no pair is found, return an empty array
//     return [];
// }

// console.log(sumoftwo(array, targetsum));

// let prev2 = 0;
// let prev1 = 1;

// for (let i = 0; i < 18; i++){
//     let fibo = prev1 + prev2;
//     console.log(fibo);
//     prev2 = prev1;
//     prev1 = fibo;
// }


// console.log(0)

// let count = 0;

// let fibo = (p1, p2) => {
//     if (count < 19){
//         let newfibo = p1 + p2;
//         console.log(newfibo);
//         p2 = p1;
//         p1 = newfibo;
//         count++
//         fibo(p1, p2);
//     }else{
//         return;
//     }
// }

// fibo(1, 0)

// let f = (n) => {
//     if (n <= 1){
//         return  n;
//     }else {
//         return f(n - 1) + f(n - 2);
//     }
// }

// console.log(f(6));

//Finding minimum value in array
// let my_array = [7, 12, 9, 4, 11];
// let minVal = my_array[0]; // Step 1

// for (let i = 0; i < my_array.length; i++) { // Step 2
//    if (my_array[i] < minVal) { // Step 3
//         minVal = my_array[i];
//     }
// }

// console.log('Lowest value: ', minVal); // Step 4


//BUBBLE SORT

// let num = [30, 10, 20, 100, 50, 40, 70, 80, 60, 90,];
// //let i = 0, if i < the last index of the array increase by i++

// for (let i = 0; i < num.length - 1; i++){
//     for(let j = 0; j < num.length - i - 1; j++){
//         if (num[j] > num[j + 1]){
//             let temp = num[j];
//             num[j] = num[j+1];
//             num[j + 1] = temp;
//         }
//     }
// }

// console.log(num)

// let n = [3,6,4,1,2,8,7,5,9,10];

// for (let i = 0; i<n.length-1; i++){
//     for (let j = 0; j < n.length -i - 1; j++){
//         if (n[j] > n[j+1]){
//             let temp = n[j];
//             n[j] = n[j+1];
//             n[j+1] = temp;
//         }
//     }
// }

// console.log(n);

//BETTER BUBBLE SORT;

// let num = [10, 30, 20, 100, 50, 40, 70, 80, 60, 90];


// for (let i = 0; i < num.length - 1; i++){
//     let swapped = false;
//     for(let j = 0; j < num.length - i - 1; j++) {
//         if (num[j] > num[j + 1]){
//             let temp = num[j];
//             num[j] = num[j+1];
//             num[j+1] = temp;
//             swapped = true;
//         }
      
//     }
//     if(!swapped){
//         break;
//     }
// }

// console.log(num);


// SELECTION SORT

// let num = [10, 30, 20, 100, 50, 40, 70, 80, 60, 90];

// // Iterate over each pass through the array
// for (let i = 0; i < num.length - 1; i++) {
//     // Initialize the index of the smallest value to the current index i
//     let minIndex = i;

//     // Iterate over the unsorted portion of the array to find the index of the minimum element
//     for (let j = i + 1; j < num.length; j++) {
//         // Compare each element with the current minimum element
//         if (num[j] < num[minIndex]) {
//             // Update minIndex if a smaller element is found
//             minIndex = j;
//         }
//     }

//     // Swap the minimum element with the current element at index i
//     if (minIndex !== i) {
//         let temp = num[minIndex];
//         num[minIndex] = num[i];
//         num[i] = temp;
//     }
// }

// console.log(num);


// for (let i = 0; i < num.length - 1; i++) {
//     let minIndex = i;

//     // Find the index of the smallest element in the unsorted portion of the array
//     for (let j = i + 1; j < num.length; j++) {
//         if (num[j] < num[minIndex]) {
//             minIndex = j;
//         }
//     }

//     // Swap the smallest element with the element at the current index
//     if (minIndex !== i) {
//         let temp = num[minIndex];
//         num[minIndex] = num[i];
//         num[i] = temp;
//     }
// }

// console.log(num)

// console.log("UNSORTED " + num);

// for (let i = 0; i < num.length -1; i++){
//     let min = i;
//     for (let j = i+1; j<num.length; j++){
//         if (num[j] < num[min]){
//             min = j;
//         }
//     }
//     if (min !== i){
//         let temp = num[min];
//         num[min] = num[i];
//         num[i] = temp;
//     }
// }
// console.log("SORTED " + num)

// let num = [10, 30, 20, 100, 50, 40, 70, 80, 60, 90];

// for (let i = 0; i < num.length -1; i++){
//     let min = i;
//     for (let j = i+1; j <num.length; j++){
//         if (num[j] < num[min]){
//             min = j;
//         }
//     }
//     if (min != i){
//         let temp = num[min];
//         num[min] = num[i];
//         num[i] = temp;
//     }
// }
// console.log(num);

//BETTER SELECTION SORTING


// Array of numbers to be sorted
// let num = [10, 30, 20, 100, 50, 40, 70, 80, 60, 90];

// // Iterate over each pass through the array
// for (let i = 0; i < num.length - 1; i++) {
//     // Assume the current index (i) as the index of the minimum value
//     let min = i;

//     // Iterate over the unsorted portion of the array to find the index of the minimum element
//     for (let j = i + 1; j < num.length; j++) {
//         // Compare each element with the current minimum element
//         if (num[j] < num[min]) {
//             // If a smaller element is found, update the index of the minimum element
//             min = j;
//         }
//     }

//     // Swap the minimum element with the current element at index i
//     [num[i], num[min]] = [num[min], num[i]];
// }

// // Print the sorted array
// console.log('Sorted: ' + num);


//INSERTION SORT

// We have a box full of numbered toys (array of numbers)
// let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
// let n = my_array.length; // Count the number of toys in the box

// // Now, we want to sort these toys!

// // We start from the second toy (index 1) because the first toy is already considered sorted.
// for (let i = 1; i < n; i++) {
//     // We take out the current toy to find its correct place in the sorted part of the box
//     let insertIndex = i;
//     let currentValue = my_array.splice(i, 1)[0]; // Take out the current toy from the box

//     // We compare the current toy with the sorted toys in the box to find its correct position
//     for (let j = i - 1; j >= 0; j--) {
//         // If the current toy is smaller than a sorted toy, we move that sorted toy to the right to make space
//         if (my_array[j] > currentValue) {
//             insertIndex = j;
//         }
//     }

//     // Now that we found the correct position for the current toy, we put it back into the box
//     my_array.splice(insertIndex, 0, currentValue); // Put the current toy at its correct position
// }

// // After sorting, we look into the box and see all the toys arranged in order!
// console.log("Sorted array:", my_array);

// let num = [1,3,6,7,8,5,20];

// for(let i = 1; i < num.length; i++){
//     let unsorted = i;
//     let takeoutunsort = num.splice(i, 1)[0];

//     for (let j = i-1; j >=0; j--){
//         if (num[j] > takeoutunsort){
//             unsorted = j;
//         }
//     }

//     num.splice(unsorted, 0, takeoutunsort);
// }
// console.log(num)




//BETTER INSERTION SORT


// let my_array = [64, 34, 25, 12, 22, 11, 90, 5];

// // Count the number of toys in the collection
// let n = my_array.length;

// // Now, let's sort these toys!
// for (let i = 1; i < n; i++) {
//     let insertIndex = i;
//     let currentValue = my_array[i];

//     // Compare the current toy with the sorted toys in the collection
//     for (let j = i - 1; j >= 0; j--) {
//         // If the current toy is smaller than a sorted toy, move that sorted toy to the right to make space
//         if (my_array[j] > currentValue) {
//             my_array[j + 1] = my_array[j];
//             insertIndex = j;
//         } else {
//             break; // Break out of the loop if the current toy is in its correct position
//         }
//     }

//     // Put the current toy at its correct position in the sorted collection
//     my_array[insertIndex] = currentValue;
// }

// After sorting, we see all the toys arranged in order!
// console.log("Sorted array:", my_array);

// let num = [1,3,6,5,4,7,8];

// for (let i = 1; i < num.length; i++){
//     let unsorted = i;
//     let valuestobesorted = num[i];

//     for (let j=i-1; j=>0; j--){
//         if(num[j] > valuestobesorted){
//             num[j+1] = num[j];
//             unsorted = j;
//         }else {
//             break;
//         }
//     }

//     num[unsorted] = valuestobesorted;
// }

// console.log(num)

//QUICK SORT

// let num = [2, 4, 5, 2, 1, 4, 7, 4];

// // Function to partition the array and return the index of the pivot element
// let partition = (num, low, high) => {
//     // Selects the last element as pivot
//     let pivot = num[high];
//     let i = low - 1; // Initialize an index to keep track of smaller elements

//     // Iterate through the array from the starting index to the ending index
//     for (let j = low; j < high; j++) {
//         if (num[j] <= pivot) {
//             // Increment the index and swap num[i] and num[j] if num[j] is less than or equal to pivot
//             i++;
//             [num[i], num[j]] = [num[j], num[i]];
//         }
//     }

//     // Swap num[i+1] and pivot to place the pivot at its correct position
//     [num[i + 1], num[high]] = [num[high], num[i + 1]];

//     // Return the partition index
//     return i + 1;
// }

// // Function to perform the quicksort algorithm recursively
// let quicksort = (num, low = 0, high = num.length - 1) => {
//     // Check if there are at least two elements in the subarray
//     if (low < high) {
//         // Partition the array and get the index of the pivot
//         let pivotIndex = partition(num, low, high);

//         // Recursively apply quicksort to the subarray before the pivot
//         quicksort(num, low, pivotIndex - 1);

//         // Recursively apply quicksort to the subarray after the pivot
//         quicksort(num, pivotIndex + 1, high);
//     }
// }

// // Sort the array using quicksort
// quicksort(num);

// // Print the sorted array
// console.log(num);


// let num = [2, 4, 5, 2, 1, 4, 7, 4, 100];

// let partition = (num, low, high) => {
//     let pivot = num[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++){
//         if (num[j] <= pivot){
//             i++;
//             [num[i], num[j]] = [num[j], num[i]];
//         }
//     }
//     [num[i+1], num[high]] = [num[high], num[i+1]];
//     return i+1;
// }

// let quicksort = (num, low = 0, high = num.length - 1) => {
//     if (low < high){
//         let pivotindex = partition(num, low, high);
//         quicksort(num, low, pivotindex - 1);
//         quicksort(num, pivotindex + 1, high);
//     }
// }

// quicksort(num);
// console.log(num);


//COUNTING SORT
// let num = [8, 4, 5, 3, 1, 2, 7, 9, 6, 10];

// let countingsort = (arr) => {
//     // Find the highest value in the array to create a count array of plus 1
//     let highestval = Math.max(...arr);

//     // Create count array with 0s
//     let count = new Array(highestval + 1).fill(0); //This creates a new array with length maxVal + 1 and fills it with 0.

//     // Count the occurrences of each element in the input array by increasing their corresponding index in count array
//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i]]++;
//     }

//     let sortednum = [];
//     for (let i = 0; i < count.length; i++) {
//         while (count[i] > 0) {
//             sortednum.push(i);
//             count[i]--;
//         }
//     }

//     return sortednum;
// }

// let sorted = countingsort(num);

// console.log(sorted);

// let countsort = (a) => {
//     let max = Math.max(...a);
//     let count = new Array(max + 1).fill(0);

//     for(let i = 0; i < a.length; i++){
//         count[a[i]]++;
//     }

//     let sorted = []
//     for(let i = 0; i < a.length; i++){
//         while(count[i] > 0){
//             sorted.push(i);
//             count[i]--;
//         }
//     }
//     return sorted;
// }

// let sort = countsort(num);
// console.log(sort);

//RADIX SORT

// let myArray = [170, 45, 75, 90, 802, 24, 2, 66];


// // Create an array of buckets to hold numbers based on their digit place
// let radixArray = [[], [], [], [], [], [], [], [], [], []];

// // Find the maximum value in the array to determine the number of digits in the largest number
// let maxVal = Math.max(...myArray);

// // Initialize the exponent to 1 to start with the rightmost digit
// let exp = 1;

// // Continue sorting until all digits have been considered
// while (Math.floor(maxVal / exp) > 0) {
//     // Distribute numbers from myArray into buckets based on their digit place
//     while (myArray.length > 0) {
//         let val = myArray.pop();
//         let radixIndex = Math.floor((val / exp) % 10);
//         radixArray[radixIndex].push(val);
//     }

//     // Collect numbers from buckets back into myArray
//     for (let bucket of radixArray) {
//         while (bucket.length > 0) {
//             let val = bucket.pop();
//             myArray.push(val);
//         }
//     }

//     // Move to the next digit place (tens, hundreds, etc.) by multiplying the exponent by 10
//     exp *= 10;
// }

// console.log("Sorted array:", myArray);

// let no = [54,65,12,67,99,34,12];

// let radixArray = [[], [], [], [], [], [], [], [], [], []];
// let maxVal = Math.max(...no);
// let exp = 1;

// while(Math.floor(maxVal/exp) > 0){
//     while(no.length > 0){
//         let val = no.pop();
//         let radixIndex = Math.floor((val/exp) % 10);
//         radixArray[radixIndex].push(val);
//     }

//     for(let i = 0; i < radixArray.length; i++){
//         let bucket = radixArray[i];
//         while(bucket.length > 0){
//             let val = bucket.pop();
//             no.push(val);
//         }
//     }
//     exp*=10;
// }

// console.log(no);


// let n = [70,40,25,21,56,98,28,74,10,];

// let radixarr = [[], [], [], [], [], [], [], [], [], []];
// let maxVal = Math.max(...n);
// let exp = 1;

// while(Math.floor(maxVal/exp) > 0){
//     while(n.length > 0){
//         let val = n.pop();
//         let radixIndex = Math.floor((val/exp) % 10);
//         radixarr[radixIndex].push(val);
//     }

//     for(let i = 0; i < radixarr.length; i++){
//         let bucket = radixarr[i];
//         while(bucket.length > 0){
//             let val = bucket.pop();
//             n.push(val);
//         }
//     }
//     exp *= 10;
// }

// console.log(n);



//MERGE SORT

// Merge Sort Algorithm

// let numb = [87, 54, 7, 45, 35, 3, 64, 2];

// // Function to perform Merge Sort
// function mergesort(arr) {
//     // Base case: If the array has one or fewer elements, it's already sorted
//     if (arr.length <= 1) {
//         return arr;
//     }

//     // Find the middle index of the array
//     let mid = Math.floor(arr.length / 2);

//     // Divide the array into two halves: left and right
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     // Recursively sort the left and right halves
//     let sortedLeft = mergesort(left);
//     let sortedRight = mergesort(right);

//     // Merge the sorted halves and return the result
//     return merge(sortedLeft, sortedRight);
// }

// // Function to merge two sorted arrays
// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;

//     // Compare elements from the left and right arrays and merge them into the result array
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     // Append any remaining elements from the left and right arrays to the result array
//     result.push(...left.slice(i));
//     result.push(...right.slice(j));

//     return result;
// }

// // Sort the array using Merge Sort
// let sortedArray = mergesort(numb);

// // Print the sorted array
// console.log("Sorted array:", sortedArray);


// let no = [8,6,4,6,3,2,4,6,2,1];

// let mergesort = (arr) => {
//     if (arr.length <= 1){
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     let leftsort = mergesort(left);
//     let rightsort = mergesort(right);

//     return merge(leftsort, rightsort)
// }

// function merge(left, right){
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while(i < left.length && j < right.length){
//         if (left[i] < right[j]){
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     result.push(...left.slice(i));
//     result.push(...right.slice(j));

//     return result;
// }

//  let sort = mergesort(no);
//  console.log(sort);


//THREE NUMBER SORT
// let num = [1,2,1,2,3,3,2,1,2];
// let order = [2,1,3];
// let threenumbersort = (array, order) => {
//     //extract values from the order array
//     let firstval = order[0];
//     let secondval = order[1];

//     //initialize indices to track the position of the first and second value or  // Initialize pointers for the three sections of the array
//     let firstIndex = 0; // Pointer for the section with the first value
//     let secondIndex = 0; // Pointer for the section with the second value
//     let thirdIndex = array.length - 1;  // Pointer for the section with the third value

//     // Iterate through the array until the second pointer meets or exceeds the third pointer
//     while(secondIndex <= thirdIndex){
//         let value = array[secondIndex]; //get the current value at the second pointer position

//         //if the current value matches the first value, swap it with the element at the first pointer position  
//         if(value === firstval){
//             // Swap elements using array destructuring
//             [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
//             firstIndex++; //move the first pointer to the right
//             secondIndex++; //move the second pointer to the right
//         } else if(value === secondval){
//             [array[secondIndex], array[thirdIndex]] = [array[thirdIndex], array[secondIndex]]
//             thirdIndex--;
//         } else {
//             secondIndex++;
//         }
//     }
//     return array;
// }

// let sorted = threenumbersort(num, order);
// console.log(sorted);

// let threenumsort = (array, order) => {
//     let firstnum = order[0];
//     let secondnum = order[1];

//     let firstIndex = 0;
//     let secondIndex = 0;
//     let thirdIndex = array.length - 1;

//     while(secondIndex <= thirdIndex){
//         let value = array[secondIndex];

//         if(value === firstnum){
//             swap(firstIndex, secondIndex, array);
//             firstIndex++;
//             secondIndex++;
//         } else if(value === secondnum){
//             secondIndex++
//         } else {
//            swap(secondIndex, thirdIndex, array)
//            thirdIndex--;
//         }
//     }
//     return array;
// }

// function swap(i, j, array){
//     [array[i], array[j]] = [array[j], array[i]];
// }

// let sort = threenumsort(num, order);
// console.log(sort);

// let n = [3,2,3,1,2,3,2,2,1,2,1,1,3];
// let order = [3,2,1];


// let threenumsort = (array, order) => {
//     let firstnum = order[0];
//     let secondnum = order[1];

//     let firstindex = 0;
//     let secondindex = 0;
//     let thirdindex = array.length - 1;

//     while (secondindex <= thirdindex){
//         let value = array[secondindex];

//         if (value === firstnum){
//             [array[firstindex], array[secondindex]] = [array[secondindex], array[firstindex]];
//             firstindex++;
//             secondindex++;
//         } else if (value === secondnum){
//             secondindex++;
//         } else {
//             [array[secondindex], array[thirdindex]] = [array[thirdindex], array[secondindex]];
//             thirdindex--;
//         }
//     }

//     return array;
// }

// let sort = threenumsort(n, order);
// console.log(sort);


//HEAP SORT
// function heapsort(arr) {
//     let n = arr.length;
    
//     // Build max heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // One by one extract elements from heap
//     for (let i = n - 1; i > 0; i--) {
//         // Move current root to end  
//         [arr[0], arr[i]] = [arr[i], arr[0]];

//         // Call heapify on the reduced heap
//         heapify(arr, i, 0);
//     }

//     return arr;
// }

// function heapify(arr, n, i) {
//     // Initialize largest as root
//     let largest = i;
//     let l = 2 * i + 1; // Left child
//     let r = 2 * i + 2; // Right child

//     // If left child is larger than root
//     if (l < n && arr[l] > arr[largest]) {
//         largest = l;
//     }

//     // If right child is larger than largest so far
//     if (r < n && arr[r] > arr[largest]) {
//         largest = r;
//     }

//     // If largest is not root
//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];

//         // Recursively heapify the affected sub-tree
//         heapify(arr, n, largest);
//     }
// }

// // Example usage:
// let num = [4, 5, 3, 2, 3, 1];
// let sortedArray = heapsort(num);
// console.log(sortedArray);


// function heap(arr){
//     //getting length of array
//     let n = arr.length;

//     //build max heap
//     for(let i = Math.floor(n/2) - 1; i >= 0; i--){
//         heapify(arr, n, i);
//     }

//     //extract elements from the heap one by one from the last index element 
//     for(let i = n - 1; i > 0; i--){
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         //heapify the reduced heap
//         heapify(arr, i, 0)
//     }
    
//     return arr;
// }


// function heapify(arr, n, i){
//     //make current elements or largest element as root
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if(left < n && arr[left] > arr[largest]){
//         largest = left;
//     }

//     if(right < n && arr[right] > arr[largest]){
//         largest = right;
//     }

//     if(largest !== i){
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];

//         heapify(arr, n, largest);
//     }
// }

// let num = [2,4,5,3,2,1,3,3];
// heap(num);
// console.log(num)

// function heapsort(arr){
//     let n = arr.length;

//     for(let i = Math.floor(n/2) - 1; i >= 0; i--){
//         heapify(arr, n, i);
//     }

//     for(let i = n-1; i > 0; i--){
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }

//     return arr;
// }

// function heapify(arr, n, i){
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if(left < n && arr[left] > arr[largest]){
//         largest = left;
//     }

//     if(right < n && arr[right] > arr[largest]){
//         largest = right;
//     }

//     if(largest !== i){
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

// let n = [3,4,5,6,2,3];
// heapsort(n);
// console.log(n);

//COUNT INVERSIONS

// Function to count inversions in an array
// function countInversion(arr){
//     // Base case: If the array size is 0 or 1, return 0 (no inversions)
//     if(arr.length <= 1){
//         return 0;
//     }

//     // Function to merge two sorted arrays and count split inversions
//     function mergeAndCountSplitInversion(){
//         let mergedArray = []; // Array to store merged result
//         let splitInversion = 0; // Counter to count split inversions
//         let i = 0; // Pointer for left array
//         let j = 0; // Pointer for right array

//         // Merge left and right arrays while counting split inversions
//         while(i < left.length && j < right.length){
//             // If left element is smaller, no inversions
//             if(left[i] < right[j]){
//                 mergedArray.push(left[i]);
//                 i++; // Move pointer in left array
//             } else {
//                 // If right element is smaller, it forms inversions with remaining elements in left array
//                 mergedArray.push(right[j]);
//                 j++; // Move pointer in right array
//                 splitInversion += left.length - i; // Count inversions
//             }
//         }

//         // Add remaining elements from left and right arrays
//         mergedArray = mergedArray.concat(left.slice(i)).concat(right.slice(j));
//         // Return merged array and split inversions
//         return [mergedArray, splitInversion];
//     }

//     // Divide the array into two halves
//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid); // Left half of array
//     let right = arr.slice(mid); // Right half of array

//     // Recursively count inversions in both halves
//     let leftInversion = countInversion(left);
//     let rightInversion = countInversion(right);

//     // Merge the two halves and count split inversions
//     let [mergedArray, splitInversion] = mergeAndCountSplitInversion(left, right);

//     // Add up the total inversions
//     let totalInversion = leftInversion + rightInversion + splitInversion;

//     return totalInversion; // Return total count of inversions
// }

// let n = [1,3,2];
// countInversion(n); // Count inversions in array n
// console.log(countInversion(n)); // Output the array (This won't change the array, as the function only counts inversions)


// function countInversion(arr){
//     if (arr.length <= 1){
//         return 0;
//     }

//     function mergeandcountsplitinversion(){
//         let mergedarr = [];
//         let splitinversion = 0;
//         let i = 0;
//         let j = 0;

//         while( i < left.length && j < right.length){
//             if(left[i] < right[i]){
//                 mergedarr.push(left[i]);
//                 i++;
//             } else {
//                 mergedarr.push(right[i]);
//                 j++;
//                 splitinversion += left.length - i;
//             }
//         }

//         mergedarr = mergedarr.concat(left.slice(i)).concat(right.slice(j));
//         return [mergedarr, splitinversion];
//     }

//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     let leftInversion = countInversion(left);
//     let rightInversion = countInversion(right);

//     let [mergedarr, splitInversion] = mergeandcountsplitinversion(left, right);

//     let total = leftInversion + rightInversion  + splitInversion;

//     return total;
// }

// let n = [3,4,5,2];
// console.log(countInversion(n))


//LINEAR SEARCH 

// function linearsearch(array, target) {
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// let n = [3,4,5,2,7,6];
// let target = 5;
// console.log(linearsearch(n,target));

//BINARY SEARCH

// function binarysearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);

//         if(arr[mid] === target){
//             return mid;
//         }

//         if(target < arr[mid]){
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// }

// let n = [1,3,5,6,7,8];
// let target = 5;
// console.log(binarysearch(n, target));

//THREE LARGEST NUMBERS ALGORITHM

// function threelargestnumbers(array) {
//     let largestnumbers = [null, null, null];

//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         // Update the three largest numbers with the current number
//         Updatelargest(largestnumbers, num);
//     }

//     function Updatelargest(largestnumbers, num) {
//         if (largestnumbers[2] === null || num > largestnumbers[2]) {
//             shiftandUpdate(largestnumbers, num, 2);
//         } else if (largestnumbers[1] === null || num > largestnumbers[1]) {
//             shiftandUpdate(largestnumbers, num, 1);
//         } else if (largestnumbers[0] === null || num > largestnumbers[0]) {
//             shiftandUpdate(largestnumbers, num, 0);
//         }
//     }

//     function shiftandUpdate(array, num, idx) {
//         for (let i = 0; i <= idx; i++) {
//             if (i === idx) {
//                 array[i] = num;
//             } else {
//                 array[i] = array[i + 1];
//             }
//         }
//     }

//     return largestnumbers;
// }

// let n = [6, 8, 9, 3, 2, 5, 4];
// let result = threelargestnumbers(n);
// console.log(result); 


// function findthreelargenum(arr){
//     let threelarge = [ null, null, null];
    
//     for(let i = 0; i < arr.length; i++){
//         let num = arr[i];
//         Updatelarge(threelarge, num)
//     }

//     function Updatelarge(threelarge, num){
//         if(threelarge[2] === null || num > threelarge[2]){
//             shiftandupdate(threelarge, num, 2);
//         } else if(threelarge[1] === null || num > threelarge[1]){
//             shiftandupdate(threelarge, num, 1);
//         } else if(threelarge[0] === null || num > threelarge[0]){
//             shiftandupdate(threelarge, num, 0);
//         }
//     }

//     function shiftandupdate(array, num, index){
//         for (let i = 0; i <= index; i++){
//             if(i === index){
//                 array[i] = num;
//             }else{
//                 array[i] = array[i + 1];
//             }
//         }
//     }
//     return threelarge;
// }

// let nu = [5, 7, 1, 2, 4, 3];
// let result = findthreelargenum(nu);
// console.log(result);

//SEARCH IN SORTED MATRIX

// function SearchInSortedMatrix(matrixarray, target){
//     if(matrixarray.length === 0 || !matrixarray || matrixarray[0].length === 0){
//         return [-1, -1];
//     }

//     let row = 0;
//     let col = matrixarray[0].length - 1;

//     while(row < matrixarray.length && col >=0){
//         if(matrixarray[row][col] === target){
//             return [row, col];
//         } else if (matrixarray[row][col] < target){
//             row++;
//         } else {
//             col--;
//         }
//     }
//     return [-1, -1];
// }

// let matrix = [
//     [2,5,3,6,10],
//     [4,7,6,4,2]
// ];
// let target = 3;
// let result = SearchInSortedMatrix(matrix, target)
// console.log(result);

// function searchinsortedmatrix(array, target){
//     if(!array || array.length === 0 || array[0].length === 0){
//         return [-1, -1];
//     }

//     let row = 0;
//     let col = array[0].length - 1;

//     while(row < array.length && col >= 0){
//         if(array[row][col] === target){
//             return [row, col];
//         } else if (array[row][col] < target){
//             row++;
//         } else {
//             col--;
//         }
//     }
//     return [-1, -1];
// }

// let array = [
//     [1,1,2,4,10],
//     [0,3,6,14,20]
// ];
// let target = 14;
// let result = searchinsortedmatrix(array, target)
// console.log(result);

//SHIFTED BINARY SEARCH

