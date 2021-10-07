import React from "react";

export default function Count() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}
