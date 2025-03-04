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
   minAmount: {
      type: Number,
      required: true,
   },
   maxAmount: {
      type: Number,
      required: true,
   },
   duration: {
    type: Number, required: true
}, // in days
});

module.exports = mongoose.model("InvestmentPlan", InvestmentPlanSchema);
