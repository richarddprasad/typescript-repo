class StackArray {
    private buffer: ArrayBuffer;
    private view: Int32Array;
    private length: number; // the number of elements currently in the array
    private maxSize: number; // the maximum number of elements the array can hold

    constructor(elements: number, byteSize: number) {
        this.buffer = new ArrayBuffer(elements * byteSize);
        this.view = new Int32Array(this.buffer);
        this.length = 0;
        this.maxSize = elements;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public isFull(): boolean {
        return this.length === this.maxSize;
    }

    public size(): number {
        return this.length;
    }

    public push(item: number): void {
        if (!this.isFull()) {
            this.view[this.length++] = item;
        } else {
            throw new Error("Stack overflow");
        }
    }

    public pop(): number {
        let rv;
        if (!this.isEmpty()) {
            rv = this.view[--this.length];
        } else {
            throw new Error("Stack underflow");
        }
        return rv;
    }

    public peek(): number {
        let rv;
        if (!this.isEmpty()) {
            rv = this.view[this.length - 1];
        } else {
            throw new Error("Stack is empty");
        }
        return rv;
    }

    // For debugging
    public printContents(): void {
        if (this.isEmpty()) {
            console.log("Nothing to print. Stack is empty.");
        } else {
            for (let i: number = 0; i < this.length; i++) {
                console.log(`elem[${i}] = ${this.view[i]}`);
            }
        }
    } // end fn printContents
} // end class

// For debugging
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

