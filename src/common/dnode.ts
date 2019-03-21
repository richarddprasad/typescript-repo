// This is a node with both next and prev pointers

class DNode<T> {
    public item?: T;
    public next: DNode<T> | null;
    public prev: DNode<T> | null;

    constructor(item?: T) {
        this.item = item;
        this.next = null;
        this.prev = null;
    }
}

export default DNode;
