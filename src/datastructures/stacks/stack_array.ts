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

export default StackArray;