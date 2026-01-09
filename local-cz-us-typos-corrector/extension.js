const vscode = require('vscode');

function activate(context) {
  const usToCZ = {

    // Base (unshifted) US → CZ mappings
    "1": "+", "2": "ě", "3": "š", "4": "č",
    "5": "ř", "6": "ž", "7": "ý", "8": "á",
    "9": "í", "0": "é",
      "-": "´", "=": "´", "[": "ú", "]": ")", ";": "ů",
    "'": "´", ",": ",", ".": ".", "/": "-",
    // Shifted US → CZ mappings
    "!": "1", "@": "2", "#": "3", "$": "4",
    "%": "5", "^": "6", "&": "7", "*": "8",
    "(": "9", ")": "0",
    "_": "?",
    // "+": "´´",
    "{": "/", "}": "(",
    ":": ":", "\"": "\"", "<": "?", ">": ":",
    "?": "_"

  };

  const czechToUS = {
    // Digit row (unshifted)
    "+": "1", "ě": "2", "š": "3", "č": "4",
    "ř": "5", "ž": "6", "ý": "7", "á": "8",
    "í": "9", "é": "0",

    // Punctuation (unshifted)
    "´": "-", "ú": "[", ")": "]","ů":";",
     ",": ",", ".": ".", "-": "/",

    // Shifted equivalents
    "1": "!", "2": "@", "3": "#", "4": "$",
    "5": "%", "6": "^", "7": "&", "8": "*",
    "9": "(", "0": ")",

    "?": "_",
    // "´´": "+",
    "/": "{", "(": "}",
    ":": ":", "\"": "\"", "?": "<", ":": ">",
    "_": "?"
  };

  function replaceSelection(mapping) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    editor.edit(editBuilder => {
      for (const selection of editor.selections) {
        const text = editor.document.getText(selection);
        const replaced = text.split("").map(ch => mapping[ch] || ch).join("");
        editBuilder.replace(selection, replaced);
      }
    });
  }

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.replaceUStoCzech', () => replaceSelection(usToCZ)),
    vscode.commands.registerCommand('extension.replaceCzechToUS', () => replaceSelection(czechToUS))
  );
}

function deactivate() { }

module.exports = { activate, deactivate };
