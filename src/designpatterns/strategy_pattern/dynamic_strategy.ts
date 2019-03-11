enum ListStrategyChoice {
    MARKDOWN,
    HTML
}

// Common interface for different strategy classes
interface ListStrategy {
    start(output: string[]): void,
    end(output: string[]): void,
    addListItem(output: string[], item: string): void
}

// Generates a list using markdown notation
class MarkdownListStrategy implements ListStrategy {
    start(output: string[]): void {
        // console.log("Markdown start()");
    }
    
    end(output: string[]): void {
        // console.log("Markdown end()");
        
    }

    addListItem(output: string[], item: string): void {
        output.push(" * ");
        output.push(item);
        output.push("\n");

        // console.log("Output state:", output);
    }
}

// Generates an unordered HTML list
class HtmlListStrategy implements ListStrategy {
    start(output: string[]): void {
        output.push("<ul>\n");
        
        // console.log("Add opening ul tag:", output);

    }
    end(output: string[]): void {
        output.push("</ul>\n");

        // console.log("Add closing ul tag:", output);
        
    }
    addListItem(output: string[], item: string): void {
        output.push(item);
        output.push("\n");
    }
}

// This class can output a list in different formats;
// the format choice can be changed dynamically
class TextProcessor {
    private formattedOutput: string[];
    private strategy: ListStrategy | undefined = undefined;

    constructor(strategyChoice: ListStrategyChoice) {
        this.formattedOutput = [];
        this.setStrategyChoice(strategyChoice);
    }

    public setStrategyChoice(strategy: ListStrategyChoice): void {
        switch(strategy) {
            case ListStrategyChoice.MARKDOWN:
                console.log("*** Switching to Markdown Strategy ***\n");

                this.strategy = new MarkdownListStrategy();
                break;

            case ListStrategyChoice.HTML:
                console.log("*** Switching to HTML Strategy ***\n");
                    
                this.strategy = new HtmlListStrategy();
                break;
        }
    }

    public appendList(items: string[]): void {
        if(this.strategy != undefined) {
            this.strategy.start(this.formattedOutput);
            
            items.forEach((item: string) => {
                if(this.strategy != undefined) {
                    this.strategy.addListItem(this.formattedOutput, item);
                }
            });
            
            this.strategy.end(this.formattedOutput);
    
            // console.log("Formatted Output:", this.formattedOutput);
        }
    }

    public toString(): string {
        return this.formattedOutput.join("");
    }

    public clear(): void {
        this.formattedOutput = [];
    }
}

// Demo class
class DynamicStrategyDemo {
    private textProcessor: TextProcessor;

    constructor(strategy: ListStrategyChoice, list: string[]) {
        this.textProcessor = new TextProcessor(strategy);

        this.textProcessor.appendList(list);
        let result = this.textProcessor.toString();
        console.log("Markdown Results:\n", result);

        // Now let's switch over to the HTML list strategy
        this.textProcessor.clear();
        this.textProcessor.setStrategyChoice(ListStrategyChoice.HTML);
        this.textProcessor.appendList(list);
        result = this.textProcessor.toString();
        console.log("HTML Results:\n", result);
    }
}

let demo = new DynamicStrategyDemo(ListStrategyChoice.MARKDOWN, ["JavaScript", "TypeScript", "LiveScript", "CoffeeScript"]);
