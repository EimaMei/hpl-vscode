import * as vscode from "vscode";
import { coreFunctions, coreTypes } from "./constants";

export const provider = vscode.languages.registerCompletionItemProvider("hpl", {
  provideCompletionItems() {
    const completionItems = [
      ...coreTypes.map((typeName) => new vscode.CompletionItem(typeName)),
      ...coreFunctions.map(
        (functionName) => new vscode.CompletionItem(functionName)
      ),
    ];

    return completionItems;
  },
});
