import IMaxBinaryHeap from './MaxBinaryHeapInterface';

class MaxBinaryHeap<T> implements IMaxBinaryHeap<T> {
    // Can't make this private when using an interface in TS
    items: T[];

    constructor() {
        this.items = new Array<T>();
    }

    public insert(item: T): void {
        this.items.push(item);
        this.swim();
    }

    public swim(): void {
        let index = this.items.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        // This won't work for all types since we can't overload operators in TS
        while (parentIndex >= 0 && this.items[parentIndex] < this.items[index]) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

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

export default MaxBinaryHeap;
