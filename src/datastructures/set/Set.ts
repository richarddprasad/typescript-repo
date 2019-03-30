// Partial implementation of a mathematical set
// Also switching to Java-style class naming conventions

import ISet from './SetInterface';

class Set<T> implements ISet<T> {
    create(): void {
        throw new Error("Method not implemented.");
    }    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    isFull(): boolean {
        throw new Error("Method not implemented.");
    }
    insert(item: T): void {
        throw new Error("Method not implemented.");
    }
    delete(item: T): void {
        throw new Error("Method not implemented.");
    }
    isElementOf(item: T): boolean {
        throw new Error("Method not implemented.");
    }
    intersect(set2: Set<T>): Set<T> {
        throw new Error("Method not implemented.");
    }
    union(set2: Set<T>): Set<T> {
        throw new Error("Method not implemented.");
    }
}

export default Set;
