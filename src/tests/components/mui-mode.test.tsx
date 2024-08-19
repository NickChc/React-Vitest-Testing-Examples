import { render, screen } from "../../test-utils";
import { MuiMode } from "../../components/mui/mui-mode";

describe("mui-mode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent(/dark mode/i);
  });
});
