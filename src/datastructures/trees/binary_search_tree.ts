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

    public find(item: T): T | null {
        let rv: T | null = null;
        let temp = this._find(item, this.root);
        if (temp) {
            rv = temp.item;
        }
        return rv;
    }

    private _find(item: T, root: TNode<T> | null): TNode<T> | null {
        if (root == null) {
            // console.log(`*** BASE CASE root=${root} item=${item} ***`);
            return null;
        }

        if (item === root.item) {
            // console.log(`*** FOUND root=${root} item=${item} ***`);
            return root;
        }

        if (item <= root.item) {
            // console.log(`*** root=${root.item} item=${item} GOING LEFT ***`);
            return this._find(item, root.left);
        }

        // console.log(`*** root=${root.item} item=${item} GOING RIGHT ***`);
        return this._find(item, root.right);
    }

    public contains(item: T): boolean {
        return this.find(item) == null ? false : true;
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