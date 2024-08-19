import { render, screen } from "../../test-utils";
import { Users } from "../../components/Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);

    const textElement = screen.getByText(/users/i);

    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(4);
  });
});
