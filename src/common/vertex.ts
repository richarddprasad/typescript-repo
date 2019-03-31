import Hash from './hash';

class Vertex implements Hash {
    private name: string;
    private edges: string[];

    constructor(name: string, edges: string[]) {
        this.name = name;
        this.edges = edges;
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

    public getName(): string {
        return this.name;
    }

    public addEdge(v: Vertex): void {
        this.edges.push(v.getName());
    }

    public removeEdge(v: Vertex): void {
        const vKey = v.getName();
        this.edges = this.edges.filter((name: string) => name !== vKey);
    }

    // For debugging
    public vertexDetail(): void {
        const edges = this.edges.join(", ")
        console.log(`*** EDGE STR LEN = ${edges.length} ***`);
        console.log(`${this.name} is connected to ${edges}`);
    }
}

export default Vertex;
