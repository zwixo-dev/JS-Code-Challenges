import express from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));

let todos = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Write code" }
];
let lastId = 2;
// get 
app.get("/todos", (req, res)=>{
    res.json(todos);
});

// post
app.post("/todos", (req, res)=>{
  const title = req.body.title;
    const newTodo = {
        id: lastId + 1,
        title: title
    };

    lastId += 1;   // increment once
    todos.push(newTodo);

    res.status(201).json(newTodo);
    console.log(`========== adding :${title} to t posts  =========== !`);
    console.log(title);
});

// delete
app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const searchId = todos.findsearchId(todo => todo.id === id);

    if(searchId !== -1){
        const deletedTodo = todos.splice(searchId, 1)[0];
        console.log(`The Post with the id : ${id} was deleted`);
        return res.status(200).json(deletedTodo);
    }

    return res.status(404).json({
        message: `Cannot delete, no todo with id: ${id}`
    });
});

export default app;