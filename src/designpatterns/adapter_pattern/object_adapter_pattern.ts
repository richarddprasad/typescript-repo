interface Calculator {
    add(x: number, y: number): number
}

class TI30 implements Calculator {
    add(x: number, y: number): number {
        return x + y;
    }

}

interface Marble {
    copies: number,
    duplicate(): void,
    howMany(): number
}

class MagicMarble implements Marble {
    copies: number;

    constructor(initialCount: number) {
        this.copies = initialCount;
    }

    duplicate(): void {
        this.copies++;
    }

    howMany(): number {
        return this.copies;
    }
}

// Let's create a marble-to-calculator adapter
// This adapter needs to have the same supertype as that to which
// we wish to adapt
class MagicMarbleAdapter implements Calculator {
    constructor(readonly magicMarble: MagicMarble) { }

    add(x: number, y: number): number {
        const timesToDuplicate = x + y;
        for (let i: number = 0; i < timesToDuplicate; i++) {
            this.magicMarble.duplicate();
        }
        return this.magicMarble.howMany();
    }
}

// *** Testing ***
const num1: number = 17;
const num2: number = 25;

// Test the calculator
const calculator: TI30 = new TI30();
console.log(`Calculator says ${num1} + ${num2} = ${calculator.add(num1, num2)}`);

// Test the magic marble adapter
const magicMarble: MagicMarble = new MagicMarble(0);
const marbleAdapter: MagicMarbleAdapter = new MagicMarbleAdapter(magicMarble);
console.log(`Magic Marble says ${num1} + ${num2} = ${marbleAdapter.add(num1, num2)}`);

