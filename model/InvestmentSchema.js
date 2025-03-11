import mongoose from "mongoose";


const InvestmentSchema = new mongoose.Schema = ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    plan :{
        type: mongoose.Schema.Types.ObjectId,
        ref :"InvestmentPlan",
        required:true
    },
    amount: {
        type: Number,
        required:true
    },
    status: {
        type: String,
        enum: ["Pending", "Active", "Completed"],
        default: "Pending"
    },
    startDate: {
        type: Date,
        default:Date.now()
    },
    endDate: {
        type: Date,
    }
})

const Investment = mongoose.model("Investment", InvestmentSchema);

export default Investment;