# Copilot Instructions for AI Coding Agents

## Project Overview
This repository is a collection of JavaScript exercises and examples for learning and practicing core JavaScript concepts. It is organized by topic and increasing complexity, with a focus on hands-on experimentation.

## Directory Structure
- `01_Basics/`: Fundamental JavaScript concepts (variables, data types, conversion, comparison, strings, numbers, dates).
- `02_Basics/`: Core JavaScript features (arrays, functions).
- `03Advanced/`: Advanced topics, including DOM manipulation (`DOM.js`), a sample HTML file (`index.html`), and related CSS (`style.css`).

## Key Patterns and Conventions
- Each file in `01_Basics/` and `02_Basics/` demonstrates a single concept or feature, often with simple, self-contained code snippets.
- `03Advanced/DOM.js` is intended for browser-based DOM manipulation and interacts with `index.html` and `style.css`.
- Naming follows a `NN_Topic.js` pattern for clarity and ordering.
- No build system or package manager is used; all code is plain JavaScript, runnable in-browser or via Node.js (where applicable).

## Developer Workflows
- **Experimentation:** Edit and run `.js` files directly. For DOM-related code, open `03Advanced/index.html` in a browser.
- **No automated tests or build scripts** are present. Manual testing and experimentation are expected.
- **Debugging:** Use browser dev tools for DOM/HTML/CSS work; use Node.js for console-based scripts.

## Integration Points
- `03Advanced/DOM.js` expects to manipulate elements defined in `03Advanced/index.html`.
- No external libraries or dependencies are used.

## Project-Specific Guidance
- Keep new examples self-contained and focused on a single concept per file.
- When adding advanced topics, place them in `03Advanced/` and ensure they are demonstrated via `index.html` if DOM-related.
- Maintain the existing file naming and organization conventions.

## References
- See `README.md` for a brief project description.
- Use `03Advanced/index.html` and `03Advanced/style.css` as templates for new DOM/CSS examples.

---
For more, see https://aka.ms/vscode-instructions-docs
