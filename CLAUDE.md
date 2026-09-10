# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a single-function Mate Academy JS training exercise: implement `convertToObject`, which parses a CSS style string into a plain JS object (property names as keys, values as strings). The implementation lives in `src/convertToObject.js` and is currently an unimplemented stub.

## Commands

- `npm test` — lint, then run the test suite (this is what CI runs on PRs into `master`)
- `npm run lint` — runs `format` then `mate-scripts lint` (eslint via `@mate-academy/eslint-config`)
- `npm run format` — prettier only, writes `src/**/*.{html,css,scss,js}`
- `npm run test:only` — runs the jest suite only, no lint
- Run a single test: `npm run test:only -- -t "<test name>"` (or `npx jest -t "<name>"`), since `test:only` delegates to jest under the hood

## Architecture / conventions

- `src/convertToObject.js` — the function to implement.
- `src/stylesString.js` — exports `complexStylesString`, a fixture string consumed only by the test file.
- `src/convertToObject.test.js` — the authoritative spec. It covers many edge cases beyond the readme example: empty string, whitespace/tab/line-break handling around property names and values, multi-line values (e.g. multi-line `box-shadow`), extra/stray semicolons, and values containing spaces. Treat this file, not the readme's single example, as the source of truth for expected behavior.
- `readme.md` — task description with one example matching the `complexStylesString` fixture; useful for context but not exhaustive.
- `checklist.md` — repo-specific review rules that constrain the implementation:
  - Don't use iteration methods to mutate an existing array/object (`forEach` is the exception); methods like `map`/`filter` return new arrays and don't mutate the original.
  - Avoid vague variable names like `array`, `object`, `arr`, `obj`, `result`.
  - Chained methods called at the same level must share the same indentation.
  - Prefer iteration methods (`map`/`filter`/`reduce`, etc.) over `for`/`while` loops.
- Code style is enforced by `@mate-academy/eslint-config` + prettier (`.prettierrc`: 2-space indent, semicolons, single quotes, trailing commas, printWidth 80; `.editorconfig`: LF line endings) — rely on `npm run lint`/`npm run format` rather than hand-formatting.
