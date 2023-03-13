import express from "express";
import db from "../db.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET projects
router.get("/:userId", async (req, res) => {
    let collection = await db.collection("projects");
    let userId = req.params.userId;
    console.log(userId);
    let results = await collection.find({ ownerId: userId }).toArray();
    console.log(results);
    res.send(results).status(200);
});

// POST new project
router.post("/", async (req, res) => {
    let collection = await db.collection("projects");
    let project = req.body;
    collection.insertOne(project);
    res.send(result).status(201);
});

// DELETE project
router.delete("/:projectId", async (req, res) => {
    let collection = await db.collection("projects");
    let pid = req.params.projectId;
    let result = await collection.deleteOne({ _id: ObjectId(pid) });
    res.send(result).status(200);
});

export default router;