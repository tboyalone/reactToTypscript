import React, { Component } from 'react';

// Declares the type of the component's state.
interface CounterState {
  count: number;
}

class Counter extends Component<Record<string, never>, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // The functional update uses the latest state when incrementing.
  increment = (): void => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
