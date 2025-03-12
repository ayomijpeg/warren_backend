import AsyncHandler from "express-async-handler";
import InvestmentPlan from "../model/InvestmentPlanSchema.js";
import Investment from "../model/InvestmentSchema.js";

export const createInvestment = AsyncHandler(async (req, res, next) => {
   const { user, investmentPlan, amount } = req.body;

   console.log(typeof investmentPlan);

   const plan = await InvestmentPlan.findOne({ title: investmentPlan });
   
   console.log("plan", plan);

   const investment = await Investment.create({
      user,
      plan: plan._id,
      amount,
      startDate: Date.now(),
   });

   res.status(201).json({
      status: "success",
      message: "investment created successfully",
      investment,
   });
});
