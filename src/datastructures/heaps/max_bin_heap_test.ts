import MaxBinaryHeap from './MaxBinaryHeap';

function heapStatus() {
    console.log("Contents of Max Binary Heap:");
    mbh.printContents();
}

console.log("Creating a max binary heap...");
const mbh = new MaxBinaryHeap<number>();
heapStatus();

console.log("Inserting 41...");
mbh.insert(41);
heapStatus();

console.log("Inserting 39...");
mbh.insert(39);
heapStatus();

console.log("Inserting 33, 18, 27, 12...")
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
heapStatus();

console.log("Inserting 55...");
mbh.insert(55);
heapStatus();

console.log("Insert 1...");
mbh.insert(1);
heapStatus();

console.log("Insert 100...");
mbh.insert(100);
heapStatus();

console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
console.log(`extractMax(): ${mbh.extractMax()}`);
heapStatus();
