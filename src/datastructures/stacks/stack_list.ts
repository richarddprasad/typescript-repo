import SLList from '../linked_lists/sllist';
import Node from '../../common/node';

class StackList<T> {
    private list: SLList<T>;

    constructor() {
        this.list = new SLList<T>();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public push(item: T): void {
        this.list.insert(item);
    }

    public pop(): Node<T> | null {
        let rv: Node<T> | null = null;

        if (!this.isEmpty()) {
            rv = this.list.deleteLast();
        } else {
            throw new Error("Stack underflow");
        }
        return rv;
    }

    public peek(): Node<T> | null {
        let rv: Node<T> | null = null;

        if (!this.isEmpty()) {
            rv = this.list.getLast();
        } else {
            throw new Error("Stack is empty");
        }

        return rv;
    }

    // Debugger method
    public printContents(): void {
        this.list.printContents();
    }
} // end class

// ********************************************************************
// Testing

function stackStatus(): void {
    console.log("isEmpty?: ", stackList.isEmpty());

    if (!stackList.isEmpty()) {
        console.log("Contents:");
        stackList.printContents();
    }

    // console.log("\n");
}

const stackList = new StackList<number>();

console.log("Created an empty stack...");
stackStatus();

console.log("Pushing 1st element...");
stackList.push(1);
stackStatus();

console.log("Popping 1st element...");
let popped1 = stackList.pop();
if (popped1) {
    console.log(`Popped ${popped1.item}`);
}
stackStatus();

console.log("Trying to pop again... uncomment to get stack underflow error");
// stackList.pop();


console.log("\nPushing several elements...");
for (let i: number = 1; i <= 10; i++) {
    stackList.push(i)
}
stackStatus();

console.log("\nPopping until empty...");
let popped2 = null;
while (!stackList.isEmpty()) {
    popped2 = stackList.pop();
    if (popped2) {
        console.log(`Popped ${popped2.item}`);
    }
}
stackStatus();

console.log("\nPeeking into empty stack... (should crash)");
// stackList.peek();

console.log("\nPeeking into stack with 1 element...");
stackList.push(42);
stackStatus();
let peeked1 = stackList.peek();
if (peeked1) {
    console.log("Got back ", peeked1.item);
}

console.log("\nPeeking into stack with 2 elements...");
stackList.push(73);
stackStatus();
let peeked2 = stackList.peek();
if (peeked2) {
    console.log("Got back ", peeked2.item);
}
