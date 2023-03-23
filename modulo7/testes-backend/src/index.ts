import express from 'express';
import cors from 'cors';
import { userRouter } from './router/userRouter';

const app = express();

app.use(express.json());
app.use(cors());


app.use("/user", userRouter);


app.listen(3003, () => {
   console.log('Server runing in port 3003')
})