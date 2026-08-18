import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', router);

app.listen(PORT,() => {
    console.log(`App running @ http://localhost:${PORT}`)
});