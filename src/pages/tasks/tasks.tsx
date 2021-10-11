import React from "react";

const TasksPage = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <>
      <h2>Tasks Page</h2>
      <button onClick={increment}>{count}</button>
    </>
  );
};

export default TasksPage;
