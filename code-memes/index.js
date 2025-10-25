// running server from here 
import app from "./app.js";

const port = 3000;



app.listen(port, ()=>{
    console.log(`I am lestning to the port : http://localhost:${port}`);
});