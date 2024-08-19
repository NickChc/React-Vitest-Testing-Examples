import { useState } from "react";

interface UseCounterProps {
  initialCount?: number;
}

export function useCounter({ initialCount = 0 }: UseCounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return { count, increment, decrement };
}
