# CZ<->US-typos-corrector

Replace US characters with Czech keyboard equivalents and back.

# Purpose

When writing Czech text it is common mistake to type using US keyboard layout,
resulting in wrong characters. This extension helps to quickly fix such typos
by replacing characters typed with US layout to their Czech equivalents and
vice versa.

Life saver for bad typists like me!


# Features

This extension adds two commands:

- **Replace US keystrokes by ones from Czech keyboard** 

it converts `1234567890` in the editor selection to `+ěščřžýáíé` (key binding to **CTRL+ALT+R** is bellow)

- **Replace Czech keystrokes by ones from US keyboard** 

It converts `+ěščřžýáíé` in the editor selection to `1234567890` (key binding to **CTRL+ALT+T** is bellow)

## Usage

1. Select text in the editor.
2. Run the command via Command Palette (`Ctrl+Shift+P`) or bind a shortcut in `keybindings.json`:

```json
[
   {
        "key": "ctrl+alt+r",
        "command": "extension.replaceUStoCzech",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+t",
        "command": "extension.replaceCzechToUS",
        "when": "editorTextFocus"
    }
]
