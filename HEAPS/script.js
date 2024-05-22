//MIN HEAP CONSTRUCTION

class MinHeap{
    constructor(array){
        this.heap = this.buildheap(array);
    }

    buildheap(array){
        let FirstParentIdx = Math.floor((array.length - 2) / 2);
        for(let currentIdx = FirstParentIdx; currentIdx >= 0; currentIdx--){
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array;
    }

    siftDown(currentIdx, endIdx, heap){
        let childOne = currentIdx * 2 + 1;
        while(childOne <= endIdx){
            let childTwo = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let IdxToSwap;
            if(childTwo !== -1 && heap[childTwo] < heap[childOne]){
                IdxToSwap = childTwo;
            } else if (heap[childOne] < heap[childTwo]){
                IdxToSwap = childOne;
            }
            if(heap[IdxToSwap] < heap[currentIdx]){
                this.swap(currentIdx, IdxToSwap, heap);
                currentIdx = IdxToSwap;
                childOne = currentIdx * 2 + 1;
            } else {
                return;
            }
        }
    }

    siftUp(currentIdx, heap){
        let ParentIdx = Math.floor((currentIdx - 1) / 2);
        while(currentIdx > 0 && heap[currentIdx] < heap[ParentIdx]){
            this.swap(currentIdx, ParentIdx, heap);
            currentIdx = ParentIdx;
            ParentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }

    peek(){
        return this.heap[0];
    }

    remove(){
        this.swap(0, this.heap.length - 1, this.heap);
        let removed = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return removed;
    }

    insert(val){
        this.heap.push(val);
        this.siftUp(this.heap.length - 1, this.heap);
    }

    swap(i, j, heap){
        [heap[i], heap[j]] = [heap[j], heap[i]];
    }
}

let array = [3, 1, 5, 4, 2];
let minHeap = new MinHeap(array);

console.log("Heap after construction:", minHeap.heap); // [1, 2, 5, 4, 3]

// Peek at the smallest element
console.log("Peek:", minHeap.peek()); // Should return 1, the smallest element

// Insert a new element into the heap
minHeap.insert(0);
console.log("Heap after inserting 0:", minHeap.heap); // [0, 1, 5, 4, 3, 2]

// Remove the smallest element
let removed = minHeap.remove();
console.log("Removed element:", removed); // Should return 0, the smallest element
console.log("Heap after removal:", minHeap.heap); // [1, 2, 5, 4, 3]
