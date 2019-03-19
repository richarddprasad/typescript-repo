// Singly-linked list implementation
import Node from '../../common/node';

class SLList<T> {
    private head: Node<T>;
    private tail: Node<T>;

    constructor() {
        this.head = new Node<T>();
        this.tail = new Node<T>();
        this.head.next = this.tail;
        this.tail.next = null;
    }

    public isEmpty(): boolean {
        return this.head.next === this.tail;
    }

    public insert(item: T): void {
        const newNode: Node<T> = new Node<T>(item);

        if (this.isEmpty()) {
            newNode.next = this.tail;
            this.head.next = newNode;
        } else {
            let lastNode = this.advanceTo();
            newNode.next = this.tail;

            // It's hard to avoid convoluted code in TypeScript... :(
            if (lastNode) {
                lastNode.next = newNode;
            }
        }
    } // end fn insert

    // This method tells us if the item is in the list
    public contains(item: T): boolean {
        let rv: boolean = false;
        let searchNode: Node<T> = new Node<T>(item);

        if (!this.isEmpty()) {
            let current: Node<T> | null = this.head.next;
            while (current != null && current !== this.tail) {
                if (current.item === searchNode.item) {
                    rv = true;
                    break;
                }
                current = current.next;
            } // end while
        } // end if

        return rv;
    } // end fn contains


    // This method returns the node the sought-after item is in, if it exists
    public find(item: T): Node<T> | null {
        let rv: Node<T> | null = null;
        let searchNode: Node<T> = new Node<T>(item);

        if (!this.isEmpty()) {
            let current: Node<T> | null = this.head.next;
            while (current && current !== this.tail) {
                if (current.item === searchNode.item) {
                    rv = current;
                    break;
                }
                current = current.next;
            } // end while
        } // end if

        return rv;
    } // end fn find

    // TODO: delete()
    public delete(item: T): Node<T> | null {
        let rv: Node<T> | null = null;

        if (this.contains(item)) {
            // console.log(`${item} was found in the list`);
            let current: Node<T> = this.head;
            while (current.next && current.next.item !== item) {
                current = current.next;
            }
            if (current.next) {
                rv = current.next;
                current.next = current.next.next;
            }
        }

        return rv;

    } // end fn delete

    // Helper methods

    // This function advances to the node right before the tail node
    private advanceTo(): Node<T> | null {
        let current: Node<T> | null = this.head.next;
        while (current && current.next !== this.tail) {
            current = current.next;
        }
        return current;
    }

    // For debugging
    public printContents(): void {
        let current: Node<T> | null = this.head.next;
        while (current && current !== this.tail) {
            console.log(current.item);
            current = current.next;
        }
    }
}

export default SLList;
