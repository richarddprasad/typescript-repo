import StackArray from './stack_array';

function stackStatus(): void {
    console.log("isEmpty?: ", stackArr.isEmpty());
    console.log("isFull?: ", stackArr.isFull());
    console.log("size: ", stackArr.size());
    console.log("Contents:");
    stackArr.printContents();
    console.log("\n");
}

// Let's create a buffer that can hold 10 32-bit (4-byte) elements
const stackArr = new StackArray(10, 4);

// Testing...
stackStatus();

console.log("Pushing an element...")
stackArr.push(1);
stackStatus();

console.log("Filling up the stack...");
for (let i: number = 2; i < 15; i++) {
    // Let's avoid a stack overflow error
    if (!stackArr.isFull()) {
        stackArr.push(i);
    }
}

stackStatus();

console.log("Popping: ", stackArr.pop());
stackStatus();

console.log("Peeking: ", stackArr.peek());
stackStatus();

for (let i: number = 0; i < 20; i++) {
    // Uncomment to test for stack underflow error
    // stackArr.pop();
}

console.log("Emptying out the stack...");
for (let i: number = stackArr.size(); i > 0; i--) {
    stackArr.pop();
}
stackStatus();
