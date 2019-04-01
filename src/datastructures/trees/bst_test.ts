import BST from './binary_search_tree';

function treeStatus() {
    console.log("Is empty?: ", bst.isEmpty());
    console.log("Tree Contents:");
    bst.print();
}

console.log("Creating a binary search tree...");
const bst = new BST<number>();
treeStatus();

console.log("\nInsert 1st element into tree...");
bst.insert(10);
treeStatus();
