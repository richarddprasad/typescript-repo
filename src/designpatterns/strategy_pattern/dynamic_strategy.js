var ListStrategyChoice;
(function (ListStrategyChoice) {
    ListStrategyChoice[ListStrategyChoice["MARKDOWN"] = 0] = "MARKDOWN";
    ListStrategyChoice[ListStrategyChoice["HTML"] = 1] = "HTML";
})(ListStrategyChoice || (ListStrategyChoice = {}));
// Generates a list using markdown notation
var MarkdownListStrategy = /** @class */ (function () {
    function MarkdownListStrategy() {
    }
    MarkdownListStrategy.prototype.start = function (output) {
        // console.log("Markdown start()");
    };
    MarkdownListStrategy.prototype.end = function (output) {
        // console.log("Markdown end()");
    };
    MarkdownListStrategy.prototype.addListItem = function (output, item) {
        output.push(" * ");
        output.push(item);
        output.push("\n");
        // console.log("Output state:", output);
    };
    return MarkdownListStrategy;
}());
// Generates an unordered HTML list
var HtmlListStrategy = /** @class */ (function () {
    function HtmlListStrategy() {
    }
    HtmlListStrategy.prototype.start = function (output) {
        output.push("<ul>\n");
        // console.log("Add opening ul tag:", output);
    };
    HtmlListStrategy.prototype.end = function (output) {
        output.push("</ul>\n");
        // console.log("Add closing ul tag:", output);
    };
    HtmlListStrategy.prototype.addListItem = function (output, item) {
        output.push(item);
        output.push("\n");
    };
    return HtmlListStrategy;
}());
// This class can output a list in different formats;
// the format choice can be changed dynamically
var TextProcessor = /** @class */ (function () {
    function TextProcessor(strategyChoice) {
        this.strategy = undefined;
        this.formattedOutput = [];
        this.setStrategyChoice(strategyChoice);
    }
    TextProcessor.prototype.setStrategyChoice = function (strategy) {
        switch (strategy) {
            case ListStrategyChoice.MARKDOWN:
                console.log("*** Switching to Markdown Strategy ***\n");
                this.strategy = new MarkdownListStrategy();
                break;
            case ListStrategyChoice.HTML:
                console.log("*** Switching to HTML Strategy ***\n");
                this.strategy = new HtmlListStrategy();
                break;
        }
    };
    TextProcessor.prototype.appendList = function (items) {
        var _this = this;
        if (this.strategy != undefined) {
            this.strategy.start(this.formattedOutput);
            items.forEach(function (item) {
                if (_this.strategy != undefined) {
                    _this.strategy.addListItem(_this.formattedOutput, item);
                }
            });
            this.strategy.end(this.formattedOutput);
            // console.log("Formatted Output:", this.formattedOutput);
        }
    };
    TextProcessor.prototype.toString = function () {
        return this.formattedOutput.join("");
    };
    TextProcessor.prototype.clear = function () {
        this.formattedOutput = [];
    };
    return TextProcessor;
}());
// Demo class
var DynamicStrategyDemo = /** @class */ (function () {
    function DynamicStrategyDemo(strategy, list) {
        this.textProcessor = new TextProcessor(strategy);
        this.textProcessor.appendList(list);
        var result = this.textProcessor.toString();
        console.log("Markdown Results:\n", result);
        this.textProcessor.clear();
        this.textProcessor.setStrategyChoice(ListStrategyChoice.HTML);
        this.textProcessor.appendList(list);
        result = this.textProcessor.toString();
        console.log("HTML Results:\n", result);
    }
    return DynamicStrategyDemo;
}());
var demo = new DynamicStrategyDemo(ListStrategyChoice.MARKDOWN, ["JavaScript", "TypeScript", "LiveScript", "CoffeeScript"]);
