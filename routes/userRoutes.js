import express from "express";

// Local Modules
import { getAllUsers, getUser, updateUser, deleteUser } from "../controller/userContoller.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/:id", getUser);
router.patch("/update", updateUser);
router.delete("/delete", deleteUser);

export default router;
