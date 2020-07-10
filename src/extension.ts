import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-hover-demo" is now active!');

	const disposable = vscode.languages.registerHoverProvider(['markdown', 'plaintext'], {
		provideHover(document, position, token) {
			const range = document.getWordRangeAtPosition(position);
			const text = document.getText(range);
			const count = document.getText().match(new RegExp(text, 'g'))?.length;
			return {
				contents: [`**${text}** - ${count} times in this document`],
				range
			};
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
