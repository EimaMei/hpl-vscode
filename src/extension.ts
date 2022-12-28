import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let testCommand = vscode.commands.registerCommand("hpl.testCommand", () => {
    vscode.window.showInformationMessage("HPL is working!");
  });

  context.subscriptions.push(testCommand);
}

export function deactivate() {}
