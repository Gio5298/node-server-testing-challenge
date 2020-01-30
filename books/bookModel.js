const db = require("../data/db-config");

module.exports = {
  insert,
  getAll,
  remove
};

function insert({ title, author }) {
  return db("books").insert({ title, author });
}

function getAll() {
  return db("books");
}

function remove(id) {
  return db("books")
    .where({ id })
    .del();
}
