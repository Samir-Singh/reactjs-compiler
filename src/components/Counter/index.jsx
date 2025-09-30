const Counter = () => {
  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count : {0}</p>
      <p className="flex gap-2">
        <button className="border p-0.5 py-0.5 rounded">Decrement</button>
        <button className="border p-1 rounded">Increment</button>
      </p>
    </div>
  );
};

export default Counter;
