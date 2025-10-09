// you should run the server from here 

import app from "./index.js";

const port = 3000;


app.listen(port, ()=>{
    console.log(`I am Listen to the port ${port} ==> http://localhost:${port}`);
});