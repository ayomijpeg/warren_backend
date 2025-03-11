import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
   createdAt: {
      type: Date,
      defaault: Date.now(),
   },
   status: {
      type: String,
      required: true,
      enum: ["Pending", "Completed"],
      default: "Pending",
   },
   type: {
      type: String,
      enum: ["Withdraw", "Deposit"],
      default: "",
   },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
