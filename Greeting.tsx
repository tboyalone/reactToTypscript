import React from 'react';

// TypeScript requires the component's expected props to be declared.
interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
