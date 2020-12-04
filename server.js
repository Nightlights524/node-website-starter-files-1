const { response } = require('express');
const express = require('express');
const app = express();
app.set('view engine', 'pug');

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get("/", (request, response) => {
  // response.send("Hello Bop");
  response.render("index");
});