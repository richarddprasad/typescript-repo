// Gumball example from Head First Design Patterns book,
// converted from Java to TypeScript
// There's room for improvements, but the idea of the state pattern is clear...

class GumballMachine {
    // The various states the gumball machine can be in
    private noQuarterState: NoQuarterState;
    private soldOutState: SoldOutState;
    private hasQuarterState: SoldOutState;
    private soldState: SoldState;

    private state: State = this.soldOutState;
    count: number;

    constructor(numberOfGumballs: number) {
        // Instantiate the state objects
        this.noQuarterState = new NoQuarterState(this);
        this.soldOutState = new SoldOutState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);

        this.count = numberOfGumballs;
        if (numberOfGumballs > 0) {
            this.state = this.noQuarterState;
        }
    }

    public setState(state: State): void {
        this.state = state;
    }

    public releaseBall(): void {
        console.log("Releasing a gumball...");
        if (this.count != 0) {
            this.count--;
        }
    }

    public getCount(): number {
        return this.count;
    }

    // Getters for each state object
    public getNoQuarterState(): NoQuarterState {
        return this.noQuarterState;
    }

    public getSoldOutState(): SoldOutState {
        return this.soldOutState;
    }

    public getHasQuarterState(): HasQuarterState {
        return this.hasQuarterState;
    }

    public getSoldState(): SoldState {
        return this.soldState;
    }

    // Interface methods
    public insertQuarter(): void {
        this.state.insertQuarter();
    }

    public ejectQuarter(): void {
        this.state.ejectQuarter();
    }

    public turnCrank(): void {
        this.state.turnCrank();
        this.state.dispense();
    }
}

// ****************************************************************

abstract class State {
    protected gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public abstract insertQuarter(): void;
    public abstract ejectQuarter(): void;
    public abstract turnCrank(): void;
    public abstract dispense(): void;
}

class NoQuarterState extends State {
    public insertQuarter(): void {
        console.log("NQS: You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }

    public ejectQuarter(): void {
        console.log("NQS: You haven't inserted a quarter");
    }

    public turnCrank(): void {
        console.log("NQS: You turned the crank, but there's no quarter")
    }

    public dispense(): void {
        console.log("NQS: You need to pay first")
    }
}

class SoldOutState extends State {
    public insertQuarter(): void {
        console.log("SOS: You can't insert a quarter, the machine is sold out");
    }

    public ejectQuarter(): void {
        console.log("SOS: You can't eject, you haven't inserted a quarter yet");
    }

    public turnCrank(): void {
        console.log("SOS: You turned, but there are no gumballs")
    }

    public dispense(): void {
        console.log("SOS: No gumballs dispensed")
    }
}

class HasQuarterState extends State {
    public insertQuarter(): void {
        console.log("HQS: You can't insert another quarter");
    }

    public ejectQuarter(): void {
        console.log("HQS: Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    public turnCrank(): void {
        console.log("HQS: You turned...")
        this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }

    public dispense(): void {
        console.log("HQS: No gumball dispensed")
    }
}

class SoldState extends State {
    public insertQuarter(): void {
        console.log("SS: Please wait, we're already giving you a gumball");
    }

    public ejectQuarter(): void {
        console.log("SS: Sorry, you already turned the crank");
    }

    public turnCrank(): void {
        console.log("SS: Turning twice doesn't get you another gumball")
    }

    public dispense(): void {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        } else {
            console.log("SS: Machine is out of gumballs");
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    }
}

// ****************************************************************

// Testing

const gm = new GumballMachine(3);
console.log("Expect: Gumball released");
gm.insertQuarter();
gm.turnCrank();
console.log("\n");

console.log("Expect: Error, must pay first");
gm.turnCrank();
console.log("\n");

console.log("Expect: Error, quarter already inserted")
gm.insertQuarter();
gm.insertQuarter();
console.log("\n");

console.log("Expect: Quarter returned");
gm.ejectQuarter();
console.log("\n");

console.log("Expect: 2 gumballs dispensed, machine out of gumballs");
gm.insertQuarter();
gm.turnCrank();
gm.insertQuarter();
gm.turnCrank();
gm.insertQuarter();
gm.turnCrank();
console.log("\n");