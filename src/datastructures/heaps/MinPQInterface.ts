import PNode from '../../common/pnode';

interface IMinPQ<T> {
    items: PNode<T>[],
    enqueue(newNode: PNode<T>): void,
    dequeque(): PNode<T> | null,
    isEmpty(): boolean
}

export default IMinPQ;