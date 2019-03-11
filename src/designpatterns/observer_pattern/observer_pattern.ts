interface Observer {
    update(items: number): void
}

interface Subject {
    registerObserver(o: Observer): void,
    removeObserver(o: Observer): void,
    notifyObservers(): void
}

// *****************************************************************************
// The Subject/Publisher, i.e., the Observable

interface IStore {
    items: number,
    getItemCount(): number,
    setItemCount(newCount: number): void
}

class Store implements IStore, Subject {
    items: number;
    observers: Array<Observer>;

    constructor(items: number) {
        this.items = items;
        this.observers = new Array<Observer>();
    }

    getItemCount(): number {
        return this.items;
    }

    setItemCount(newCount: number): void {
        // Notify observers if the state changes
        if(this.items !== newCount) {
            this.items = newCount;
            this.notifyObservers();
        }
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        let temp = this.observers.filter((observer: Observer) => {
            if(observer !== o) {
                return observer;
            }
        });
        this.observers = temp;
    }

    notifyObservers(): void {
        this.observers.forEach((observer: Observer) => {
            observer.update(this.items);
        });
    }
}

// *****************************************************************************
// Observers (Subscribers)

interface IStoreManager {
    items: number,
    managerId: number,
    unsubscribe(store: Store): void
}

class StoreManager implements IStoreManager, Observer {
    items: number;
    managerId: number;

    constructor(store: Store, managerId: number) {
        this.managerId = managerId;
        this.items = store.getItemCount();

        // Subscribe to the store
        store.registerObserver(this);
    }

    update(items: number): void {
        this.items = items;
        console.log(`Manager ${this.managerId} says inventory count changed to ${this.items}`);
    }

    unsubscribe(store: Store): void {
        store.removeObserver(this);
    }
    
}

// *****************************************************************************
// Test class

class ObserverPatternDemo {
    private store: Store = new Store(100);

    private manager1: StoreManager = new StoreManager(this.store, 1);
    private manager2: StoreManager = new StoreManager(this.store, 2);
    private manager3: StoreManager = new StoreManager(this.store, 3);
    
    constructor() {
        this.store.setItemCount(80);

        console.log("** Unsubscribing manager 1 **");
        this.store.removeObserver(this.manager1);
        this.store.setItemCount(240);

        console.log("** Manager 2 is unsubscribing **");
        this.manager2.unsubscribe(this.store);
        this.store.setItemCount(73);
    }
}

let test: ObserverPatternDemo = new ObserverPatternDemo();
