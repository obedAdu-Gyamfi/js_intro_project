# Week 4: Advanced JavaScript, Modules, Errors, and Capstone

This week organizes code, strengthens reliability, and turns the learned concepts into a finished project. Complete each day in `src/day_NNN/` and test important behavior in `tests/`.

## Day 22: ES Modules

### Requirements

- Create `src/day_022/` with at least two modules and a README.
- Use named imports and exports.
- Keep the entry point focused on composition.

### Tasks

- Export a function from a utility module.
- Import it into an application module.
- Separate data, logic, and presentation responsibilities.
- Avoid circular dependencies.

### Challenge

Split a previous week’s program into a small modular application with a clear public API.

## Day 23: Classes and Composition

### Requirements

- Create `src/day_023/index.js` with a small domain model.
- Use a class or factory only where it clarifies behavior.
- Test creation, updates, and invalid state.

### Tasks

- Define a constructor and instance method.
- Use private fields or closure state where appropriate.
- Compose objects from smaller behaviors.
- Compare composition with inheritance in the README.

### Challenge

Build a domain model for tasks, expenses, books, or recipes with operations that reflect real user actions.

## Day 24: Error Handling

### Requirements

- Create `src/day_024/index.js` with intentional error types.
- Handle errors at the correct boundary.
- Test both expected and unexpected failures.

### Tasks

- Throw and catch an `Error`.
- Create a custom error class or structured error object.
- Preserve useful error messages and codes.
- Decide which errors should reach the user.

### Challenge

Build a validation service that reports distinct errors for invalid input, missing resources, and unavailable actions.

## Day 25: Validation and Regular Expressions

### Requirements

- Create `src/day_025/index.js` with a validator.
- Normalize input before checking it.
- Test empty, malformed, boundary, and valid values.

### Tasks

- Trim and normalize strings.
- Write a regular expression for one constrained format.
- Return multiple validation messages without crashing.
- Keep validation separate from display.

### Challenge

Build a form or command-line input validator for a profile, registration form, or expense entry.

## Day 26: Automated Testing

### Requirements

- Create `src/day_026/` and at least one test file in `tests/`.
- Use Node's built-in `node:test` and `node:assert/strict`.
- Cover normal, edge, and expected-error behavior.

### Tasks

- Write a focused unit test for a pure function.
- Group related tests with descriptive names.
- Test an asynchronous function.
- Identify one behavior that is not worth testing yet and explain why.

### Challenge

Build a small tested utility library by extracting and improving functions from the previous weeks.

## Day 27: Capstone Foundation

### Requirements

- Create the capstone folder and a project README.
- Define a user story, data model, acceptance criteria, and file plan.
- Choose browser, Node.js, or a small hybrid format.

### Tasks

- Choose a practical project such as a habit tracker, expense tracker, recipe finder, study planner, or issue board.
- Sketch the main state and user actions.
- Identify pure logic, persistence, and interface modules.
- Create sample data and one failing acceptance test.

### Challenge

Build the capstone foundation: a working data model, initial module structure, and one complete user story from input to stored state.

## Day 28: Capstone Core Feature

### Requirements

- Implement the primary happy path.
- Keep domain logic independent from the interface where possible.
- Add tests for the core feature.

### Tasks

- Connect input to state changes.
- Render or print updated state.
- Add persistence with a file or `localStorage` when appropriate.
- Commit a working version before optional features.

### Challenge

Build the capstone’s main feature end to end so a new user can complete the central task successfully.

## Day 29: Capstone Hardening

### Requirements

- Add validation, errors, loading or empty states, and edge-case tests.
- Check keyboard and focus behavior for browser projects.
- Record known limitations in the README.

### Tasks

- Test missing, malformed, duplicate, and boundary input.
- Handle failed storage or network operations.
- Improve messages for users and developers.
- Review the interface at a small viewport when applicable.

### Challenge

Harden the capstone so it remains understandable and usable when users make mistakes or dependencies fail.

## Day 30: Demo and Reflection

### Requirements

- Finalize the project README with setup and usage instructions.
- Include a test command and known limitations.
- Prepare a short demonstration and written reflection.

### Tasks

- Remove dead code and clarify names.
- Run the full test suite.
- Review the project against its acceptance criteria.
- Write three next-step learning goals.

### Challenge

Ship and present the finished capstone. Demonstrate the core workflow, explain one difficult concept you overcame, and show how the project could grow.

## Week 4 Completion Check

- Days 22-26 demonstrate modular design, errors, validation, and tests.
- Days 27-30 produce a documented, tested capstone.
- The final project has a runnable command, clear usage, and known limitations.
- You can explain the design decisions instead of only describing the final output.
