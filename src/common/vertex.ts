import Hash from './hash';

class Vertex implements Hash {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    hash(ht_size: number): number {
        const length: number = this.name.length >= 3 ? 3 : this.name.length;
        let rv: number = 0;

        for (let i: number = 0; i < length; i++) {
            rv += this.name.charCodeAt(i);
        }

        rv %= ht_size;
        return rv;
    }
}

export default Vertex;
