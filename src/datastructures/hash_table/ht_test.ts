import HashTable from './hash_table';
import Person from '../../common/person';

const size: number = 7;

function htStatus() {
    let isEmpty = ht.isEmpty();
    console.log(`Is empty?: ${isEmpty}`);

    if (!isEmpty) {
        console.log("Printing HT Contents:");
    }
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

