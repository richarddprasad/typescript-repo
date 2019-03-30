import Bucket from './bucket';

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
        return rv;
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
