import SLList from '../linked_lists/sllist';
import Node from '../../common/node';

class QueueList<T> {
    private list: SLList<T>;

    constructor() {
        this.list = new SLList<T>();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public enqueue(item: T): void {
        this.list.insert(item);
    }

    public dequeue(): T | null {
        if (this.list.isEmpty()) {
            throw new Error("Queue underflow");
        }
        return this.list.deleteFirst();
    }

    public peek(): T | null {
        let rv: T | null = null;

        if (!this.list.isEmpty()) {
            rv = this.list.getFirst();
        } else {
            throw new Error("Queue is empty");
        }
        return rv;
    }

    // For debugging
    public printContents(): void {
        this.list.printContents();
    }
}

export default QueueList;