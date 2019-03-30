import HashTable from '../hash_table/hash_table';
import Vertex from '../../common/vertex';

const HT_SIZE = 5;

// Will skip creating an interface for this class
class Graph {
    private adjacencyList: HashTable<Vertex>;

    constructor() {
        this.adjacencyList = new HashTable<Vertex>(HT_SIZE);
    }

    addVertex(vertex: Vertex): void {
        if (this.adjacencyList.contains(vertex)) {
            throw new Error("Vertex is already in the adjacency list");
        } else {
            this.adjacencyList.insert(vertex);
        }
    }

    // For debugging
    public printContents(): void {
        this.adjacencyList.printContents();
    }

}

export default Graph;
