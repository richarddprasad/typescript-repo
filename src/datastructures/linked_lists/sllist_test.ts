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
if(test1) {
    console.log("Node with 20 contains: ", test1.item);
}
let test2 = slist.find(21);
console.log("Node with 21 is null?: ", !test2);

