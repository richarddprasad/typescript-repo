import Graph from './graph';
import Vertex from '../../common/vertex';

function graphStatus() {
    console.log("Adjacency List Contents");
    graph.printContents();
    console.log("-----------------------------------------");
}

console.log("Testing depth-first graph traversal...");
const graph = new Graph();
const vA = new Vertex("A");
const vB = new Vertex("B");
const vC = new Vertex("C");
const vD = new Vertex("D");
const vE = new Vertex("E");
const vF = new Vertex("F");

graph.addVertex(vA);
graph.addVertex(vB);
graph.addVertex(vC);
graph.addVertex(vD);
graph.addVertex(vE);
graph.addVertex(vF);

graph.addEdge(vA, vB);
graph.addEdge(vA, vC);
graph.addEdge(vB, vD);
graph.addEdge(vC, vE);
graph.addEdge(vD, vE);
graph.addEdge(vD, vF);
graph.addEdge(vE, vF);

graphStatus();


