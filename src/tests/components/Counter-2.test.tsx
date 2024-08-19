import { render, screen } from "../../test-utils";
import user from "@testing-library/user-event";
import { Counter2 } from "../../components/Counter-2";
import { vi } from "vitest";

describe("Counter2", () => {
  test("renders correctly", () => {
    render(<Counter2 count={0} />);

    const textElement = screen.getByText(/counter two/i);

    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const fn = vi.fn();
    const incrementHandler = fn("incrementHandler");
    const decrementHandler = fn("decrementHandler");

    render(
      <Counter2
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incButton = screen.getByRole("button", { name: /increment/i });
    const decButton = screen.getByRole("button", { name: /decrement/i });
    await user.click(incButton);
    await user.click(decButton);

    expect(fn.mock.calls.length).toBe(2);
  });
});
