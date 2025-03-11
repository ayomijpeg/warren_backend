import { config } from "dotenv";

// Local Modules
import app from "./app.js";
import connectDB from "./model/DB.js";

// Setup env variables
config();

// setInterval(() => {
connectDB();
// }, 24 * 60 * 60 * 1000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
