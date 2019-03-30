import IMaxPQ from './MaxPQInterface';
import PNode from '../../common/pnode';

class MaxPQ<T> implements IMaxPQ<T> {
    items: PNode<T>[];

    constructor() {
        this.items = new Array<PNode<T>>();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    enqueue(newNode: PNode<T>): void {
        this.items.push(newNode);
        this.swim();

    }

    dequeque(): PNode<T> | null {
        let rv: PNode<T> | null;
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

        while (parentIndex >= 0 && this.items[parentIndex].priority < this.items[index].priority) {
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
                if (this.items[leftChildIdx].priority > this.items[index].priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                if ((swap == null && this.items[rightChildIdx].priority > this.items[index].priority) ||
                    (swap != null && this.items[rightChildIdx].priority > this.items[leftChildIdx].priority)) {
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
        let temp: PNode<T> = this.items[idx1];
        this.items[idx1] = this.items[idx2];
        this.items[idx2] = temp;
    }

    // For debugging
    public printContents(): void {
        for (let i: number = 0; i < this.items.length; i++) {
            console.log(`${i}: ${this.items[i].item} has a priority of ${this.items[i].priority}`);
        }
    }

}

export default MaxPQ;