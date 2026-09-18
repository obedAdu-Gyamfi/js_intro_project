# Week 3: Asynchronous JavaScript and Events

This week explains how JavaScript handles delayed work, network requests, and user events. Complete each day in `src/day_NNN/`; place focused tests in `tests/`.

## Day 15: The Event Loop

### Requirements

- Create `src/day_015/index.js` and a README.
- Predict the output order before running the program.
- Explain synchronous code, microtasks, and timer tasks.

### Tasks

- Add synchronous `console.log` statements.
- Schedule work with `setTimeout`.
- Schedule Promise callbacks with `.then()`.
- Record the actual output and compare it with your prediction.

### Challenge

Build an event-loop trace program that clearly demonstrates why synchronous logs, Promise callbacks, and timers run in their observed order.

## Day 16: Promises

### Requirements

- Create `src/day_016/index.js` with a reusable `wait` function.
- Include both resolve and reject paths.
- Test successful and failed operations.

### Tasks

- Construct a Promise with `resolve` and `reject`.
- Consume a result with `.then()`.
- Handle failure with `.catch()`.
- Clean up with `.finally()`.

### Challenge

Build a delayed service simulator that resolves a result after a delay and rejects when given invalid input.

## Day 17: Async and Await

### Requirements

- Create `src/day_017/index.js` with at least one `async` function.
- Handle errors with `try`/`catch`.
- Compare sequential and parallel operations.

### Tasks

- Convert a Promise chain to `async`/`await`.
- Return a value from an async function.
- Run independent operations with `Promise.all`.
- Use `Promise.allSettled` when partial results are useful.

### Challenge

Build an async workflow that loads a user, preferences, and notifications, then combines them into one profile while handling a failed request.

## Day 18: Fetch API

### Requirements

- Create `src/day_018/` with a browser entry point or Node fetch script.
- Show loading, success, and empty states.
- Transform response data before rendering it.

### Tasks

- Send a request with `fetch`.
- Parse the response with `.json()`.
- Check `response.ok` before using data.
- Render selected fields instead of dumping the full response.

### Challenge

Build an API viewer that fetches public data and displays a useful list with loading and empty states.

## Day 19: Async Errors and Retries

### Requirements

- Create `src/day_019/index.js` with a reusable request function.
- Distinguish network, HTTP, and parsing failures.
- Stop retrying after a defined maximum.

### Tasks

- Throw an error for a non-2xx response.
- Catch and classify errors.
- Retry a failed operation with a counter.
- Return a clear final failure message.

### Challenge

Build a resilient request service that retries temporary failures and reports a meaningful error when the maximum attempts are exhausted.

## Day 20: Events and Delegation

### Requirements

- Create `src/day_020/` with a browser entry point.
- Support dynamic list items and one delegated listener.
- Include keyboard or focus behavior.

### Tasks

- Listen for click and input events.
- Read an event target safely.
- Use event delegation on a parent element.
- Keep event handlers thin by calling pure functions.

### Challenge

Build a filterable event-driven list where items can be selected and removed even after new items are added.

## Day 21: API-Powered App Checkpoint

### Requirements

- Create `src/day_021/` with an app, README, and tests.
- Include loading, success, empty, and error states.
- Test the data transformation layer without depending on a live API.

### Tasks

- Model UI state explicitly.
- Connect a fetch function to a render function.
- Add search or filtering to fetched data.
- Add a retry or refresh action.

### Challenge

Build a small API-powered browser app that fetches data, responds to user events, transforms results, and remains usable when the request fails.

## Week 3 Completion Check

- Every async challenge has an intentional success and failure path.
- Days 15-17 demonstrate event-loop and Promise behavior.
- Days 18-21 include loading, empty, and error UI states where applicable.
- Tests do not require a live network connection.
