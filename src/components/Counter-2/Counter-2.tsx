interface Counter2Props {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

export function Counter2({
  count,
  handleDecrement,
  handleIncrement,
}: Counter2Props) {
  return (
    <div>
      <h2>Counter Two</h2>
      <button onCanPlay={handleDecrement}>Decrement</button>
      <h1>{count}</h1>
      <button onCanPlay={handleIncrement}>Increment</button>
    </div>
  );
}
