# Week 2: Functions, Objects, Scope, and Interaction

This week turns small expressions into reusable programs. Complete each day in `src/day_NNN/`; place focused tests in `tests/`.

## Day 8: Function Design

### Requirements

- Create `src/day_008/index.js` and a README.
- Keep calculation functions pure and return values instead of printing.
- Test normal input and division by zero.

### Tasks

- Write function declarations and function expressions.
- Add parameters and return values.
- Give parameters meaningful defaults.
- Separate calculation from display logic.

### Challenge

Build a modular calculator with addition, subtraction, multiplication, division, and a clear invalid-operation response.

## Day 9: Scope and Closures

### Requirements

- Create `src/day_009/index.js` with a counter factory.
- Prove that two counters keep separate private state.
- Add tests for increment, decrement, and reset.

### Tasks

- Identify global, function, and block scope.
- Create a closure that remembers a value.
- Use `let` inside a factory instead of exposing state directly.
- Add configurable steps with a default parameter.

### Challenge

Build a counter factory that returns `increment`, `decrement`, `reset`, and `value` operations without exposing the internal number.

## Day 10: Objects and Destructuring

### Requirements

- Create `src/day_010/index.js` with book objects and catalog functions.
- Avoid mutating the original object when updating availability.
- Test missing titles and duplicate identifiers.

### Tasks

- Create objects with properties and methods.
- Read nested values safely.
- Use object destructuring and shorthand properties.
- Update objects with spread syntax.

### Challenge

Build a library catalog that can add a book, find a book, check it out, return it, and report unavailable books.

## Day 11: Higher-Order Array Methods

### Requirements

- Create `src/day_011/index.js` with a data pipeline.
- Use `map`, `filter`, and `reduce` at least once.
- Test invalid records and an empty data set.

### Tasks

- Filter records using a predicate function.
- Map records into a new shape.
- Reduce records into a total or grouped summary.
- Confirm the source array is unchanged.

### Challenge

Build a sales report that removes invalid transactions, calculates totals, finds the best seller, and returns a summary object.

## Day 12: Node.js Built-ins and JSON

### Requirements

- Create `src/day_012/index.js` and a small JSON fixture.
- Read the fixture with `fs/promises` and construct paths with `path`.
- Handle a missing file and malformed JSON.

### Tasks

- Import a Node.js built-in using ES module syntax.
- Read text asynchronously and parse JSON.
- Convert parsed data into a report.
- Catch and classify file and parsing errors.

### Challenge

Build a JSON report tool that reads a local collection and prints item count, totals, and a useful summary.

## Day 13: DOM Manipulation

### Requirements

- Create a browser entry point and `src/day_013/index.js`.
- Support adding, completing, and removing tasks.
- Include empty-list and invalid-input states.

### Tasks

- Select elements with `querySelector`.
- Read form input and prevent default submission.
- Create, update, and remove DOM elements.
- Keep task state separate from the rendering function.

### Challenge

Build a browser to-do list with a form, visible task count, completion controls, and delete controls.

## Day 14: Interactive Dashboard

### Requirements

- Create `src/day_014/` with a browser entry point and README.
- Include derived totals, filters, and an empty state.
- Add at least one test for a pure data function.

### Tasks

- Store dashboard data as an array of objects.
- Derive counts with `filter` and `reduce`.
- Render the same state after each user action.
- Handle invalid input without breaking the interface.

### Challenge

Build an interactive dashboard that displays a collection, summary totals, a filter control, and a clear empty state.

## Week 2 Completion Check

- Each challenge separates data logic from input or display logic.
- Days 8-12 have Node-runnable entry points; Days 13-14 have browser entry points.
- Tests cover closures, object updates, array pipelines, and at least one error path.
- You can explain scope, closures, mutation, and higher-order functions.
