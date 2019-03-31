// Singly-linked list implementation
import Node from '../../common/node';

class SLList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = new Node<T>();
        this.tail = new Node<T>();
        this.head.next = this.tail;
        this.tail.next = null;
    }

    public isEmpty(): boolean {
        return this.head != null &&
            this.head.next === this.tail;
    }

    // This method inserts at the end of the list
    public insert(item: T): void {
        const newNode: Node<T> = new Node<T>(item);

        if (this.isEmpty() && this.head) {
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

        if (!this.isEmpty() && this.head) {
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
    public find(item: T): T | null {
        let rv: T | null = null;
        let searchNode: Node<T> | null = new Node<T>(item);

        if (!this.isEmpty() && this.head) {
            let current: Node<T> | null = this.head.next;
            while (current && current !== this.tail) {
                if (current.item === searchNode.item) {
                    if (current.item) {
                        rv = current.item;
                    }
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
            let current: Node<T> | null = this.head;
            while (current && current.next && current.next.item !== item) {
                current = current.next;
            }
            if (current && current.next) {
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

            if (current) {
                rv = current.next;
                current.next = this.tail;
            }

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

    // This method returns a copy of the first node
    public getFirst(): Node<T> | null {
        let rv: Node<T> | null = null;

        if (!this.isEmpty() && this.head) {
            if (this.head.next) {
                rv = new Node<T>(this.head.next.item);
            }
        }

        return rv;
    }

    // ************************************
    // Helper methods
    // ************************************

    // This function advances to the node right before the tail node
    private advanceTo(): Node<T> | null {
        if (this.head) {
            let current: Node<T> | null = this.head.next;
            while (current && current.next !== this.tail) {
                current = current.next;
            }
            return current;
        }
        return null;
    }

    // For debugging
    public printContents(): void {
        if (this.head) {
            let current: Node<T> | null = this.head.next;
            while (current && current !== this.tail) {
                console.log(current.item);
                current = current.next;
            }
        }
    }
}

export default SLList;
