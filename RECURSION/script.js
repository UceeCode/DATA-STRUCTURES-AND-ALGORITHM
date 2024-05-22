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

function productSum(array, depth = 1) {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      let arr = array[i];
      if (Array.isArray(arr)) {
        sum += productSum(arr, depth + 1);
      } else {
        sum += arr;
      }
    }
    return sum * depth;
    
  }
  

