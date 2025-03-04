import jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";

// Local Modules
import User from "../model/UserSchema.js";
import AppError from "../utils/AppError.js";

const generateToken = (userID) => {
   return jwt.sign({ id: userID }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

const createSendToken = AsyncHandler(async (user, res) => {
   const token = await generateToken(user._id);
   const cookieOptions = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000),
      httpOnly: true,
   };
   if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

   user.password = undefined;

   return res.status(201).cookie("jwt", token, cookieOptions).json({
      status: "success",
      message: "Successful",
      user
   });
});

export const signup = AsyncHandler(async (req, res, next) => {
   const { firstname, lastname, email, password } = req.body;

   const user = await User.create({ name: { firstname, lastname }, email, password });
   if (!user) return next(new AppError("User not created", 400));

   await createSendToken(user, res);
   return; // Ensure no further processing occurs
});

export const login = AsyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email }).select("+password");
   // Check if user exists and if password is correct using Mongoose Instance Methods

   if (!user && !(await User.correctPassword(password, user.password))) {
      return next(new AppError("Invalid Email or Password"), 400);
   }

   // Create and send token
   await createSendToken(user, res);
   return; // Ensure no further processing occurs
});

export const protect = AsyncHandler(async (req, res, next) => {
   const token = req.cookies.jwt;

   if (!token) {
      return res.status(401).json({
         status: "Failed",
         message: "You are not logged in",
         redirect: "/login",
      });
   }

   // verify JWT
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   if (!decoded) {
      return res.status(401).json({
         status: "Failed",
         message: "You are not logged in",
         redirect: "/login",
      });
   }

   // Find user by ID fro decoded token
   const user = await User.findById(decoded.id);
   if (!user) {
      return res.status(401).json({
         status: "Failed",
         message: "The user with this token no longer exists",
         redirect: "/login",
      });
   }

   req.user = user;
   next();
});

export const authorize = AsyncHandler(async (req, res, next) => {
   if (req.user.role !== "admin") {
      return res.status(403).json({
         status: "Failed",
         message: "You do not have permission to perform this action",
         redirect: "/",
      });
   }
   next();
});
