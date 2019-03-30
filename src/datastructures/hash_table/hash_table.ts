import Bucket from './bucket';
import Hash from '../../common/hash';
import DNode from '../../common/dnode';

class HashTable<T> {
    private buckets: Array<Bucket<T>>;

    constructor(readonly max: number) {
        this.buckets = new Array<Bucket<T>>(max);

        for (let i: number = 0; i < max; i++) {
            this.buckets[i] = new Bucket<T>();
        }
    }

    public isEmpty(): boolean {
        let rv = this.buckets.every(b => b.isEmpty());
        // console.log(`*** RV = ${rv} ***`);
        return rv;
    }

    public insert(item: T & Hash): void {
        let hashIndex = item.hash(this.max);
        // console.log(`*** HASH INDEX = ${hashIndex}`);
        this.buckets[hashIndex].insert(item);
    }

    public delete(item: T & Hash): DNode<T> | null {
        let hashIndex = item.hash(this.max);
        return this.buckets[hashIndex].delete(item);
    }

    public contains(item: T & Hash): boolean {
        let hashIndex = item.hash(this.max);
        return this.buckets[hashIndex].contains(item);
    }

    public find(item: T & Hash): DNode<T> | null {
        let hashIndex = item.hash(this.max);
        return this.buckets[hashIndex].find(item);
    }

    // For debugging
    public printContents(): void {
        for (let i: number = 0; i < this.max; i++) {
            console.log(`Contents of Bucket ${i}`);
            this.buckets[i].printContents();
            console.log("\n");
        }
    }
}

export default HashTable;
