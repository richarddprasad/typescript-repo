class TNode<T> {
    public item: T;
    public left: TNode<T> | null;
    public right: TNode<T> | null;

    constructor(item: T) {
        this.item = item;
        this.left = null;
        this.right = null;
    }
}

export default TNode;