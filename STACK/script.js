//MIN MAX STACK CONSTRUCTION

// class MinMaxStack {  
//     constructor(){
//       this.minMaxStack = [];
//       this.stack = [];
//     }
    
//     peek() {
//       // Write your code here.
//       return this.stack[this.stack.length - 1];
//     }
  
//     pop() {
//       // Write your code here.
//       this.minMaxStack.pop();
//       return this.stack.pop();
//     }
  
//     push(number) {
//       // Write your code here.
//       let newMinMax = {min: number, max: number};
//       if (this.minMaxStack.length) {
//         let lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
//         newMinMax.min = Math.min(lastMinMax.min, number);
//         newMinMax.max = Math.max(lastMinMax.max, number);
//       }
//       this.minMaxStack.push(newMinMax);
//       this.stack.push(number);
//     }
  
//     getMin() {
//       // Write your code here.
//       return this.minMaxStack[this.minMaxStack.length - 1].min;
//     }
  
//     getMax() {
//       // Write your code here.
//        return this.minMaxStack[this.minMaxStack.length - 1].max;
//     }
//   }
  


//BALANCED BRACKETS

// function balancedBrackets(string){
//     let openingBrackets = '({[';
//     let closingBrackets = ')}]';
//     let matchingBrackets = {')': '(', '}': '{', ']': '['};
//     let stack = [];

//     for(let char of string){
//         if(openingBrackets.includes(char)){
//             stack.push(char);
//         } else if (closingBrackets.includes(char)){
//             if(stack.length === 0) return false;
//             if(stack[stack.length - 1] === matchingBrackets[char]){
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// let str = '(({[]}))';
// console.log(balancedBrackets(str));


//SUNSET VIEWS

// let buildings = [1,7,10,4,9];
// let direction = 'West';

// function sunsetViews(buildings, direction){
//     let buildingsThatseeSun = [];
//     let maxHeight = 0;

//     if(direction === 'East'){
//         for(let i = buildings.length - 1; i >= 0; i--){
//             if(buildings[i] > maxHeight){
//                 buildingsThatseeSun.unshift(i);
//                 maxHeight = buildings[i];
//             }
//         }
//     } else if (direction === 'West'){
//         for(let i = 0; i < buildings.length; i++){
//             if(buildings[i] > maxHeight){
//                 buildingsThatseeSun.push(i);
//                 maxHeight = buildings[i];
//             }
//         }
//     }
//     return buildingsThatseeSun;
// }

// console.log(sunsetViews(buildings, direction)); 


// let buildings = [1,7,10,4,9];
// let direction = 'East';

// function sunsetViews(buildings, direction){
//     let BuildingsThatSeeSun = [];
//     let startidx = direction === 'East' ? 0 : buildings.length - 1;
//     let step = direction === 'East' ? 1 : -1;

//     for(let i = startidx; i < buildings.length && i >= 0; i += step){
//         while(BuildingsThatSeeSun.length > 0 && buildings[i] >= buildings[BuildingsThatSeeSun[BuildingsThatSeeSun.length - 1]]){
//             BuildingsThatSeeSun.pop();
//         }
//         BuildingsThatSeeSun.push(i);
//     }

//     if(direction === 'East'){
//         return BuildingsThatSeeSun;
//     } else {
//         return BuildingsThatSeeSun.reverse();
//     }
// }

// console.log(sunsetViews(buildings, direction)); 


//BEST DIGITS


// let numbers = "12365";
// let numDigit = 2;

// function bestDigit(numbers, numDigit){
//     let stack = [];

//     for(let digit of numbers){
//         while(stack > 0 && numDigit > 0 && digit > stack[stack.length - 1]){
//             numDigit--;
//             stack.pop();
//         }
//         stack.push(digit);
//     }

//     while(numDigit > 0){
//         stack.pop();
//         numDigit--;
//     }

//     return stack.join("");
// }

// console.log(bestDigit(numbers, numDigit));


//SORT STACKS

//let stack = [4,-3,-1,8,5,10];

// function Sortstack(stack){
//     if(stack.length === 0) return stack;

//     let top = stack.pop();
//     Sortstack(stack);

//     insertInOrder(stack, top);

//     return stack;
// }

// function insertInOrder(stack, val){
//     if(stack.length === 0 || stack[stack.length - 1] < val){
//         stack.push(val);
//         return;
//     }

//     let top = stack.pop();
//     insertInOrder(stack, val);
//     stack.push(top);
// }

// console.log(Sortstack(stack));


//NEXT GREATER ELEMENTS

let arr = [-1,5,4,8,2,7];

function nextGreaterElement(array){
    let result = new Array(array.length).fill(-1);
    let stack = [];

    for(let i = 0; i < 2 * array.length; i++){
        let circularIdx = i % array.length;

        while(stack.length > 0 && array[stack[stack.length - 1]] < array[circularIdx]){
            let top = stack.pop();
            result[top] = array[circularIdx];
        }

        stack.push(circularIdx);
    }
    return result;
}

console.log(nextGreaterElement(arr));