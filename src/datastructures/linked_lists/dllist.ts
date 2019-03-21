import DNode from '../../common/dnode';

class DLList<T> {
    private head: DNode<T> | null;
    private tail: DNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public isEmpty(): boolean {
        return true;
    }

    public insert(item: T): void {

    }

    public getFirst(): DNode<T> | null {
        return null;
    }

    public deleteLast(): DNode<T> | null {
        return null;
    }

    public getLast(): DNode<T> | null {
        return null;
    }

    public contains(item: T): boolean {
        return false;
    }

    public find(item: T): DNode<T> | null {
        return null;
    }

    public delete(item: T): DNode<T> | null {
        return null;
    }

    // Debugger method
    public printContents(): void {

    }
}

export default DLList;