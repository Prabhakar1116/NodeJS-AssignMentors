// importing necessary components
import express from "express";
import { createStudent, getAllStudents } from "../Controllers/stdController.js";

// middleware
const router = express.Router();

// setting routes
router.post("/create", createStudent);
router.get("/all-students", getAllStudents);

export default router;
