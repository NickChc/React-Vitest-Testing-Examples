import { http, HttpResponse } from "msw";

export const mockUsers = [
  { name: "Dave", id: 1 },
  { name: "Mike", id: 2 },
  { name: "Nick", id: 3 },
  { name: "Max", id: 4 },
];

export const handlers = [
  http.get("https://dummyjson.com/users", () => {
    return HttpResponse.json({
      users: [...mockUsers],
    });
  }),
];
