import mongoose from "mongoose";

const InvestmentSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
   },
   plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InvestmentPlan",
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
   ROI: {
      type: Number,
   },
   status: {
      type: String,
      enum: ["Pending", "Active", "Completed"],
      default: "Pending",
   },
   startDate: {
      type: Date,
      default: Date.now(),
   },
   endDate: {
      type: Date,
   },
});

InvestmentSchema.pre("save", function (next) {
   if (this.startDate && !this.endDate) {
      this.endDate = new Date(this.startDate);
      this.endDate.setMonth(this.endDate.getMonth() + 1);
   }
   next();
});

InvestmentSchema.pre("save", function (next) {
   if (this.amount && !this.ROI) {
      this.ROI = (8 / 100) * this.amount;
   }
   next();
});

const Investment = mongoose.model("Investment", InvestmentSchema);

export default Investment;
