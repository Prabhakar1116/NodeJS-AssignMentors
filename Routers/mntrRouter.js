// importing necessary components
import express from "express";
import {createMentor,getAllMentors,assignStudentsToMentor,changeMentor,getStudentsForMentor,getPreviousMentors} from "../Controllers/mntrController.js";

// middleware
const router = express.Router();

// setting routes
router.post("/create", createMentor);
router.get("/all-mentors", getAllMentors);
router.put("/assign/:id", assignStudentsToMentor);
router.put("/change-mentor/:id", changeMentor);
router.get("/students/:id", getStudentsForMentor);
router.get("/previous-mentors/:id", getPreviousMentors);

export default router;
