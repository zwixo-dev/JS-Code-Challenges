import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render("index.ejs");
});


app.post("/submit", (req, res)=>{
    
});


export default app;