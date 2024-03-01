import { Router } from "express";

const counterRouter = Router();

let count = 0;
counterRouter.get("/", (req, res) => {
  res.send(count.toString());
  count++;
  return;
});

export default counterRouter;
