import express from "express";
import { createInvestment } from "../controller/investmentController.js";

const router = express.Router();

router.post("/create", createInvestment);

export default router;
