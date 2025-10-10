import app from "./index.js";
const port = 3000;



app.listen(port, ()=>{
    console.log(`I am listenin to thee port ${port} ==>> http://localhost:${port}`);
});