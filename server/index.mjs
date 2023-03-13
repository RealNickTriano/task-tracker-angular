import express from "express";
import cors from "cors";
import projects from "./routes/projects.mjs";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Load routes
app.use("/projects", projects)


// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("An unexpected error occured.");
});

app.listen(PORT, () => {
    console.log(`Server is runnning on port: ${PORT}`);
})