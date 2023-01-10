import express from "express"
import { addBlog } from "../controllers/blog.js"

const router = express.Router()

router.get("/", addBlog)

export default router