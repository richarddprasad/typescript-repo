import IMinBinaryHeap from './MinBinaryHeapInterface';

class MinBinaryHeap<T> implements IMinBinaryHeap<T> {
    // Can't make this private when using an interface in TS
    items: T[];

    constructor() {
        this.items = new Array<T>();
    }

    public insert(item: T): void {
        this.items.push(item);
        this.swim();
    }

    public extractMin(): T | null {
        let rv: T | null;
        if (this.items.length === 0) {
            rv = null
        } else if (this.items.length === 1) {
            rv = this.items[0];
            this.items.pop();
        } else {
            this.swap(0, this.items.length - 1);
            rv = this.items[this.items.length - 1];
            this.items.pop();
            this.sink();
        }

        return rv;
    }

    private swim(): void {
        let index = this.items.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        // This won't work for all types since we can't overload operators in TS
        while (parentIndex >= 0 && this.items[parentIndex] > this.items[index]) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    private sink(): void {
        let index = 0;
        const length = this.items.length;
        const element = this.items[0];

        while (true) {
            let swap = null;
            let leftChildIdx = index * 2 + 1;
            let rightChildIdx = index * 2 + 2;

            if (leftChildIdx < length) {
                if (this.items[leftChildIdx] < this.items[index]) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                if ((swap == null && this.items[rightChildIdx] < this.items[index]) ||
                    (swap != null && this.items[rightChildIdx] < this.items[leftChildIdx])) {
                    swap = rightChildIdx;
                }
            }

            if (swap == null) {
                break;
            } else {
                this.items[index] = this.items[swap];
                this.items[swap] = element;
                index = swap;
            } // end if
        } // end while
    } // end fn sink

    private swap(idx1: number, idx2: number): void {
        let temp: T = this.items[idx1];
        this.items[idx1] = this.items[idx2];
        this.items[idx2] = temp;
    }

    // For debugging
    public printContents(): void {
        for (let i: number = 0; i < this.items.length; i++) {
            console.log(`${i}: ${this.items[i]}`);
        }
    }
}

export default MinBinaryHeap;
