// This is an implementation of the Factory Pattern

// ***********************************************************
// These are known as the "Product classes"

class Pizza {
    protected name: string;

    constructor() {
        this.name = "";
    }

    public prepare(): void {
        console.log(`Preparing ${this.name}`);
    }
    
    public bake(): void {
        console.log("Bake pizza for 30 min at 350 degrees");
    }

    public cut(): void {
        console.log("Cutting pizza");
    }

    public box(): void {
        console.log("Boxing pizza");
    }

    public getName(): string {
        return this.name;
    }
}

class NYCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "New York Cheese Pizza";
    }

    // Let's override the bake method
    public bake(): void {
        console.log("Bake pizza for 15 min at 450 degrees");
    }
}

class NYPepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "New York Pepperoni Pizza";
    }
}

class CACheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "California Cheese Pizza";
    }

    // Let's override the bake method
    public bake(): void {
        console.log("Bake pizza for 45 min at 300 degrees");
    }
}

class CAPepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "California Pepperoni Pizza";
    }
}

// ***********************************************************
// These are known as the "Creator" classes

abstract class PizzaStore {
    // Each "Creator" provides its own implementation of this method
    // that selects the correct subclass from which to make a pizza;
    // this is the "factory" method
    public abstract createPizza(type: string): Pizza | undefined;

    // The steps to order a pizza are common to all pizza types
    public orderPizza(type: string): Pizza | undefined {
        let pizza = this.createPizza(type);
        if (pizza != undefined) {
            pizza.getName();
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
        }
        return pizza;
    }
}

class NYPizzaStore extends PizzaStore {
    public createPizza(type: string): Pizza | undefined {
       if(type === "cheese") {
            return new NYCheesePizza();
       } else if (type === "pepperoni") {
            return new NYPepperoniPizza();
       }
       return undefined;
    } 
}

class CAPizzaStore extends PizzaStore {
    public createPizza(type: string): Pizza | undefined {
       if(type === "cheese") {
            return new CACheesePizza();
       } else if (type === "pepperoni") {
            return new CAPepperoniPizza();
       }
       return undefined;
    } 
}

// ***********************************************************
// Test time

const nyPizzaStore = new NYPizzaStore();
let pizza1 = nyPizzaStore.orderPizza("cheese");
console.log("\n");
let pizza2 = nyPizzaStore.orderPizza("pepperoni");
console.log("\n");

const caPizzaStore = new CAPizzaStore();
let pizza3 = caPizzaStore.orderPizza("cheese");
console.log("\n");
let pizza4 = caPizzaStore.orderPizza("pepperoni");
console.log("\n");

