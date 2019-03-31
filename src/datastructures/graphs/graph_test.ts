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

let v1 = new Vertex("Sacramento", ["San Francisco", "Portland", "Reno"]);
v1.vertexDetail();
console.log("Inserting 1st vertex...");
graph.addVertex(v1);
graphStatus();

console.log("Inserting several vertices...");
v1 = new Vertex("Roseville", ["Sacramento", "Reno", "Portland"]);
graph.addVertex(v1);
v1 = new Vertex("Portland", ["Sacramento", "Seattle"]);
graph.addVertex(v1);
v1 = new Vertex("San Francisco", ["Sacramento", "Reno", "Los Angeles"]);
graph.addVertex(v1);
v1 = new Vertex("Los Angeles", ["San Francisco"]);
graph.addVertex(v1);
let reno = new Vertex("Reno", []);
graph.addVertex(reno);
let seattle = new Vertex("Seattle", []);
graph.addVertex(seattle);
graphStatus();

console.log("Inserting a duplicate vertex into the list...");
try {
    graph.addVertex(v1);
} catch (e) {
    console.log(e);
}

console.log("\nCreating edge between non-existent vertices...");
try {
    let v1 = new Vertex("New York City", []);
    let v2 = new Vertex("New Jersey", []);
    graph.addEdge(v1, v2);
} catch (e) {
    console.log(e);
}

console.log("\nCreating an edge between Seattle and Reno...");
try {
    graph.addEdge(reno, seattle);
} catch (e) {
    console.log(e);
}
graphStatus();

console.log("\nRemoving edge between non-existent vertices...");
try {
    let v1 = new Vertex("New York City", []);
    let v2 = new Vertex("New Jersey", []);
    graph.removeEdge(v1, v2);
} catch (e) {
    console.log(e);
}

console.log("\nRemoving edge between Seattle and Reno...");
try {
    graph.removeEdge(reno, seattle);
} catch (e) {
    console.log(e);
}
graphStatus();
