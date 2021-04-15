const request = require("supertest");
const app = require("../../app");

it("responds with the list of all the users", async () => {
  const response = await request(app).get("/api/v1/users").send().expect(200);

  expect(response.body.users.length).toEqual(2);
});
