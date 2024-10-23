import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h2>I just installed nodeman for auto restart of server!</h2>");
});

const name = "Manny";

app.get("/about", (req, res) => {
  res.send(`<h1>About Me</h1><p>My name is ${name}</p>`);
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
