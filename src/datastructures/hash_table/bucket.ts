import DNode from '../../common/dnode';
import DLList from '../linked_lists/dllist';

class Bucket<T> {
    private list: DLList<T>;

    constructor() {
        this.list = new DLList<T>();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public insert(item: T): void {
        this.list.insert(item);
    }

    public delete(item: T): T | null {
        return this.list.delete(item);
    }

    public contains(item: T): boolean {
        return this.list.contains(item);
    }

    // public find(item: T): DNode<T> | null {
    //     return this.list.find(item);
    // }

    public find(item: T): T | null {
        return this.list.find(item);
    }

    // For debugging
    public printContents(): void {
        this.list.printContents();
    }
}

export default Bucket;
