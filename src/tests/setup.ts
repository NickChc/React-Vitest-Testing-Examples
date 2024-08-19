import "@testing-library/jest-dom";
import "whatwg-fetch";
import { server } from "../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
