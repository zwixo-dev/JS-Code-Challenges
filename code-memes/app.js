import express from "express";
import axios from "axios";

const app = express();
const api = "https://meme-api.com/gimme/programmingmemes";

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", async (req, res) => {
    try {
        const response = await axios.get(api);
        res.render("index.ejs", {image: response.data.url, title: response.data.title});
    } catch (error) {
        console.error(`There was an error: ${error.message}`);
        res.status(500).send("Error fetching meme ;(");
    }
});

export default app;