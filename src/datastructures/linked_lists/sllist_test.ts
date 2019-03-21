import SLList from './sllist';

const slist: SLList<number> = new SLList<number>();

function listStatus() {
    console.log("isEmpty?: ", slist.isEmpty());
    if (!slist.isEmpty()) {
        console.log("List contents:");
        slist.printContents();
    }
}

listStatus();

console.log("\nInserting 1st element...");
slist.insert(1);
listStatus();

console.log("\nInserting 2nd element...");
slist.insert(2);
listStatus();

console.log("\nInserting several elements...")
for (let i: number = 3; i <= 20; i++) {
    slist.insert(i);
}
listStatus();


console.log("Contains 20?: ", slist.contains(20));
console.log("Contains 21?: ", slist.contains(21));

let test1 = slist.find(20);
console.log("Node with 20 is null?: ", !test1);
if (test1) {
    console.log("Node with 20 contains: ", test1.item);
}
let test2 = slist.find(21);
console.log("Node with 21 is null?: ", !test2);

console.log("\nDeleting 30 (non-existent)...");
let test3 = slist.delete(30);
console.log("Deleting 30 successful?: ", !(test3 == null));
listStatus();

console.log("\nDeleting 10 (does exist)...");
let test4 = slist.delete(10);
console.log("Deleting 10 successful?: ", test4 != null);
if (test4) {
    console.log("Value of deleted node (10): ", test4.item);
}
listStatus();

console.log("\nDeleting primes...");
slist.delete(2);
slist.delete(3);
slist.delete(5);
slist.delete(7);
slist.delete(11);
slist.delete(13);
slist.delete(17);
slist.delete(19);
listStatus();

console.log("Emptying list from the last element backwards...");
let removed;
while (!slist.isEmpty()) {
    removed = slist.deleteLast();
    if (removed) {
        console.log(`Removed ${removed.item}`);
    }
}
listStatus();

console.log("\nTesting getLast() on empty list...");
let last1 = slist.getLast();
if (!last1) {
    console.log("Got back nothing (which is the desired outcome).")
}

console.log("\nInserting one element...");
slist.insert(42);
listStatus();

console.log("Getting last element...");
let last2 = slist.getLast();
if (last2) {
    console.log("Last item: ", last2.item);
}

console.log("\nInserting a few more elements and testing getLast()...");
slist.insert(73);
slist.insert(1024);
listStatus();
let last3 = slist.getLast();
if (last3) {
    console.log("getLast() returned: ", last3.item);
}

console.log("\nTesting deleteFirst()...");
let del1 = slist.deleteFirst();
listStatus();
if (del1) {
    console.log("Removed", del1.item);
}

console.log("\nCalling deleteFirst() 2 more times...");
slist.deleteFirst();
let del2 = slist.deleteFirst();
listStatus();
if (del2) {
    console.log("Removed item is", del2.item);
}

console.log("\nTesting deleteFirst() on empty list...");
let del3 = slist.deleteFirst();
listStatus();
if (!del3) {
    console.log("Nothing was removed, list empty.");
}
