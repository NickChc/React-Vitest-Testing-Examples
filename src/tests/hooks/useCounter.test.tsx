import { renderHook, act } from "../../test-utils";
import { useCounter } from "../../hooks/useCounter";

describe("useCounter", () => {
  test("should render the initial count of 0", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {},
    });

    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });

    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {},
    });

    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {},
    });

    act(() => result.current.decrement());

    expect(result.current.count).toBe(-1);
  });
});
