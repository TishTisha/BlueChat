import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();


router.get("/users", protectRoute, getUsersForSidebar); //first authenticate and then display users
router.get("/:id", protectRoute, getMessages); //here id is the user we are gonna chat with

router.post("/send/:id", protectRoute, sendMessage);

export default router;