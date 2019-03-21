import DNode from '../../common/dnode';

class DLList<T> {
    private head: DNode<T> | null;
    private tail: DNode<T> | null;

    constructor() {
        this.head = new DNode<T>();
        this.tail = new DNode<T>();

        this.head.prev = null;
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.tail.next = null;
    }

    public isEmpty(): boolean {
        return (this.head != null &&
            this.tail != null &&
            this.head.next === this.tail &&
            this.tail.prev === this.head);
    }

    public insert(item: T): void {
        let newNode: DNode<T> = new DNode<T>(item);
        let current: DNode<T> | null = this.head;

        while (current && current.next !== this.tail) {
            current = current.next;
        }

        if (current && current.next) {
            newNode.next = current.next;
            newNode.prev = current;
            current.next.prev = newNode;
            current.next = newNode;
        }
    }

    public getFirst(): DNode<T> | null {
        return null;
    }

    public deleteLast(): DNode<T> | null {
        return null;
    }

    public getLast(): DNode<T> | null {
        return null;
    }

    public contains(item: T): boolean {
        return false;
    }

    public find(item: T): DNode<T> | null {
        return null;
    }

    public delete(item: T): DNode<T> | null {
        return null;
    }

    // Debugger method
    public printContents(): void {
        if (!this.isEmpty() && this.head) {
            let current: DNode<T> | null = this.head.next;
            while (current && current !== this.tail) {
                console.log(current.item);
                current = current.next;
            }
        }
    }
}

export default DLList;