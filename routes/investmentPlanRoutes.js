import express from "express";

// Local Modules
import { createInvestmentPlan } from "../controller/investmentPlanController.js";

const router = express.Router();

router.post("/create", createInvestmentPlan);

export default router;
