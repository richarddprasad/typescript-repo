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

    public pop(): T | null {
        let rv: T | null = null;

        if (!this.isEmpty()) {
            rv = this.list.deleteLast();
        } else {
            throw new Error("Stack underflow");
        }
        return rv;
    }

    public peek(): T | null {
        let rv: T | null = null;

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

export default StackList;