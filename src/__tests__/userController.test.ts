import request from "supertest";
import app from "../app";

describe("GET /api/users/:id", () => {
  it("should return a user if the user exists", async () => {
    const response = await request(app).get("/api/users/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should return 404 if the user does not exist", async () => {
    const response = await request(app).get("/api/users/99999");
    expect(response.status).toBe(404);
  });
});