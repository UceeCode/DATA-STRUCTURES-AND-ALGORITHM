//MIN MAX STACK CONSTRUCTION

class MinMaxStack {  
    constructor(){
      this.minMaxStack = [];
      this.stack = [];
    }
    
    peek() {
      // Write your code here.
      return this.stack[this.stack.length - 1];
    }
  
    pop() {
      // Write your code here.
      this.minMaxStack.pop();
      return this.stack.pop();
    }
  
    push(number) {
      // Write your code here.
      let newMinMax = {min: number, max: number};
      if (this.minMaxStack.length) {
        let lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
        newMinMax.min = Math.min(lastMinMax.min, number);
        newMinMax.max = Math.max(lastMinMax.max, number);
      }
      this.minMaxStack.push(newMinMax);
      this.stack.push(number);
    }
  
    getMin() {
      // Write your code here.
      return this.minMaxStack[this.minMaxStack.length - 1].min;
    }
  
    getMax() {
      // Write your code here.
       return this.minMaxStack[this.minMaxStack.length - 1].max;
    }
  }
  