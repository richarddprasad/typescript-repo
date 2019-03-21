import DLList from './dllist';

function listStatus() {
    console.log("isEmpty?: ", dlist.isEmpty());
    if (!dlist.isEmpty()) {
        console.log("List Contents:");
        dlist.printContents();
    }
}

const dlist = new DLList<number>();

console.log("Creating a new doubly-linked list...");
listStatus();

console.log("\nInserting 1st element...");
dlist.insert(1);
listStatus();

console.log("\nInserting 2nd element...");
dlist.insert(2);
listStatus();

console.log("\nInserting several elements...");
for (let i: number = 3; i <= 10; i++) {
    dlist.insert(i);
}
listStatus();
