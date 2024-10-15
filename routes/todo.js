import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";
import { localUpload,todoIconUpload } from "../middlewares/upload.js";

// create a Router

const todoRouter = Router();

// Define routes

todoRouter.post("/todos", todoIconUpload.single("icon") ,addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

// export router
export default todoRouter;