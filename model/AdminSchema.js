import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const AdminSchema = mongoose.Schema({
   name: {
      firstname: {
         type: String,
         required: [true, "Please enter your name"],
         trim: true,
      },
      lastname: {
         type: String,
         required: [true, "Please enter your name"],
         trim: true,
      },
   },
   email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      trim: true,
      validate: {
         validator: (value) => validator.isEmail(value),
         message: "Please enter a valid email",
      },
   },
   password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [8, "Password must be at least 8 characters long"],
      select: false,
   },
   gender: {
      type: String,
      enum: ["male", "female", "rather not say"],
      default: "rather not say",
   },
   role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
      select: false,
   },
   createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
   },
   avatar: {
      type: String,
      default: "default.jpg",
   },
});

// Mongoose middleware
UserSchema.pre("save", async function (next) {
   if (!this.isModified("password")) return next();
   this.password = await bcrypt.hash(this.password, 12);
   this.confirmPassword = undefined;
   next();
});

UserSchema.methods.correctPassword = async function (InputPassword, DBpassword) {
   return await bcrypt.compare(InputPassword, DBpassword);
};

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
