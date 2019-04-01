import TNode from '../../common/tnode';

class BinarySearchTree<T> {
    private root: TNode<T> | null;

    constructor() {
        this.root = null;
    }

    public isEmpty(): boolean {
        return this.root == null;
    }

    public insert(item: T): void {
        this.root = this._insert(item, this.root);
    }

    private _insert(item: T, root: TNode<T> | null): TNode<T> {
        // Base Case
        if (root == null) {
            return new TNode<T>(item);
        }

        // General Case
        if (item < root.item) {
            root.left = this._insert(item, root.left);
        } else if (item >= root.item) {
            root.right = this._insert(item, root.right);
        } else {
            root.item = item;
        }
        return root;
    }

    private _inOrderTraversal(root: TNode<T> | null): void {
        if (root != null) {
            this._inOrderTraversal(root.left);
            console.log(`${root.item}`);
            this._inOrderTraversal(root.right);
        }
    }

    // For debugging
    public print(): void {
        this._inOrderTraversal(this.root);
    }

}

export default BinarySearchTree;
