import express from "express";

// Local Modules
import { signup, login, protect } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", signup).post("/login", login);

export default router;
