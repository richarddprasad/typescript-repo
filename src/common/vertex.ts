import Hash from './hash';

class Vertex implements Hash {
    private name: string;
    private edges: Vertex[];

    constructor(name: string) {
        this.name = name;
        this.edges = new Array<Vertex>();
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

    public getEdges(): Vertex[] {
        return this.edges;
    }

    public addEdge(vertex: Vertex): void {
        this.edges.push(vertex);
    }

    public removeEdge(vertex: Vertex): void {
        this.edges = this.edges.filter((v: Vertex) => v !== vertex);
    }

    // For debugging
    public vertexDetail(): void {
        const edges = this.edges.map((v: Vertex) => v.getName()).join(", ");
        console.log(`*** EDGE ARR LEN = ${this.edges.length} ***`);
        console.log(`${this.name} is connected to ${edges}`);
    }
}

export default Vertex;
