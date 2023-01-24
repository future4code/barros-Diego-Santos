import { app } from "./app"
import { UserController } from "./controller/UserController"


const userController = new UserController() 
app.get("/all", userController.getUsers);

app.post("/createUser", userController.createUser);

app.delete("/user/:id", userController.deleteUser)
