function iterativeFactorial(n: number): number {
    if (n === 0) return 1;

    let result: number = 1;
    for (let i: number = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log("Testing iterative factorial function...")
for (let i: number = 0; i <= 10; i++) {
    console.log(`factorial${i} = ${iterativeFactorial(i)}`);
}
console.log("\n");

// ********************************************************************

function recursiveFactorial(n: number): number {
    if (n < 2) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

console.log("Testing recursive factorial function...")
for (let i: number = 0; i <= 10; i++) {
    console.log(`factorial${i} = ${recursiveFactorial(i)}`);
}
console.log("\n");

// ********************************************************************

function tailRecursiveFactorial(n: number, acc: number): number {
    if(n < 2) {
        return acc;
    }
    return tailRecursiveFactorial(n-1, acc * n);
}

console.log("Testing tail recursive factorial function...")
for (let i: number = 0; i <= 10; i++) {
    console.log(`factorial${i} = ${tailRecursiveFactorial(i, 1)}`);
}
console.log("\n");
