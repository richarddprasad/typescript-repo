import Graph from './graph';
import Vertex from '../../common/vertex';

function graphStatus() {
    console.log("Adjacency List Contents");
    graph.printContents();
    console.log("-----------------------------------------");
}

console.log("Creating an undirected, unweighted graph...");
const graph = new Graph();
graphStatus();

let v1 = new Vertex("Sacramento");
console.log("Inserting 1st vertex...");
graph.addVertex(v1);
graphStatus();

console.log("Inserting several vertices...");
v1 = new Vertex("Roseville");
graph.addVertex(v1);
v1 = new Vertex("Portland");
graph.addVertex(v1);
v1 = new Vertex("San Francisco");
graph.addVertex(v1);
v1 = new Vertex("Los Angeles");
graph.addVertex(v1);
v1 = new Vertex("Reno");
graph.addVertex(v1);
v1 = new Vertex("Seattle");
graph.addVertex(v1);
graphStatus();

