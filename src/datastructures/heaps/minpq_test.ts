import MinPQ from './MinPQ';
import PNode from '../../common/pnode';

function pqStatus() {
    console.log(`MinPQ is empty?: ${minpq.isEmpty()}`);
    console.log("MinPQ Contents:");
    minpq.printContents();
    console.log("-------------------------------------");
}

console.log("Creating a new minimum priority queue...");
const minpq = new MinPQ();
pqStatus();

console.log("Inserting an element...");
let item1 = new PNode<string>("President", 2);
minpq.enqueue(item1);
pqStatus();

console.log("Inserting 2nd element...");
item1 = new PNode<string>("Burger Flipper", 99);
minpq.enqueue(item1);
pqStatus();


console.log("Inserting 3rd element...");
item1 = new PNode<string>("G*d", 1);
minpq.enqueue(item1);
pqStatus();

console.log("Inserting a few more elements....");
item1 = new PNode<string>("Spongebob", 42);
minpq.enqueue(item1);
item1 = new PNode<string>("Homer Simpson", 37);
minpq.enqueue(item1);
item1 = new PNode<string>("C++", 10);
minpq.enqueue(item1);
pqStatus();

console.log("Emptying out the PQ...");
while (!minpq.isEmpty()) {
    let removed = minpq.dequeque();
    if (removed) {
        console.log(`Removed (${removed.item}, ${removed.priority})`);
    }
}