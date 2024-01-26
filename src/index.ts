import express from "express";
import cors from "cors";
import userRouter from "./routes/user"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hellso,ss worsssld!");
})

app.use("/users", userRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});