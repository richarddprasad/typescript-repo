// Note: Had to commet out code so it doesn't clash
// with code in factory_pattern.ts

// // This is not actually a design pattern, but a common OOP technique
// // for creating objects

// class Pizza {
//     protected type: string;

//     constructor(type: string) {
//         this.type = type ? type : "Unknown";
//     }

//     public prepare(): void {
//         console.log("Preparing pizza");
//     }
    
//     public bake(): void {
//         console.log("Baking pizza");
//     }

//     public info(): void {
//         console.log(`You ordered a ${this.type} pizza.`);
//     }
// }

// class CheesePizza extends Pizza {
//     constructor() {
//         super("Cheese");
//     }
// }

// class PepperoniPizza extends Pizza {
//     constructor() {
//         super("Pepperoni");
//     }
// }

// // ***********************************************************
// class PizzaFactory {
//     public createPizza(type: string): Pizza | undefined {
//         if (type === "cheese") {
//             return new CheesePizza();
//         } else if (type === "pepperoni") {
//             return new PepperoniPizza();
//         }
//         return undefined;
//     }
// }

// // ***********************************************************
// class PizzaStore {
//     private factory: PizzaFactory;

//     constructor(factory: PizzaFactory) {
//         this.factory = factory;
//     }

//     public orderPizza(type: string): Pizza | undefined {
//         let pizza = this.factory.createPizza(type);
//         if (pizza != undefined) {
//             pizza.prepare();
//             pizza.bake();
//             pizza.info();
//         }
//         return pizza;
//     }
// }

// // ***********************************************************

// const pizzaStore = new PizzaStore(new PizzaFactory());
// let pizza1 = pizzaStore.orderPizza("cheese");
// let pizza2 = pizzaStore.orderPizza("pepperoni");
