import AsyncHandler from "express-async-handler";

// Local Modules
import AppError from "../utils/AppError.js";
import User from "../model/UserSchema.js";

// get all users
export const getAllUsers = AsyncHandler(async (req, res, next) => {
   const users = await User.find().select("-password");
   res.json(users);
});

// get user
export const getUser = AsyncHandler(async (req, res, next) => {
   const { id } = req.params;
   const user = await User.findById(req.params.id).select("-password");
   if (!user) {
      return next(new AppError("User not found", 404));
   }
   res.status(200).json({
      status: "success",
      data: {
         user,
      },
   });
});

export const updateUser = AsyncHandler(async (req, res, next) => {
   const { firstname, lastname, gender, email } = req.body;
   const { id } = req.params;
   const user = await User.findByIdAndUpdate(
      req.user._id,
      {
         name: {
            firstname,
            lastname,
         },
         email,
         gender,
      },
      { new: true }
   );
   res.status(200).json({
      status: "Success",
      message: "User updated successfully",
      data: {
         user,
      },
   });
});

export const deleteUser = AsyncHandler(async (req, res, next) => {
   await User.findByIdAndDelete(req.user._id);
   res.status(200).json({
      status: "Success",
      message: "User deleted successfully",
   });
});
