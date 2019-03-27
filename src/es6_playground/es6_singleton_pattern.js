/*
The singleton pattern allows us to create an object of which no more than one
copy can be created. We gather data and methods inside this single object, effectively
creating a protected namespace and ensuring certain resources remain in a consistent
state throughout application execution.
*/

// This first version is created by using an object literal.
// There is nothing in JavaScript that prevents us from directly
// mutating this singleton object other than care and self-restraint.
// Singletons are usually declared in the global scope so that they
// can be accessed anywhere in our program.
const BasicSingleton = {
    attribute1: 42,
    attribute2: "Universal Answer",
    method1: function () {

    },
    method2: function (arg) {

    }
};

// Using BasicSingleton
console.log(`${BasicSingleton.attribute1} is the ${BasicSingleton.attribute2}`);

// Namespacing "attribute1" into a singleton protects it
var attribute1 = 73;
console.log(`${BasicSingleton.attribute1} is protected from being altered accidentally!`);
console.log("\n");

// This pattern also helps us prevent collisions between our code and
// code from other programmers/companies/libraries
const AppleAPIs = {
    buildSmartphone: function () {
        console.log("Building the next iPhone...");
    }
}

const SamsungAPIs = {
    buildSmartphone: function () {
        console.log("Building the next Samsung Galaxy...");
    }
}

AppleAPIs.buildSmartphone();
SamsungAPIs.buildSmartphone();
console.log("\n");

// ***************************************************************************

// Now let's rewrite the BasicSingleton from above into an ES6 class
class BasicSingletonClass {
    constructor() {
        this.attribute1 = 41;
        this.attribute2 = "Universal Answer";
    }

    method1() {

    }

    method2(arg) {

    }
}

// We have to be careful to instantiate this class only once, preferably in the global scope.
// I think a better idea might be to wrap the instance inside another singleton that is
// created using object literal syntax (since you can't instantiate an object defined in such a way).

const Wrapper = {
    globalAppState: new BasicSingletonClass()
};

console.log(`${Wrapper.globalAppState.attribute1} is close to the ${Wrapper.globalAppState.attribute2}`);