import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "../../components/Counter";

function useCounter() {
  const result = render(<Counter />);

  const incButton = screen.getByRole("button", { name: /increment/i });
  const decButton = screen.getByRole("button", { name: /decrement/i });
  const incByAmountButton = screen.getByRole("button", {
    name: /inc by amount/i,
  });
  const input = screen.getByRole("textbox") as HTMLInputElement;
  const heading = screen.getByRole("heading");

  return { incButton, decButton, incByAmountButton, heading, input, result };
}

describe("Counter", () => {
  test("should render correctly", () => {
    user.setup();
    const { incButton, decButton, heading, result } = useCounter();

    expect(result.container).toBeInTheDocument();
    expect(heading).toHaveTextContent("0");
    expect(incButton).toBeInTheDocument();
    expect(decButton).toBeInTheDocument();
  });

  test("should increment by 1 if clicked increment button", async () => {
    const { incButton, heading } = useCounter();

    await user.click(incButton);

    expect(heading).toHaveTextContent("1");
  });

  test("should return 2 if increment is clicked twice", async () => {
    const { incButton, heading } = useCounter();

    await user.click(incButton);
    await user.click(incButton);

    expect(heading).toHaveTextContent("2");
  });

  test("should return '-1' if clicked decButton", async () => {
    const { decButton, heading } = useCounter();

    await user.click(decButton);

    expect(heading).toHaveTextContent("-1");
  });

  test("should return '-2' if decButton is clickded 2 times", async () => {
    const { decButton, heading } = useCounter();

    await user.dblClick(decButton);

    expect(heading).toHaveTextContent("-2");
  });

  test("should render a count of 10 after clicking IncByAmount button", async () => {
    const { incByAmountButton, heading, input } = useCounter();

    await user.type(input, "10");
    await user.click(incByAmountButton);

    expect(heading).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    const { incByAmountButton, input, incButton, decButton } = useCounter();

    await user.tab();
    expect(incButton).toHaveFocus();
    await user.tab();
    expect(decButton).toHaveFocus();
    await user.tab();
    expect(input).toHaveFocus();
    await user.tab();
    expect(incByAmountButton).toHaveFocus();
  });
});
