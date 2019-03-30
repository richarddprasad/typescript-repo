import HashTable from './hash_table';

function htStatus() {
    console.log(`Is empty?: ${ht.isEmpty()}`);
}

console.log("Creating a new hash table...");
const ht = new HashTable<number>(7);
htStatus();
