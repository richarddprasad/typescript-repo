import PNode from '../../common/pnode';

interface IMaxPQ<T> {
    items: PNode<T>[],
    enqueue(newNode: PNode<T>): void,
    dequeque(): PNode<T> | null,
    isEmpty(): boolean
}

export default IMaxPQ;