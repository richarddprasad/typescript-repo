import DLList from './dllist';

function listStatus() {
    console.log("isEmpty?: ", dlist.isEmpty());
    if(!dlist.isEmpty()) {
        console.log("List Contents:");
        dlist.printContents();
    }
}

const dlist = new DLList<number>();

console.log("Creating a new doubly-linked list...");
listStatus();
