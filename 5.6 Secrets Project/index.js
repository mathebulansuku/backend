import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const userInput = req.body;
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500); //Server error
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
