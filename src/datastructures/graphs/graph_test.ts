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

const sac = new Vertex("Sacramento");
const sf = new Vertex("San Francisco");
const reno = new Vertex("Reno");
const la = new Vertex("Los Angeles");
const seattle = new Vertex("Seattle");
const portland = new Vertex("Portland");

sac.addEdge(sf);
sac.addEdge(reno);

sac.vertexDetail();
console.log("Inserting 1st vertex...");
graph.addVertex(sac);
graphStatus();

console.log("Inserting several vertices...");
graph.addVertices([sf, reno, la, seattle, portland]);
graphStatus();

console.log("Inserting a duplicate vertex into the list...");
try {
    graph.addVertex(sac);
} catch (e) {
    console.log(e);
}

console.log("\nCreating edge between non-existent vertices...");
try {
    let v1 = new Vertex("New York City");
    let v2 = new Vertex("New Jersey");
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
    let v1 = new Vertex("New York City");
    let v2 = new Vertex("New Jersey");
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

console.log("\nAttempting to delete a non-existent vertex...");
try {
    let v1 = new Vertex("Miami");
    graph.removeVertex(v1);
} catch (e) {
    console.log(e);
}

console.log("\nConnecting SF and Reno to Sac...");
sf.addEdge(sac);
reno.addEdge(sac);
graphStatus();

console.log("\nDeleting vertex 'Sacramento'...");
try {
    graph.removeVertex(sac);
} catch (e) {
    console.log(e);
}
graphStatus();

console.log("\nRe-inserting Sacramento and creating various edges...")
graph.addVertex(sac);
try {
    graph.addEdge(seattle, portland);
    graph.addEdge(portland, sac);
    graph.addEdge(sf, la);
} catch (e) {
    console.log(e);
}
graphStatus();
