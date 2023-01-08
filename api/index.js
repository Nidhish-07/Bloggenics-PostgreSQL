import express from "express";
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.listen(8080, () => {
    console.log("Server is up and runnig on http://localhost:8080");
})