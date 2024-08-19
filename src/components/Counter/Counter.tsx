import { useState } from "react";
import "./Counter.css";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + amount)}>Inc By Amount</button>
    </div>
  );
}
