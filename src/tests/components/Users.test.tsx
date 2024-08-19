import { render, screen } from "../../test-utils";
import { Users } from "../../components/Users";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";
import { mockUsers } from "../../mocks/handlers";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);

    const textElement = screen.getByText(/users/i);

    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(mockUsers.length);
  });

  test("throws an error", async () => {
    server.use(
      http.get("https://dummyjson.com/users", () => {
        return new HttpResponse(null, {
          status: 500,
        });
      })
    );

    render(<Users />);
    const errorText = await screen.findByText(/error fetching users/i);

    screen.debug();
    expect(errorText).toBeInTheDocument();
  });
});
