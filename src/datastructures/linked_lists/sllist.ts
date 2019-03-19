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
        let empty = false;
        if (this.head != null && this.head.next === this.tail) {
            empty = true;
        }
        return empty;
    }

    // TODO: insert()

    // TODO: find()

    // TODO: delete()
}

export default SLList;
