abstract class CodeAnApp {
    protected readonly language: string;

    constructor(language: string) {
        this.language = language;
    }

    // The "template method"
    // Ideally, this method would be marked final/readonly
    public codeApp(): void {
        this.getRequirements();
        this.codeInChosenLanguage();
        this.deployApp();
    }

    // A concrete method all subclasses will execute exactly the same way
    // This method should also be final/readonly
    protected getRequirements(): void {
        console.log("Gathering requirements, generating use cases...");
    }

    // Abstract method subclasses must implement
    protected abstract codeInChosenLanguage(): void;

    // Optional method subclasses can implement, i.e., a "hook"
    protected deployApp() {}
}

// ***************************************************************

class CodeReactApp extends CodeAnApp {
    constructor(language: string) {
        super(language);
    }

    protected codeInChosenLanguage(): void {
        console.log(`Writing React app in ${this.language}`);
    }

    protected deployApp() {
        console.log('Deploying React app to Heroku...');
    }
}

new CodeReactApp("TypeScript").codeApp();
console.log("\n");

// ***************************************************************

class CodeAndroidApp extends CodeAnApp {
    constructor(language: string) {
        super(language);
    }

    protected codeInChosenLanguage(): void {
        console.log(`Writing Android app in ${this.language}`);
    }

    protected deployApp() {
        console.log('Deploying Android app to Google Play Store...');
    }
}

new CodeAndroidApp("Java").codeApp();
console.log("\n");
