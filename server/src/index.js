import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', router);

app.listen(PORT,() => {
    console.log(`App running @ http://localhost:${PORT}`)
});