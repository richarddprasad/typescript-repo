import QueueList from './queue_list';

function queueStatus() {
    console.log("isEmpty?: ", queueList.isEmpty());

    if (!queueList.isEmpty()) {
        queueList.printContents();
    }
}

const queueList = new QueueList<number>();

console.log("Creating a new queue...");
queueStatus();

console.log("\nDequeue on empty queue (should crash)...");
try {
    queueList.dequeue();
} catch(e) {
    console.log(e);
}

console.log("\nEnqueue 1st element...");
queueList.enqueue(1);
queueStatus();

console.log("\nDequeue queue with 1 element...");
let del1 = queueList.dequeue();
queueStatus();
if (del1) {
    console.log("Removed", del1);
}

console.log("\nEnqueue-ing several items...");
for (let i: number = 1; i < 11; i++) {
    queueList.enqueue(i);
}
queueStatus();

console.log("\nDequeue-ing until empty...");
let temp;
while (!queueList.isEmpty()) {
    temp = queueList.dequeue();
    if (temp) {
        console.log(`Removed ${temp}`);
    }
}
queueStatus();

console.log("\nPeeking into empty queue... (should crash)");
try {
    queueList.peek();
} catch(e) {
    console.log(e);
}

console.log("\nPeeking into queue with 1 element...");
queueList.enqueue(2);
let peek1 = queueList.peek();
queueStatus();
if (peek1) {
    console.log("Got", peek1);
}

console.log("\nPeeking into queue with 2 elements...");
queueList.enqueue(3);
let peek2 = queueList.peek();
queueStatus();
if (peek2) {
    console.log("Got", peek2);
}
