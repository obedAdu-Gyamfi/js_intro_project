# 30-Day JavaScript Coding Project

> A practical 30-day sprint for learning modern JavaScript by writing, running, testing, and reflecting on code every day.

## The Rules

### Rule 1: Struggle Productively

Do not copy-paste solutions from **ChatGPT**, **Claude**, or any other AI agent to skip the struggle. Use documentation, Google, Stack Overflow, Reddit, and YouTube to investigate. You may ask other sources for clarity, but type the code yourself and understand what every line means.

### Rule 2: Ship Every Day

Every day must produce a runnable `.js` file. No day is "just reading." Run the file with Node.js, record what you learned, and commit your progress when possible.

### Rule 3: Consistency Is Key

If a task is genuinely too easy, complete the stretch goal. If it is too hard, take an extra day and return to it. Progress is measured by deliberate practice, not by rushing the calendar.

## Learning Outcomes

By the end of the sprint, you should be able to:

- Write readable JavaScript with `const`, `let`, functions, arrays, objects, and modern ES6+ syntax.
- Explain scope, control flow, mutation, equality, and common JavaScript data types.
- Build small browser or Node.js programs that respond to user input and events.
- Work with Promises, `async`/`await`, the Fetch API, and asynchronous error handling.
- Organize code with ES modules, write automated tests, and complete a small capstone project.

## Project Structure

Use this Node.js project layout as the codebase grows:

```text
30-day-javascript-project/
├── package.json
├── .gitignore
├── README.md
├── src/
│   ├── day_001/
│   │   ├── README.md
│   │   └── index.js
│   ├── day_002/
│   └── ... day_030/
└── tests/
	└── day_001.test.js
```

Each day belongs in `src/day_NNN/`, includes a local `README.md`, and has a runnable `index.js` (or another clearly named `.js` entry point). Tests belong in `tests/` and can use Node's built-in `node:test` module at first; introduce Vitest later if the project needs a richer test runner. The root `package.json` is the home for scripts and future dependencies.

### Useful Commands

```bash
npm install
npm start
npm test
node src/day_001/index.js
```

## 30-Day Roadmap

Detailed weekly task guides:

- [Week 1 tasks](Tasks/week_1/DailyTasks.md)
- [Week 2 tasks](Tasks/week_2/DailyTasks.md)
- [Week 3 tasks](Tasks/week_3/DailyTasks.md)
- [Week 4 tasks](Tasks/week_4/DailyTasks.md)

### Week 1: Fundamentals, Data Types, Control Flow, and Arrays

| Day | Focus | Required build | Stretch goal |
|---|---|---|---|
| 1 | Runtime, output, variables | Print a student profile with `console.log`, `const`, and `let` | Format the profile as a reusable function |
| 2 | Primitives and operators | Build a unit converter using strings, numbers, booleans, and arithmetic | Validate inputs and handle `NaN` |
| 3 | Comparisons and conditionals | Create a grade or ticket eligibility calculator | Add boundary-case tests |
| 4 | Loops and iteration | Generate a multiplication table and a running total | Compare `for`, `while`, and `for...of` |
| 5 | Arrays | Build a shopping-list manager with array methods | Add search, remove, and sort actions |
| 6 | Strings and templates | Create a text analyzer for words, characters, and vowels | Normalize punctuation and casing |
| 7 | Week 1 checkpoint | Combine the week into a command-line quiz | Add a score summary and replay flow |

### Week 2: Functions, Objects, Scope, and Interaction

| Day | Focus | Required build | Stretch goal |
|---|---|---|---|
| 8 | Function design | Refactor a calculator into small pure functions | Add default and rest parameters |
| 9 | Scope and closures | Build a counter factory that preserves private state | Explain lexical scope in the day README |
| 10 | Objects | Model a library catalog with object data | Add object destructuring and spread updates |
| 11 | Higher-order array methods | Summarize data with `map`, `filter`, and `reduce` | Write a reusable data pipeline |
| 12 | Node.js built-ins | Read and summarize a local JSON file with `fs` and `path` | Split the logic into modules |
| 13 | DOM manipulation | Build a browser to-do list with form input and rendering | Persist tasks with `localStorage` |
| 14 | Week 2 checkpoint | Make a small interactive dashboard | Add keyboard and empty-state support |

### Week 3: Asynchronous JavaScript and Events

| Day | Focus | Required build | Stretch goal |
|---|---|---|---|
| 15 | Callbacks and the event loop | Trace timed operations and event ordering | Document the output prediction first |
| 16 | Promises | Wrap a delayed operation in a Promise | Add explicit resolve and reject paths |
| 17 | `async`/`await` | Convert Promise chains into readable async functions | Use `Promise.all` for parallel work |
| 18 | Fetch API | Fetch and display data from a public API | Add loading and empty states |
| 19 | Async errors | Handle network, HTTP, and parsing failures | Add retry with a maximum attempt count |
| 20 | Events and delegation | Build a filterable event-driven list | Use event delegation for dynamic items |
| 21 | Week 3 checkpoint | Create a small API-powered browser app | Add search, pagination, or caching |

### Week 4: Advanced JavaScript, Modules, Errors, and Capstone

| Day | Focus | Required build | Stretch goal |
|---|---|---|---|
| 22 | ES modules | Split a program into imported and exported modules | Define a clean public API |
| 23 | Classes and composition | Model a small domain with classes or factory functions | Compare inheritance with composition |
| 24 | Error handling | Create custom errors and a safe validation layer | Add structured error messages |
| 25 | Regular expressions and validation | Validate form or command-line input | Explain each expression with examples |
| 26 | Testing | Add unit tests with `node:test` and assertions | Introduce Vitest and coverage later |
| 27 | Persistence and architecture | Design the capstone data model and storage layer | Separate UI, state, and services |
| 28 | Capstone implementation | Build the core feature and happy path | Add responsive UI or a CLI mode |
| 29 | Capstone hardening | Add validation, loading states, errors, and tests | Review accessibility and edge cases |
| 30 | Demo and reflection | Ship, document, and present the finished project | Write a next-steps learning plan |

## Daily Completion Checklist

- [ ] I created and ran the day's `.js` file.
- [ ] I can explain the main concept without reading the solution.
- [ ] I tested at least one normal case and one edge case.
- [ ] I recorded one question, insight, or refactoring idea.
- [ ] I completed the stretch goal when the core task was too easy.

## Tutor

Tutor: **Obed Adu-Gyamfi**  
Email: **adugyamfiobed.tpp3@gmail.com**  
GitHub: **obedAdu-Gyamfi**