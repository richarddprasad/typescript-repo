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
    if (n < 2) {
        return acc;
    }
    return tailRecursiveFactorial(n - 1, acc * n);
}

console.log("Testing tail recursive factorial function...")
for (let i: number = 0; i <= 10; i++) {
    console.log(`factorial${i} = ${tailRecursiveFactorial(i, 1)}`);
}
console.log("\n");

// ********************************************************************

// Definitely not the best implementation...
function iterativeFibonacci(n: number): number {
    if (n === 0) {
        return 0;
    } else if (n <= 2) {
        return 1;
    }

    let a: number = 1;
    let b: number = 0;
    let temp: number;

    for (let i: number = n; i > 0; i--) {
        temp = a;
        a += b;
        b = temp;
    }

    return b;
}


console.log("Testing iterative Fibonacci sequence function...")
for (let i: number = 0; i <= 15; i++) {
    console.log(`fibonacci${i} = ${iterativeFibonacci(i)}`);
}
console.log("\n");

// ********************************************************************

function recursiveFibonacci(n: number): number {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}


console.log("Testing recursive Fibonacci sequence function...")
for (let i: number = 0; i <= 15; i++) {
    console.log(`fibonacci${i} = ${recursiveFibonacci(i)}`);
}
console.log("\n");

// ********************************************************************

// A cobbled-together solution, but it works.
function tailRecursiveFibonacci(n: number, acc1: number, acc2: number): number {
    if (n < 2) {
        return n;
    } else if (n === 2) {
        return 1;
    } else if(n === 3) {
        return acc1 + acc2;
    }

    return tailRecursiveFibonacci(n - 1, acc1 + acc2, acc1);
}


console.log("Testing tail recursive Fibonacci sequence function...")
for (let i: number = 0; i <= 15; i++) {
    console.log(`fibonacci${i} = ${tailRecursiveFibonacci(i, 1, 1)}`);
}
console.log("\n");
