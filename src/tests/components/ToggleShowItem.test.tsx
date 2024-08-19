import { render, screen } from "@testing-library/react";
import { ToggleShowItem } from "../../components/ToggleShowItem";

describe("ToggleShowItem", () => {
  test("should return just button without div", () => {
    render(<ToggleShowItem />);

    expect(screen.getByRole("button")).toHaveTextContent(/toggle/i);
    expect(screen.queryByRole("text")).not.toBeInTheDocument();
  });

  test("should return div with text after user clicks button", () => {
    render(<ToggleShowItem />);
  });
});
