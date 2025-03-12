import mongoose from "mongoose";

const InvestmentPlanSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   ROI: {
      type: String,
      required: true,
   }, // ROI percentage
   amount: {
      type: Number,
      required: true,
   },
   access: {
      type: String,
      enum: ["locked", "open"],
      default: "open",
   },
   duration: {
      type: Number,
      required: true,
      default: 30,
   }, // in days
});

const InvestmentPlan = mongoose.model("InvestmentPlan", InvestmentPlanSchema);

export default InvestmentPlan;
