import HashTable from './hash_table';
import Person from '../../common/person';

const size: number = 7;

function htStatus() {
    let isEmpty = ht.isEmpty();
    console.log(`Is empty?: ${isEmpty}`);

    if (!isEmpty) {
        console.log("Printing HT Contents:");
        ht.printContents();
    }
    console.log("-----------------------------------------\n");
}

console.log("Creating a new hash table of type Person...");
const ht = new HashTable<Person>(size);
htStatus();

let p1 = new Person('Homer', 'Simpson', 37, 'Gibberish');
console.log(`Hash for p1 is ${p1.hash(size)}`);
let p2 = new Person('Philip', 'Fry', 1024, 'Neptunian');
console.log(`Hash for p2 is ${p2.hash(size)}`);
let p3 = new Person('Al', 'Bundy', 45, 'English');
console.log(`Hash for p3 is ${p3.hash(size)}`);
let p4 = new Person('Steve', 'Jobs', 200, 'English');
console.log(`Hash for p4 is ${p4.hash(size)}`);
console.log("p2 and p4 have the same hash index");

console.log("Inserting 1 person...");
ht.insert(p2);
htStatus();

console.log("Inserting 2nd person with colliding key...");
ht.insert(p4);
htStatus();

console.log("Deleting 'Steve Jobs'...");
ht.delete(p4);
htStatus();

console.log("Deleting 'Philip Fry'...");
ht.delete(p2);
htStatus();

console.log("Inserting all Persons...");
ht.insert(p1);
ht.insert(p2);
ht.insert(p3);
ht.insert(p4);
htStatus();

console.log(`Contains 'Al Bundy'? ${ht.contains(p3)}`);
let p5 = new Person('Bill', 'Gates', 2345, 'French');
console.log(`Contains 'Bill Gates'? ${ht.contains(p5)}`);
ht.insert(p5);
console.log(`Contains 'Bill Gates' after insertion? ${ht.contains(p5)}`);
htStatus();

console.log("Testing find() for 'Homer Simpson'...");
let find1 = ht.find(p1);
if (find1) {
    // let obj = find1.item;
    let obj = find1;
    console.log(obj);
}

console.log("Deleting 'Homer Simpson'...");
ht.delete(p1);
console.log("Testing find() again for 'Homer Simpson'...");
find1 = ht.find(p1);
if (!find1) {
    console.log("'Homer Simpson' not found");
}
htStatus();

console.log("TESTING find() on slot with collision...");
let find2 = ht.find(p2);
if (find2) {
    // let obj = find2.item;
    let obj = find2
    console.log("Found:")
    console.log(obj);
}
find2 = ht.find(p4);
if (find2) {
    // let obj = find2.item;
    let obj = find2
    console.log("Found:")
    console.log(obj);
}

// *******************************************************
console.log("\nTESTING getAll()...");
const contents = ht.getAll();
contents.forEach((el: any) => console.log(el));