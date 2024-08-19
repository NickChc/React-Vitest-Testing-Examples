import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://dummyjson.com/users?limit=10", () => {
    return HttpResponse.json({
      users: [
        { name: "Dave", id: 1 },
        { name: "Mike", id: 2 },
        { name: "Nick", id: 3 },
        { name: "Max", id: 4 },
      ],
    });
  }),
];
