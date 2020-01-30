const db = require("../data/db-config");
const Books = require("./bookModel");

describe("book model", () => {
  describe("insert()", () => {
    it("should insert book", async () => {
      await Books.insert({ title: "the hobbit", author: "jrr tolkien" });

      const books = await db("books");
      expect(books.length).not.toBeLessThan(3);
    });
  });

  describe("remove()", () => {
    it("should delete book", async () => {
      await Books.remove({ id: 1 });
      const books = await db("books");
      expect(books).not.toContain({
        title: "leviathan",
        author: "thomas hobbes"
      });
    });
  });
});