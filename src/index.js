const { setupServer } = require("./server");
const server = setupServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(
    "YAY! knex server listening on Port ",
    `http://localhost:${PORT}`
  );
});
