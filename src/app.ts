//route handling start
import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import { notFound } from "./app/middlewares/not-found";
import globalErrorHandler from "./app/middlewares/error";
import path from "path";


const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));


app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Travel guides...");
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/success.html'));
});

app.use(notFound);

app.use(globalErrorHandler);

export default app;
//route handling end
