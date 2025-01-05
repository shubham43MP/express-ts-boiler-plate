import express from "express";
import cors from "cors";
import requestLogger from "./middlewares/logger";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger);

app.use(errorHandler)

app.use("/api/users", userRoutes);

export default app;
