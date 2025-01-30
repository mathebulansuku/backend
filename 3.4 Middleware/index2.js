import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("tiny")); //morgan middleware is used to login HTTP requests, giving you details about the request

app.get("/", (req, res) => {
  res.send("Hello, my name is Manny.");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
