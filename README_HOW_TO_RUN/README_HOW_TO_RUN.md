# H&M Analytics Dashboard — How to Run

## Quick Setup (do this ONCE only)

Open a terminal in VS Code (`Ctrl + `` ` ``), then run:

```bash
cd hm-dashboard
npm install
```

Wait for it to finish. You only ever need to do this once.

---

## 3 Ways to Open the Dashboard

### Method 1 — Keyboard shortcut in VS Code (recommended)
Press **`Ctrl + Shift + B`**
The dashboard opens in your browser automatically.

### Method 2 — F5 Debug launch
Press **`F5`** in VS Code.
Choose **"Open H&M Dashboard in Browser"** from the dropdown.
This starts the server AND opens Chrome/Edge automatically.

> **Note:** For F5 to work, install the VS Code extension:
> `Debugger for Chrome` or `JavaScript Debugger`
> (search in Extensions panel, `Ctrl+Shift+X`)

### Method 3 — Double-click (no VS Code needed)
Double-click **`start.bat`** from Windows Explorer.
The browser opens automatically.

---

## Project Structure

```
ecommerce_analytics/
├── .vscode/
│   ├── tasks.json       ← enables Ctrl+Shift+B launch
│   ├── launch.json      ← enables F5 launch
│   └── settings.json    ← editor preferences
│
├── hm-dashboard/        ← React dashboard app
│   ├── package.json     ← fixed (uses Vite 5, no conflicts)
│   ├── vite.config.js   ← auto-opens browser on start
│   └── src/
│       ├── lib/dashboardData.js   ← all chart data
│       ├── pages/Dashboard.jsx   ← main layout + tabs
│       └── components/dashboard/ ← all 10 sections
│
├── models/              ← your ML model files
├── notebooks/           ← your 5 Jupyter notebooks
└── start.bat            ← double-click to launch
```

---

## Stopping the Dashboard
In the terminal, press **`Ctrl + C`**.

## If you see a blank page
The server just needs a few more seconds. Wait 5s then refresh.

## If port 5173 is already in use
```bash
cd hm-dashboard
npx kill-port 5173
npm run dev
```
