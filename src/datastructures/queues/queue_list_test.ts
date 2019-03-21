import QueueList from './queue_list';

function QueueStatus() {
    console.log("isEmpty?: ", queueList.isEmpty());
}

const queueList = new QueueList<number>();

console.log("Creating a new queue...");
QueueStatus();

// TODO: Test enqueue, dequeue, peek

