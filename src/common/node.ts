// "Node" was already taken
class MyNode<T> {
    // Make it public for direct access and avoid overhead from getter/setter methods
    public item?: T;
    public next: MyNode<T> | null;

    constructor(item?: T) {
        this.item = item;
        this.next = null;
    }
}

export default MyNode;