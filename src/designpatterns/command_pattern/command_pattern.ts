const MAX_SLOTS: number = 4;

// ******************************************************
// Device is the "receiver" object
class Device {
    public on(): void {
        console.log("Device was turned ON");
    }

    public off(): void {
        console.log("Device was turned OFF");
    }
}

// ******************************************************
// A command contains a reference to a "receiver"
interface Command {
    execute(): void,
    undo(): void
}

// A null object command
class NoCommand implements Command {
    execute(): void { }
    undo(): void { }
}

// Let's keep a reference a single one of these as it can be shared
const noCommand: Command = new NoCommand();


// Example commands
class DeviceOnCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.on();
    }

    undo(): void {
        this.device.off();
    }
}

class DeviceOffCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.off();
    }

    undo(): void {
        this.device.on();
    }
}

// ******************************************************
// The "invoker" contains the command object

// This particular invoker can turn on and off 4 (MAX_SLOTS) devices
class Invoker {
    onCommands: Command[];
    offCommands: Command[];
    undoCommand: Command;

    constructor() {
        this.onCommands = new Array<Command>(MAX_SLOTS);
        for (let i: number = 0; i < MAX_SLOTS; i++) {
            this.onCommands[i] = noCommand;
        }

        this.offCommands = new Array<Command>(MAX_SLOTS);
        for (let i: number = 0; i < MAX_SLOTS; i++) {
            this.offCommands[i] = noCommand;
        }

        this.undoCommand = noCommand;
    }

    public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onCommandWasInvoked(slot: number): void {
        if (slot >= 0 && slot < MAX_SLOTS) {
            this.onCommands[slot].execute();
            this.undoCommand = this.onCommands[slot];
        }
    }

    public offCommandWasInvoked(slot: number): void {
        if (slot >= 0 && slot < MAX_SLOTS) {
            this.offCommands[slot].execute();
            this.undoCommand = this.offCommands[slot];
        }
    }

    public undoCommandWasInvoked(): void {
        this.undoCommand.undo();
    }
}

// ******************************************************
// Client (I'm not wrapping it up into a class)
// The client contains the invoker and the command

let invoker: Invoker = new Invoker();
let receiverDevice: Device = new Device();
let deviceOnCommand: Command = new DeviceOnCommand(receiverDevice);
let deviceOffCommand: Command = new DeviceOffCommand(receiverDevice);

// Setup the invoker
invoker.setCommand(0, deviceOnCommand, deviceOffCommand);

console.log("Turning device 0 on and off");
invoker.onCommandWasInvoked(0);
invoker.offCommandWasInvoked(0);
console.log("Turning on device 0 then undoing");
invoker.onCommandWasInvoked(0);
invoker.undoCommandWasInvoked();
console.log("Turning off device 0 then undoing");
invoker.offCommandWasInvoked(0);
invoker.undoCommandWasInvoked();
console.log("\n");

console.log("Turning device 1 (which does not exist) on and off (expect no output)");
invoker.onCommandWasInvoked(1);
invoker.offCommandWasInvoked(1);


// ******************************************************
