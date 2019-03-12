// The supertype for concrete sandwiches and decorators
abstract class Sandwich {
    protected description: string;

    constructor() {
        this.description = "Unknown Sandwich";
    }

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

// Supertype for decorators
// A sandwich decorator is of the same type as a sandwich
// It will also contain a reference to a concrete sandwich object
abstract class SandwichDecorator extends Sandwich {
    // Subclasses must reimplement this method
    public abstract getDescription(): string;
}

// **********************************************************
// Let's create some concrete sandwich classes
class TurkeySandwich extends Sandwich {
    constructor() {
        super();
        this.description = "Turkey Sandwich";
    }
    
    public cost(): number {
        return 2.49;
    }
    
}

class HamSandwich extends Sandwich {
    constructor() {
        super();
        this.description = "Ham Sandwich";
    }

    public cost(): number {
        return 2.99;
    }
}

// **********************************************************
// Now let's create some concrete decorators
class Toasted extends SandwichDecorator {
    // Contains a reference to a Sandwich
    private sandwich: Sandwich;

    constructor(sandwich: Sandwich) {
        super();
        this.sandwich = sandwich;
    }

    // "Decorate" the description for the sandwich
    public getDescription(): string {
        return `Toasted ${this.sandwich.getDescription()}`;
    }
    
    // "Decorate" the price for the sandwich
    public cost(): number {
        return 0.3 + this.sandwich.cost();
    }
}

class Cheese extends SandwichDecorator {
    // Contains a reference to a Sandwich
    private sandwich: Sandwich;

    constructor(sandwich: Sandwich) {
        super();
        this.sandwich = sandwich;
    }

    // "Decorate" the description for the sandwich
    public getDescription(): string {
        return `${this.sandwich.getDescription()} with Cheese`;
    }
    
    // "Decorate" the price for the sandwich
    public cost(): number {
        return 0.4 + this.sandwich.cost();
    }
}

// **********************************************************
// Test time

// A plain turkey sandwich
let sandwich1: Sandwich = new TurkeySandwich();
console.log("Test 1: A plain turkey sandwich (cost should be 2.49)");
console.log(sandwich1.getDescription());
console.log("Cost: ", sandwich1.cost());
console.log("\n");

let sandwich2: Sandwich = new TurkeySandwich();
console.log("Test 2: A toasted turkey sandwich (cost should be 2.79)");
sandwich2 = new Toasted(sandwich2);
console.log(sandwich2.getDescription());
console.log("Cost: ", sandwich2.cost());
console.log("\n");

let sandwich3: Sandwich = new HamSandwich();
console.log("Test 3: A toasted ham sandwich with cheese (cost should be 3.69)");
sandwich3 = new Toasted(sandwich3);
sandwich3 = new Cheese(sandwich3);
console.log(sandwich3.getDescription());
console.log("Cost: ", sandwich3.cost());
console.log("\n");

let sandwich4: Sandwich = new HamSandwich();
console.log("Test 4: A double toasted ham sandwich with double cheese (cost should be 4.39)");
sandwich4 = new Toasted(sandwich4);
sandwich4 = new Toasted(sandwich4);
sandwich4 = new Cheese(sandwich4);
sandwich4 = new Cheese(sandwich4);
console.log(sandwich4.getDescription());
console.log("Cost: ", sandwich4.cost());
console.log("\n");



