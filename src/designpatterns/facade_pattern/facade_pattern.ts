class Cashier {
    public takeOrder(): void {
        console.log("Cashier is taking your order");
    }
}

class Cook {
    public makeOrder(): void {
        console.log("Cook is making your order");
    }
}

class Deliverer {
    public deliverFood(): void {
        console.log("Delivery guy is delivering your food");
    }
}

class Thief {
    public stealFood(): void {
        console.log("Thief is stealing your food!");
    }
}

// Order some food... (not going to wrap this into a class)
new Cashier().takeOrder();
new Cook().makeOrder();
new Deliverer().deliverFood();
new Thief().stealFood();
console.log("\n");

// We can use a facade to simplify all these method calls
class Facade {
    private cashier: Cashier;
    private cook: Cook;
    private deliverer: Deliverer;
    private thief: Thief;

    constructor() {
        this.cashier = new Cashier();
        this.cook = new Cook();
        this.deliverer = new Deliverer();
        this.thief = new Thief();
    }

    public starve(): void {
        this.cashier.takeOrder();
        this.cook.makeOrder();
        this.deliverer.deliverFood();
        this.thief.stealFood();
    }
}

// Now we have a simple interface to interact with our subsystem of objects
class UnfortunateHungryGuy {
    private facade: Facade;

    constructor() {
        this.facade = new Facade();
    }

    public getFood(): void {
        this.facade.starve();
    }
}

new UnfortunateHungryGuy().getFood();
