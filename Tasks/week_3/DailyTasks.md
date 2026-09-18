# Week 3: Asynchronous JavaScript and Events

This companion page expands the Week 3 roadmap in the root [README](../../README.md). Every task produces a runnable `.js` file under `src/day_NNN/`; browser tasks may also include an HTML entry point.

| Day | Build | Core concepts | Stretch goal |
|---|---|---|---|
| 15 | Event-loop trace | Callbacks, timers, execution order | Predict output before running it |
| 16 | Promise delay | Promise construction and settlement | Add explicit failure paths |
| 17 | Async workflow | `async`/`await`, `Promise.all` | Compare sequential and parallel timing |
| 18 | API viewer | Fetch API, JSON, rendering | Add search and pagination |
| 19 | Resilient request | HTTP errors, `try`/`catch`, retries | Add capped exponential backoff |
| 20 | Event-driven list | Events, delegation, dynamic elements | Add keyboard and focus behavior |
| 21 | API-powered app | Integration checkpoint | Add caching and offline fallback |

## Daily Task Details

### Day 15: Event-Loop Trace

Write a program using synchronous logs, `setTimeout`, and Promise callbacks. Predict the output order in your README before running it, then explain the call stack, task queue, and microtask queue.

### Day 16: Promise Delay

Create a `wait(ms)` Promise and use it to simulate a delayed operation. Add a second operation that can reject, then consume both outcomes with `.then()` and `.catch()`.

### Day 17: Async Workflow

Rewrite a Promise chain with `async`/`await`. Run independent operations with `Promise.all`, and compare that result with sequential execution. Make sure a rejected operation is handled at the correct boundary.

### Day 18: API Viewer

Use `fetch` to request data from a public API and render useful fields in a browser interface or Node.js script. Show a loading state before the request and an empty state when no records are returned.

### Day 19: Resilient Request

Handle network failures, non-2xx HTTP responses, and invalid JSON separately. Add a retry function with a maximum number of attempts and a clear final error message.

### Day 20: Event-Driven List

Build a list whose items can be filtered, selected, and removed. Use event delegation so one listener can handle dynamic items. Keep event handlers small and move business logic into testable functions.

### Day 21: API-Powered App

Combine fetching, async state, rendering, and events into a small application. Include loading, success, empty, and error states. Add a test for the data transformation layer even if the API itself is not tested directly.

## Daily Deliverables

- A runnable entry point such as `src/day_015/index.js`.
- A short `src/day_NNN/README.md` documenting the asynchronous flow.
- At least one test for a pure function or mocked asynchronous path.
- Explicit loading, success, and error behavior where applicable.
- A note explaining one event-loop or Promise observation.

Run a Node task with `node src/day_015/index.js`, or open browser tasks through their HTML entry point.
