# Week 1: JavaScript Fundamentals

This week builds confidence with values, decisions, repetition, arrays, and text. Complete each day in `src/day_NNN/` and run the entry point with Node.js.

## Day 1: Runtime, Output, and Variables

### Requirements

- Create `src/day_001/index.js` and `src/day_001/README.md`.
- Use `const` for values that do not change and `let` for values that do.
- Include one normal-case and one edge-case check.

### Tasks

- Print three messages with `console.log`.
- Store a name, programme, level, and country in variables.
- Use a template literal to combine the values into one profile.
- Inspect the values with `typeof`.

### Challenge

Build a formatted student profile program that prints all details and calculates the student's age next year.

## Day 2: Primitives and Operators

### Requirements

- Create `src/day_002/index.js` with named conversion functions.
- Accept numeric input and show a useful result for invalid input.
- Document the units and formula in the day README.

### Tasks

- Convert a string input with `Number()`.
- Practice arithmetic, comparison, and remainder operators.
- Detect invalid numeric values with `Number.isNaN()`.
- Format a result with a template literal and a fixed decimal place.

### Challenge

Build a temperature and distance converter that supports at least two conversions and rejects non-numeric input.

## Day 3: Comparisons and Conditionals

### Requirements

- Create `src/day_003/index.js` with a decision function.
- Test valid, boundary, and invalid values.
- Explain strict equality and boolean logic in the README.

### Tasks

- Compare values with `===`, `!==`, `>`, `>=`, `<`, and `<=`.
- Combine conditions with `&&`, `||`, and `!`.
- Write an `if`/`else if`/`else` decision tree.
- Return a message instead of printing from the decision function.

### Challenge

Build a grade calculator that converts a score into a grade and explains whether the learner passed.

## Day 4: Loops and Iteration

### Requirements

- Create `src/day_004/index.js` with at least two loop examples.
- Include a test for an empty or zero-length input.
- Record the expected output before running the program.

### Tasks

- Use a `for` loop to count through a range.
- Use a `while` loop with a clear stopping condition.
- Use `for...of` to process values in an array.
- Track a running total and avoid infinite loops.

### Challenge

Build a multiplication-table generator that accepts a number and returns its table from 1 to 12.

## Day 5: Arrays and Array Methods

### Requirements

- Create `src/day_005/index.js` with functions that do not unexpectedly mutate input.
- Test an empty array and an array with duplicate values.
- Explain the difference between `push`, `slice`, and spread syntax.

### Tasks

- Add, remove, and replace array items.
- Find an item with `includes` or `find`.
- Sort a copy of numeric data with a comparator.
- Use `map` or `filter` for one transformation.

### Challenge

Build a shopping-list manager that can add an item, remove an item, mark an item complete, and print the current list.

## Day 6: Strings and Templates

### Requirements

- Create `src/day_006/index.js` with a reusable text-analysis function.
- Handle empty strings and mixed casing.
- Include example input and output in the README.

### Tasks

- Use `trim`, `toLowerCase`, `includes`, and `split`.
- Count characters, words, and vowels.
- Normalize repeated whitespace and punctuation.
- Build output with template literals.

### Challenge

Build a text analyzer that reports word count, character count, vowel count, and the longest word.

## Day 7: Week 1 Checkpoint

### Requirements

- Create `src/day_007/index.js` and a test file in `tests/`.
- Reuse at least three functions from the week's practice.
- Include a score, a final message, and an edge-case path.

### Tasks

- Store quiz questions and answers in an array of objects.
- Compare answers strictly and update a score.
- Use a loop to process all questions.
- Validate an answer that is missing or outside the allowed choices.

### Challenge

Build a command-line-style JavaScript quiz represented by data in the file. Print each result, the final score, and a pass/fail summary.

## Week 1 Completion Check

- Every day has a runnable `.js` entry point and README.
- Every challenge has a normal case and an edge case.
- At least one test exists for Days 5-7.
- You can explain variables, conditionals, loops, arrays, and string methods without copying a solution.
