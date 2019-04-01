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

console.log("\nInsert 2nd element into tree...");
bst.insert(3);
treeStatus();

console.log("\nInsert several elements into tree...");
bst.insert(20);
bst.insert(1);
bst.insert(43);
bst.insert(7);
bst.insert(4);
bst.insert(14);
bst.insert(19);
treeStatus();

console.log("\nInsert duplicate elements into tree...");
bst.insert(10);
bst.insert(19);
treeStatus();

const f1 = 19;
console.log(`\nfind(${f1}): ${bst.find(f1)}`);

console.log(`contains(${1})?: ${bst.contains(1)}`);
console.log(`contains(${10})?: ${bst.contains(10)}`);
console.log(`contains(${19})?: ${bst.contains(19)}`);
console.log(`contains(${4})?: ${bst.contains(4)}`);
console.log(`contains(${2})?: ${bst.contains(2)}`);
console.log(`contains(${43})?: ${bst.contains(43)}`);
console.log(`contains(${42})?: ${bst.contains(42)}`);

console.log("\nPre-order depth-first traversal test...");
let res1 = bst.dfs_preorder();
console.log(res1);

console.log("\nPost-order depth-first traversal test...");
res1 = bst.dfs_postorder();
console.log(res1);

console.log("\nIn-order depth-first traversal test...");
res1 = bst.dfs_inorder();
console.log(res1);