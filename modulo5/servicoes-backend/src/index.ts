import {app} from "./app";
import {addAdress} from "./endpoints/addAdress"


app.post("/addEndereco", addAdress)
