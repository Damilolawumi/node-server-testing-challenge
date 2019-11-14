const Users = require("./users-model");

const db = require("../database/dbConfig");

beforeEach(() => {
    return db("users").truncate();
});
describe("users-model", () => {
    describe("insert function", () => {
        it("should insert a user", async () => {
            await Users.add({
                username: "user5",
                password: "1234",
                department: "finance"
            });
            await Users.add({
                username: "paco",
                password: "1234",
                department: "accounts"
            });
            const users = await db("users");
            expect(users).toHaveLength(2);
        });
    })
});