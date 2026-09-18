# Week 4: Advanced JavaScript, Modules, Errors, and Capstone

This companion page expands the Week 4 roadmap in the root [README](../../README.md). Every task produces a runnable `.js` file under `src/day_NNN/` and tests under `tests/` where appropriate.

| Day | Build | Core concepts | Stretch goal |
|---|---|---|---|
| 22 | Modular application | ES modules, imports, exports | Define a small public API |
| 23 | Domain model | Classes, factories, composition | Compare composition with inheritance |
| 24 | Validation layer | Custom errors, error boundaries | Add structured error codes |
| 25 | Input validator | Regular expressions, normalization | Explain every expression with examples |
| 26 | Tested utility library | `node:test`, assertions, test design | Add Vitest and coverage |
| 27 | Capstone foundation | Data model, persistence, architecture | Separate UI, state, and services |
| 28 | Capstone implementation | Core feature and happy path | Add a CLI or responsive browser mode |
| 29 | Capstone hardening | Validation, errors, loading, accessibility | Test edge cases and network failure |
| 30 | Demo and reflection | Documentation, presentation, next steps | Publish a polished project README |

## Daily Task Details

### Day 22: Modular Application

Split an existing program into modules with clear responsibilities. Export only the functions or values other modules need. Use relative imports consistently and document the module boundaries.

### Day 23: Domain Model

Model a small domain such as tasks, expenses, books, or recipes. Use classes or factory functions where they clarify behavior, and favor composition when objects have independent responsibilities.

### Day 24: Validation Layer

Create custom error classes or structured error objects for invalid input and missing resources. Decide where errors should be caught, logged, displayed, or allowed to reach the caller.

### Day 25: Input Validator

Build a validator for form or command-line input. Normalize values before validating them, return useful messages, and test empty, malformed, boundary, and valid inputs.

### Day 26: Tested Utility Library

Choose several pure functions from the previous weeks and organize them as a small utility module. Write focused tests for normal values, edge cases, invalid input, and expected errors using Node's built-in test runner.

### Day 27: Capstone Foundation

Choose a practical project such as a habit tracker, expense tracker, recipe finder, study planner, or issue board. Define the user story, data model, core modules, storage approach, and acceptance criteria before coding.

### Day 28: Capstone Implementation

Build the main happy path end to end. Keep domain logic independent from the DOM or command-line layer, and commit a working version before adding optional features.

### Day 29: Capstone Hardening

Add validation, error handling, loading and empty states, automated tests, and accessible interaction. Check the project on small screens if it has a browser interface, and test failure paths intentionally.

### Day 30: Demo and Reflection

Document setup, usage, architecture, known limitations, and future improvements. Demonstrate the project, explain one difficult concept you overcame, and write a concrete next-step plan.

## Daily Deliverables

- A runnable entry point such as `src/day_022/index.js`.
- A short `src/day_NNN/README.md` explaining the design.
- Focused tests in `tests/` for important behavior and edge cases.
- Clear error handling for invalid or unexpected input.
- For Days 27-30, a capstone README with setup, usage, and acceptance criteria.

Run Node tasks with `node src/day_022/index.js` and the test suite with `npm test`.
