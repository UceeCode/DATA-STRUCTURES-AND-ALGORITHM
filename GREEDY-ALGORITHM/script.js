//MINIMUM WAITING TIME

// let Queries = [4, 2, 1, 8, 3];

// function MinimumWaitingTime(queries){
//     queries.sort((a, b) => a - b);
//     //[1, 2, 3, 4, 8]

//     let TotalwaitingTime = 0;

//     for(let i = 0; i < queries.length; i++){
//         let waitingTimes = queries[i];
//         let TimesLeft = queries.length - (i + 1);
//         console.log(TimesLeft);
//         TotalwaitingTime += waitingTimes * TimesLeft;
//     }
//     return TotalwaitingTime;
// }

// console.log(MinimumWaitingTime(Queries));


//CLASS PHOTO

// function ClassPhoto(redShirtsHeight, blueShirtsHeight) {
//     redShirtsHeight.sort((a, b) => b - a);
//     blueShirtsHeight.sort((a, b) => b - a);

//     let FrontRow;
//     if (redShirtsHeight[0] < blueShirtsHeight[0]) {
//         FrontRow = "Red";
//     } else {
//         FrontRow = "Blue";
//     }

//     for (let i = 0; i < redShirtsHeight.length; i++) {
//         let redShirt = redShirtsHeight[i];
//         let blueShirt = blueShirtsHeight[i];

//         if (FrontRow === "Red") {
//             if (redShirt >= blueShirt) {
//                 return false;
//             }
//         } else {
//             if (blueShirt >= redShirt) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// let blueShirts = [3, 5, 7, 9];
// let redShirts = [2, 4, 6, 8];

// console.log(ClassPhoto(redShirts, blueShirts));


// function classPhotos(redShirtHeights, blueShirtHeights) {
//     // Step 1: Sort the kids by height
//     redShirtHeights.sort((a, b) => b - a); // Sort red-shirted kids from tallest to shortest
//     blueShirtHeights.sort((a, b) => b - a); // Sort blue-shirted kids from tallest to shortest
  
//     let FrontRow; // This will tell us which color goes in the front row
  
//     // Step 2: Decide who goes in the front row
//     if (redShirtHeights[0] < blueShirtHeights[0]) { // If the tallest red is shorter than the tallest blue...
//       FrontRow = "RED"; // ...Reds go in the front row.
//     } else {
//       FrontRow = "BLUE"; // Otherwise, Blues go in the front row.
//     }
  
//     // Step 3: Check if everyone is in the right place
//     for (let i = 0; i < redShirtHeights.length; i++) { // Let's go through each pair of kids
//       let red = redShirtHeights[i]; // The height of the red-shirted kid
//       let blue = blueShirtHeights[i]; // The height of the blue-shirted kid
  
//       if (FrontRow === "RED") { // If the front row is for the Reds...
//         if (red >= blue) { // ...and if the red kid in this pair is taller than or as tall as the blue kid...
//           return false; // ...oops, this won't work!
//         }
//       } else { // Otherwise, if the front row is for the Blues...
//         if (blue >= red) { // ...and if the blue kid in this pair is taller than or as tall as the red kid...
//           return false; // ...oops, this won't work either!
//         }
//       }
//     }
    
//     // If we've gone through all the kids without any problems, it means we can take a good class photo!
//     return true;
//   }
  

//OPTIMAL FREELANCING ALGORITHM

// function OptimalFreelancing(Jobs){
//   let LengthOfWeek = 7;
//   let profit = 0;
//   Jobs.sort((a, b) => b.payment - a.payment);

//   let Timeline = new Array(LengthOfWeek).fill(false);

//   for(let i = 0; i < Jobs.length; i++){
//     let job = Jobs[i];
//     let maxTime = Math.min(job.deadline, LengthOfWeek);

//     for(let time = maxTime - 1; time >= 0; time--){
//       if(Timeline[time] === false){
//         Timeline[time] = true;
//         profit += job.payment;
//         break;
//       }
//     }
//   }
//   return profit;
// }

// // Define an array of jobs with their payments and deadlines
// let jobs = [
//   { payment: 10, deadline: 4 }, // Job 1: Payment of 100, deadline of 3 days
//   { payment: 2, deadline: 1 }, // Job 2: Payment of 150, deadline of 2 days
//   { payment: 5, deadline: 2 },  // Job 3: Payment of 80, deadline of 4 days
//   { payment: 8, deadline: 7 }, // Job 4: Payment of 200, deadline of 5 days
//   { payment: 1, deadline: 1 }, // Job 5: Payment of 120, deadline of 3 days
//   { payment: 6, deadline: 5 }  // Job 6: Payment of 180, deadline of 2 days
// ];

// // Calculate total profit earned for all jobs
// let totalProfit = OptimalFreelancing(jobs);

// // Output the total profit earned for all jobs
// console.log("Total profit earned:", totalProfit);


//TASK ASSIGNMENT

// function taskAssignment(k, tasks) {
//   // This will store the pairs of task indices assigned to each worker
//   let pairedTasks = [];
  
