import MaxPQ from './MaxPQ';
import PNode from '../../common/pnode';

function pqStatus() {
    console.log(`MaxPQ is empty?: ${maxpq.isEmpty()}`);
    console.log("MaxPQ Contents:");
    maxpq.printContents();
    console.log("-------------------------------------");
}

console.log("Creating a new minimum priority queue...");
const maxpq = new MaxPQ();
pqStatus();

console.log("Inserting an element...");
let item1 = new PNode<string>("President", 2);
maxpq.enqueue(item1);
pqStatus();

console.log("Inserting 2nd element...");
item1 = new PNode<string>("Burger Flipper", 99);
maxpq.enqueue(item1);
pqStatus();


console.log("Inserting 3rd element...");
item1 = new PNode<string>("G*d", 1);
maxpq.enqueue(item1);
pqStatus();

console.log("Inserting a few more elements....");
item1 = new PNode<string>("Spongebob", 42);
maxpq.enqueue(item1);
item1 = new PNode<string>("Homer Simpson", 37);
maxpq.enqueue(item1);
item1 = new PNode<string>("C++", 10);
maxpq.enqueue(item1);
pqStatus();

console.log("Emptying out the PQ...");
while (!maxpq.isEmpty()) {
    let removed = maxpq.dequeque();
    if (removed) {
        console.log(`Removed (${removed.item}, ${removed.priority})`);
    }
}