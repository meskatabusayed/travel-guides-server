//route handling start
import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import { notFound } from "./app/middlewares/not-found";
import globalErrorHandler from "./app/middlewares/error";


const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Travel guides...");
});


app.use(notFound);

app.use(globalErrorHandler);

export default app;
//route handling end
