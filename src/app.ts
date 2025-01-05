import express from "express";
import cors from "cors";
import requestLogger from "./middlewares/logger";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/api/users", userRoutes);

export default app;