//   // Create a mapping from task durations to their original indices
//   let taskDurationToIndices = getTaskDurationToIndices(tasks);
  
//   // Sort the tasks based on their durations in ascending order
//   let sortedTasks = [...tasks].sort((a, b) => a - b);

//   // Iterate through the first k tasks (smallest durations) to pair them with the last k tasks (largest durations)
//   for (let i = 0; i < k; i++) {
//     // Get the duration of the current smallest task
//     let Task1Duration = sortedTasks[i];
//     // Get the indices of tasks with this duration and pop one (get one of the original indices)
//     let indicesWithTask1Duration = taskDurationToIndices[Task1Duration];
//     let Task1Index = indicesWithTask1Duration.pop();

//     // Get the duration of the current largest remaining task
//     let Task2Duration = sortedTasks[sortedTasks.length - 1 - i];
//     // Get the indices of tasks with this duration and pop one (get one of the original indices)
//     let indicesWithTask2Duration = taskDurationToIndices[Task2Duration];
//     let Task2Index = indicesWithTask2Duration.pop();
    
//     // Add the pair of indices to the pairedTasks array
//     pairedTasks.push([Task1Index, Task2Index]);
//   }
//   return pairedTasks;
// }

// // Helper function to create a mapping from task durations to their original indices
// function getTaskDurationToIndices(tasks) {
//   let taskDurationToIndices = {};

//   // Iterate through all tasks and map each duration to its original indices
//   for (let i = 0; i < tasks.length; i++) {
//     let taskDuration = tasks[i];

//     // If the duration already exists in the map, add the index to the list
//     if (taskDuration in taskDurationToIndices) {
//       taskDurationToIndices[taskDuration].push(i);
//     } else {
//       // Otherwise, create a new list with the current index
//       taskDurationToIndices[taskDuration] = [i];
//     }
//   }
//   return taskDurationToIndices;
// }

// // Example usage
// let k = 3;
// let tasks = [1, 3, 5, 3, 1, 4];

// console.log(taskAssignment(k, tasks)); // Expected output: [[0, 2], [4, 5], [1, 3]]



//Valid Starting City 

// function validStartingCity(distance, fuel, mpg) {
//     let numberOfCities = distance.length;

//     // Iterate over each city as a potential starting point
//     for (let startCycle = 0; startCycle < numberOfCities; startCycle++) {
//         let milesRemaining = 0; // Initialize miles remaining for the journey

//         // Simulate traveling through all cities starting from the current city
//         for (let currentCityIdx = startCycle; currentCityIdx < startCycle + numberOfCities; currentCityIdx++) {
//             // If miles remaining is negative, skip to the next iteration
//             if (milesRemaining < 0) continue;

//             // Calculate the current city index in the circular route
//             let currentCityRotated = currentCityIdx % numberOfCities;
//             // Get the fuel available at the current city
//             let fuelfromCurrentCity = fuel[currentCityRotated];
//             // Get the distance to the next city
//             let distanceTonnextCity = distance[currentCityRotated];
//             // Update miles remaining after considering fuel obtained and distance traveled
//             milesRemaining += fuelfromCurrentCity * mpg - distanceTonnextCity;
//         }

//         // If miles remaining is non-negative after completing the circuit, return the current starting city
//         if (milesRemaining >= 0) return startCycle;
//     }

//     // If no valid starting city is found, return -1
//     return -1;
// }

// // Example usage
// let distance = [5, 25, 15, 10, 15];
// let fuel = [1, 2, 1, 0, 3];
// let milesPerFuel = 10;

// console.log(validStartingCity(distance, fuel, milesPerFuel)); // Expected output: 4

function validStartingCity(distance, fuel, mpg) {
    let numberOfCities = distance.length;
    let milesRemaining = 0; // Total miles remaining so far

    let startingCityIndex = 0; // Index of the starting city
    let milesRemainingAtStartingCity = 0; // Miles remaining at the current starting city

    // Iterate through each city to find the valid starting city
    for (let i = 1; i < numberOfCities; i++) {
        // Calculate fuel from the previous city and distance to the next city
        let fuelFromPrevCity = fuel[i - 1];
        let distanceFromPrevCity = distance[i - 1];
        
        // Update miles remaining with fuel obtained minus the distance traveled
        milesRemaining += fuelFromPrevCity * mpg - distanceFromPrevCity;

        // If miles remaining is less than the miles remaining at the current starting city,
        // update the starting city index and miles remaining at the starting city
        if (milesRemaining < milesRemainingAtStartingCity) {
            milesRemainingAtStartingCity = milesRemaining;
            startingCityIndex = i;
        }
    }

    // Return the index of the valid starting city
    return startingCityIndex;
}

// Example usage
let distances = [5, 25, 15, 10, 15];
let fuel = [1, 2, 1, 0, 3];
let milesPerFuel = 10;

console.log(validStartingCity(distances, fuel, milesPerFuel)); // Expected output: 4





