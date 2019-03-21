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

    // This method inserts at the end of the list
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

    // This method deletes a particular item
    // and returns it to the client
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
                rv.next = null;
            }
        }

        return rv;

    } // end fn delete

    // This method deletes the last element in the list
    // and returns it to the client
    public deleteLast(): Node<T> | null {
        let rv: Node<T> | null = null;

        if (!this.isEmpty()) {
            let current = this.head;
            while (current && current.next && current.next.next !== this.tail) {
                current = current.next;
            }
            rv = current.next;
            current.next = this.tail;

            // Make sure the node can be garbage collected
            if (rv) {
                rv.next = null;
            }
        }
        return rv;
    }

    // This method returns a copy of the last node
    public getLast(): Node<T> | null {
        let lastNode: Node<T> | null = null;

        if (!this.isEmpty()) {
            lastNode = this.head;
            while (lastNode && lastNode.next !== this.tail) {
                lastNode = lastNode.next;
            }
        }

        return lastNode ? new Node<T>(lastNode.item) : lastNode;
    } // end fn getLast

    // This method removes the first node and returns it to the client
    public deleteFirst(): Node<T> | null {
        let rv: Node<T> | null = null;

        if (!this.isEmpty()) {
            if (this.head && this.head.next) {
                rv = this.head.next;
                this.head.next = rv.next;
                rv.next = null;
            }
        }

        return rv;
    } // end fn deleteFirst

    // TODO: Implement getFirst function
    public getFirst(): Node<T> | null {
        return null;
    }

    // ************************************
    // Helper methods
    // ************************************

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
