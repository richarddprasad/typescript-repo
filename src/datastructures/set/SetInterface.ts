import Set from './Set';

interface ISet<T> {
    create(): void,
    isEmpty(): boolean,
    isFull(): boolean,
    insert(item: T): void,
    delete(item: T): void,
    isElementOf(item: T): boolean,
    intersect(set2: Set<T>): Set<T>,
    union(set2: Set<T>): Set<T>
}

export default ISet;