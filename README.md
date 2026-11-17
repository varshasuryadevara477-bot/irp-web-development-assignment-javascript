# IRP Web Development Assignment

This repository contains both parts of the practical assignment.

## Folder structure

```text
irp-web-development-assignment/
├── part-a-responsive-ui/
│   ├── index.html
│   └── style.css
├── part-b-javascript/
│   └── bank.js
└── README.md
```

## Part A — Responsive IRP LMS Home Page

1. Open `part-a-responsive-ui/index.html` in Google Chrome.
2. Scroll the page and confirm that the navigation bar stays at the top.
3. Open Developer Tools with `F12` and enable the Device Toolbar.
4. Test desktop width (1200px or wider): the hero is two columns and the five step cards are in one row.
5. Test mobile widths (375px and 390px): the hero stacks vertically and the step cards appear in one column.
6. Confirm that there is no horizontal page overflow.

The page uses the hosted logo and hero illustration URLs supplied in the assignment PDF. An internet connection is required to load these images.

## Part B — JavaScript Bank Account Simulator

Make sure Node.js is installed. Open a terminal in the project folder and run:

```bash
node part-b-javascript/bank.js
```

The script tests `parseAmount`, strict type checks, `var`/`let`/`const`, hoisting, the Temporal Dead Zone, function declaration/expression behavior, and the asynchronous loop example.

## Submission

Create one **public** GitHub repository and upload the contents of this folder. Submit the public repository URL, not a ZIP file or local computer path.
