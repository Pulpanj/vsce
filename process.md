Perfect, Jaroslav — here’s the **step‑by‑step workflow** for packaging a VS Code extension into a `.vsix` file starting from your extension’s source directory:

---

## 📦 Create a `.vsix` from an Extension Directory

1. **Install Node.js & npm**  
   - Make sure you have Node.js and npm installed.  
   - You can check with:  
     ```bash
     node -v
     npm -v
     ```

2. **Install VSCE (Visual Studio Code Extension Manager)**  
   - Globally install the packaging tool:  
     ```bash
     npm install -g vsce
     ```

3. **Navigate to Your Extension Directory**  
   - Open a terminal in the root folder of your extension (the one containing `package.json`).  
   - Example:  
     ```bash
     cd path/to/your/extension
     ```

4. **Check Your Manifest (`package.json`)**  
   - Ensure it has the required fields:  
     - `"name"`  
     - `"publisher"`  
     - `"version"`  
     - `"engines": { "vscode": "..." }`  
   - Without these, packaging will fail.

5. **Run the Packaging Command**  
   - From inside the extension directory:  
     ```bash
     vsce package
     ```
   - This will generate a `.vsix` file in the same folder (e.g., `my-extension-0.0.1.vsix`).

6. **Optional: Publish to Marketplace**  
   - If you want to publish instead of just creating `.vsix`:  
     ```bash
     vsce publish
     ```
   - Requires a publisher account and Personal Access Token (PAT).

---

## 🔍 Quick Recap
- Install **vsce** → `npm install -g vsce`  
- Go to extension folder → `cd my-extension`  
- Run → `vsce package`  
- Result → `.vsix` file ready to install in VS Code  

---

Do you want me to also show you a **minimal reproducible `package.json` template** for a custom extension, so you can be sure your directory is correctly structured before packaging?