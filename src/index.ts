import express from "express";
import counterRouter from "./routes/counter";

console.log("Application is running :)");
console.log("Edit ./src/index.ts to start working");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/counter", counterRouter);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
