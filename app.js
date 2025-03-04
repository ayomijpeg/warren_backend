import express from "express";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";

// Local Modules
import ErrorHandler from "./utils/ErrorHandler.js";
import AppError from "./utils/AppError.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Express Rate Limiting
const limiter = rateLimit({
   max: 1000, //this should depend on the amount of request traffic the app receives
   windowMs: 60 * 60 * 1000,
   message: "Too many requests, try again in 1 hour",
});

// limits the size of the data that can be sent in a request
app.use(
   express.json({
      limit: "1mb",
   })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

// Secutity Middlewares
app.use(helmet());

// Rate Limiting
app.use(limiter);

// Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// Preventing parameter pollution
app.use(hpp());

// Route handlers
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
   res.send("Hello World!");
});

// Handling unhandled routes
app.all("*", (req, res, next) => {
   return next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

// error handling middleware
app.use(ErrorHandler);

export default app;
