import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("Header", () => {
  test("should render header with navigation and links", () => {
    render(<Header isAuthorized={false} />);

    expect(screen.getByRole("navigation"));
  });

  test("should return profile button if user is authorized", () => {
    render(<Header isAuthorized={true} />);

    expect(screen.getByRole("button")).toHaveTextContent(/profile/i);
  });
});
