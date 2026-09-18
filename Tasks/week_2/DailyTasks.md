# Week 2: Functions, Objects, Scope, and Interaction

This companion page expands the Week 2 roadmap in the root [README](../../README.md). Every task produces a runnable `.js` file under `src/day_NNN/`.

| Day | Build | Core concepts | Stretch goal |
|---|---|---|---|
| 8 | Modular calculator | Function declarations, expressions, pure functions | Add default and rest parameters |
| 9 | Counter factory | Scope, closures, private state | Add reset and configurable steps |
| 10 | Library catalog | Objects, destructuring, spread, nested data | Add search and availability updates |
| 11 | Data pipeline | `map`, `filter`, `reduce`, callbacks | Compose reusable transformation functions |
| 12 | JSON report tool | Node `fs`, `path`, JSON parsing | Split file loading and reporting into modules |
| 13 | Browser to-do list | DOM selection, forms, rendering, events | Persist tasks with `localStorage` |
| 14 | Interactive dashboard | State, derived data, UI updates | Add keyboard support and empty states |

## Daily Task Details

### Day 8: Modular Calculator

Build arithmetic functions for addition, subtraction, multiplication, and division. Export or group the functions so the main program only coordinates input and output. Decide how division by zero should behave.

### Day 9: Counter Factory

Write a function that returns `increment`, `decrement`, and `value` operations while keeping the counter value private through a closure. Test that two counters do not share state.

### Day 10: Library Catalog

Represent books as objects inside an array. Implement functions to add a book, find a book by title, check it out, and return it. Use destructuring and object spread for updates without accidental mutation.

### Day 11: Data Pipeline

Given an array of records, filter invalid entries, transform the remaining values, and reduce them into a summary. Explain when each array method is appropriate and avoid changing the original input.

### Day 12: JSON Report Tool

Create a small Node.js command-line program that reads JSON from a local file using `fs/promises` and `path`, then prints a useful summary. Handle a missing file and malformed JSON clearly.

### Day 13: Browser To-Do List

Create a small HTML page and JavaScript module that accepts a task, renders it, marks it complete, and removes it. Keep application state separate from DOM rendering.

### Day 14: Interactive Dashboard

Combine objects, array methods, functions, and DOM events into a dashboard that displays a collection summary. Include loading, empty, and invalid-input states even if the data is local.

## Daily Deliverables

- A runnable entry point such as `src/day_008/index.js`.
- A short `src/day_NNN/README.md` explaining the objective and approach.
- At least one unit test in `tests/` for the main behavior.
- One normal-case and one edge-case check.
- A note about scope, mutation, or design choices.

Run a Node task with `node src/day_008/index.js`, or open the browser task through its HTML entry point.
