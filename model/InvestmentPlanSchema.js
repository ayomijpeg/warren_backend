import mongoose from "mongoose";

const InvestmentPlanSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
   },
   ROI: {
      type: Number,
      required: true,
   }, // ROI percentage
   amount: {
      type: Number,
      required: true,
   },
   duration: {
      type: Number,
      required: true,
   }, // in days
});

const InvestmentPlan = mongoose.model("InvestmentPlan", InvestmentPlanSchema);

export default InvestmentPlan;
