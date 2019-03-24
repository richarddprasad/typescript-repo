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
        let rv: DNode<T> | null = null;
        if (!this.isEmpty() && this.head) {
            rv = this.head.next;
        }
        return rv;
    }

    public deleteFirst(): DNode<T> | null {
        return null;
    }

    public deleteLast(): DNode<T> | null {
        return null;
    }

    public getLast(): DNode<T> | null {
        let rv: DNode<T> | null = null;
        if (!this.isEmpty() && this.tail) {
            rv = this.tail.prev;
        }
        return rv;
    }

    public contains(item: T): boolean {
        return this.find(item) ? true : false;
    }

    public find(item: T): DNode<T> | null {
        let rv: DNode<T> | null = null;
        let current: DNode<T> | null = null;

        if (!this.isEmpty() && this.head) {
            current = this.head.next;
            while (current && current !== this.tail) {
                if (current.item === item) {
                    rv = current;
                    break;
                }
                current = current.next;
            }
        }
        return rv;
    }

    // This code is so much simpler in C++ or Java...
    public delete(item: T): DNode<T> | null {
        let rv: DNode<T> | null = null;

        if (!this.isEmpty() && this.contains(item)) {
            let current: DNode<T> | null = this.head;
            while (current && current.next && current.next.item !== item) {
                current = current.next;
            }

            if (current && current.next) {
                let temp: DNode<T> | null = current.next;
                current.next = temp.next;

                if (temp.next) {
                    temp.next.prev = current;
                }

                temp.next = null;
                temp.prev = null;

                rv = temp;
            }
        }
        return rv;
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