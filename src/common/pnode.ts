// A Node class for priority queue data structures

class PNode<T> {
    public item: T;
    public priority: number;

    constructor(item: T, priority: number) {
        this.item = item;
        this.priority = priority;
    }
}

export default PNode;