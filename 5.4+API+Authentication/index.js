import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "manny";
const yourPassword = "cloud@@365";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/random");
    res.render("index.ejs"), { content: JSON.stringify(response.data) };
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get("API_URL", {
      auth: {
        username: "username",
        password: "password",
      },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Error:", error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(URL, {
      params: {
        score: 5,
        apiKey: APIKey,
      },
    });

    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Error:", error.message);
  }
});

const config = {
  header: { Authorization: `Bearer ${BearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(URL, config);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Error:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
