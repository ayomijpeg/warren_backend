import { config } from "dotenv";

// Local Modules
import app from "./app.js";
import connectDB from "./model/DB.js";

// Setup env variables
config();

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
