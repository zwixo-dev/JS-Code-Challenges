import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let formSubmissions = [];
let id = 0;
app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/submissions",(req, res)=>{
    res.json(formSubmissions);
});

app.post("/submit", (req, res)=>{
    console.log(req.body);
    id+=1;
    const addUser = {
        id: id,
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };
    formSubmissions.push(addUser);
    console.log("============== form ============");
    console.log(formSubmissions);
    res.render("submissions.ejs", {name : req.body.name});
});


export default app;