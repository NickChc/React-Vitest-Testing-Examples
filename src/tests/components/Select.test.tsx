import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Select } from "../../components/Select";

describe("Select", () => {
  test("should select clicked elements", async () => {
    user.setup();

    render(<Select />);

    await user.selectOptions(screen.getByRole("listbox"), ["en", "DE"]);
    expect(
      screen.getByRole<HTMLOptionElement>("option", {
        name: "KA",
      }).selected
    ).toBe(false);

    expect(
      screen.getByRole<HTMLOptionElement>("option", { name: "EN" }).selected
    ).toBe(true);

    expect(
      screen.getByRole<HTMLOptionElement>("option", { name: "DE" }).selected
    ).toBe(true);
  });

  test("should deselect the selected options", async () => {
    user.setup();

    render(<Select />);

    await user.selectOptions(screen.getByRole("listbox"), ["en"]);

    expect(
      screen.getByRole<HTMLOptionElement>("option", { name: "EN" }).selected
    ).toBe(true);

    await user.deselectOptions(screen.getByRole("listbox"), ["en"]);

    expect(
      screen.getByRole<HTMLOptionElement>("option", { name: "EN" }).selected
    ).toBe(false);
  });
});
