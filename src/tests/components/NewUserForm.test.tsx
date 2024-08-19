import { render, screen } from "../../test-utils";
import { NewUserForm } from "../../components/NewUserForm";
import user from "@testing-library/user-event";

function testNewUserForm() {
  const { container: self } = render(<NewUserForm />);

  const button = screen.getByRole("button");
  const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;

  return { button, nameInput, self };
}

describe("NewUserForm", () => {
  test("should render", () => {
    const { nameInput } = testNewUserForm();

    expect(nameInput).toBeInTheDocument();
  });

  test("button should be disabled if trimmed name is empty string", () => {
    const { button } = testNewUserForm();

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("should enable button if user types in name input", async () => {
    user.setup();

    const { button, nameInput } = testNewUserForm();

    expect(button).toBeDisabled();

    await user.type(nameInput, "Dave");

    expect(button).toBeEnabled();

    await user.clear(nameInput);

    expect(button).toBeDisabled();
  });
});
