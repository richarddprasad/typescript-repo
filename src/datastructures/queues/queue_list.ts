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

    public dequeue(): Node<T> | null {
        return this.list.deleteFirst();
    }

    // TODO: Implement
    public peek(): void {

    }

    // For debugging
    public printContents(): void {
        this.list.printContents();
    }
}

export default QueueList;