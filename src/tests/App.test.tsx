import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("should render", () => {
    const result = render(<App />);

    expect(result.container).toBeInTheDocument();
  });
});
