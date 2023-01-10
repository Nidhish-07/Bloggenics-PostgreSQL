import express from "express";
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"

import authRoute from "./routes/auth.js"
import blogRoute from "./routes/blogs.js"
import userRoute from "./routes/users.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/blogs",blogRoute)
app.use("/api/users",userRoute)


app.get("/")

app.listen(8080, () => {
    console.log("Server is up and running on http://localhost:8080");
})