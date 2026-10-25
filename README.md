# React Components in TypeScript

This project contains two small React components written in TypeScript with
JSX. Files with JSX use the `.tsx` extension, which lets TypeScript type-check
the component logic and JSX together.

## Components

### `Greeting`

`Greeting` displays a personalized greeting.

```tsx
import Greeting from './Greeting';

function App() {
  return <Greeting name="Ada" />;
}
```

The `GreetingProps` interface in [`Greeting.tsx`](./Greeting.tsx) defines the
component's input:

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name displayed in the greeting. |

For example, `<Greeting name="Ada" />` renders `Hello, Ada!`. TypeScript will
report an error if `name` is omitted or supplied with a value that is not a
string.

### `Counter`

`Counter` displays a number that starts at zero and increases by one whenever
the **Increment** button is clicked.

```tsx
import Counter from './Counter';

function App() {
  return <Counter />;
}
```

[`Counter.tsx`](./Counter.tsx) declares its state with the `CounterState`
interface. The `count` property is a number, initialized to `0`. The component
does not take any props.

The `increment` handler uses React's functional `setState` form. React passes
the most recent state to the callback, so each click increments the current
count rather than relying on a potentially stale value.

## TypeScript conversion notes

- Use `.tsx` for TypeScript files containing JSX.
- Define a props interface (`GreetingProps`) to type the greeting's `name`.
- Define a state interface (`CounterState`) to type the counter's `count`.
- Type the class component with its props and state types.
- Keep the `return` statement on the same line as the returned JSX expression
  (or use parentheses immediately after `return`). A line break directly after
  `return` can cause JavaScript automatic semicolon insertion to return
  `undefined`.
- Use a functional state update when the next state depends on the previous
  state.

## Project setup

The `package.json` currently lists React and React's TypeScript declarations as
dependencies. It does not define scripts for running a development server,
building, or type-checking, and this project does not include an application
entry point. To render these components, import them from a React application
configured to support TypeScript and JSX.
