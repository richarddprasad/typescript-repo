import HashTable from '../hash_table/hash_table';
import Vertex from '../../common/vertex';

const HT_SIZE = 5;

// Will skip creating an interface for this class
class Graph {
    private adjacencyList: HashTable<Vertex>;

    public constructor() {
        this.adjacencyList = new HashTable<Vertex>(HT_SIZE);
    }

    public addVertex(vertex: Vertex): void {
        if (this.adjacencyList.contains(vertex)) {
            throw new Error("Vertex is already in the adjacency list");
        } else {
            this.adjacencyList.insert(vertex);
        }
    }

    public addEdge(vertex1: Vertex, vertex2: Vertex): void {
        if (!(this.adjacencyList.contains(vertex1) && this.adjacencyList.contains(vertex2))) {
            throw new Error("One or both vertices is not in the adjacency list");
        }

        vertex1.addEdge(vertex2);
        vertex2.addEdge(vertex1);
    }

    public removeEdge(vertex1: Vertex, vertex2: Vertex): void {
        if (!(this.adjacencyList.contains(vertex1) && this.adjacencyList.contains(vertex2))) {
            throw new Error("One or both vertices is not in the adjacency list");
        }

        vertex1.removeEdge(vertex2);
        vertex2.removeEdge(vertex1);
    }

    // For debugging
    public printContents(): void {
        this.adjacencyList.printContents();
    }

}

export default Graph;
