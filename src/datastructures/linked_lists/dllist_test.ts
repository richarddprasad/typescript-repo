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

// ********************************

console.log("\nGetting first element from empty list...");
let first1 = dlist.getFirst();
if (!first1) {
    console.log("Got back null (expected value)");
}

console.log("Getting last element from empty list...");
let last1 = dlist.getLast();
if (!last1) {
    console.log("Got back null (expected value)");
}

let find1 = dlist.find(1);
if (!find1) {
    console.log("\nEmpty list contains 1?: No");
}

console.log(`\nEmpty list contains() 1? ${dlist.contains(1)}`);

console.log("\nDeleting 1 from empty list...");
let del1 = dlist.delete(1);
if (!del1) {
    console.log("Could not delete 1 from empty list");
}

// ********************************

console.log("\nInserting 1st element...");
dlist.insert(1);
listStatus();

// ********************************

console.log("\nGetting first element from non-empty list...");
let first2 = dlist.getFirst();
if (first2) {
    console.log("Got back", first2.item);
}

console.log("Getting last element from non-empty list...");
let last2 = dlist.getLast();
if (last2) {
    console.log("Got back", last2.item);
}

let find2 = dlist.find(1);
if (find2) {
    console.log("\nList with 1 element contains 1?: Yes -->", find2.item);
}

console.log(`\n1-element list contains() 1? ${dlist.contains(1)}`);


console.log("\nDeleting 1 from empty list...");
let del2 = dlist.delete(1);
if (del2) {
    console.log("Deleted 1 from 1-element list -->", del2.item);
}
listStatus();

// ********************************

console.log("\nInserting 2nd element...");
dlist.insert(2);
listStatus();

console.log("\nInserting several elements...");
for (let i: number = 3; i <= 10; i++) {
    dlist.insert(i);
}
listStatus();

// ********************************

console.log("\nGetting first element from non-empty list with several elements...");
let first3 = dlist.getFirst();
if (first3) {
    console.log("Got back", first3.item);
}

console.log("Getting last element from non-empty list with several elements...");
let last3 = dlist.getLast();
if (last3) {
    console.log("Got back", last3.item);
}

let find3 = dlist.find(7);
if (find3) {
    console.log("\nList with several element contains 7?: Yes -->", find3.item);
}

console.log(`\nMany element-list contains() 7? ${dlist.contains(7)}`);

const num = 9;
console.log(`\nDeleting ${num} from empty list...`);
let del3 = dlist.delete(num);
if (del3) {
    console.log(`Deleted ${num} from 1-element list -->`, del3.item);
}
listStatus();

// ********************************
