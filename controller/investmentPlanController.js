import AsyncHandler from "express-async-handler";
import InvestmentPlan from "../model/InvestmentPlanSchema.js";

// Local Modules
export const createInvestmentPlan = AsyncHandler(async (req, res, next) => {
   const { title, description, roi, amount, access, duration } = req.body;

   const investmentPlan = await InvestmentPlan.create({
      title,
      description,
      amount,
      ROI: roi,
      access,
      duration,
   });

   res.status(201).json({
      status: "success",
      message: "plan created successfully",
      investmentPlan,
   });
});
