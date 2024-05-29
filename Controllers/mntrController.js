// importing necessary components
import Student from "../Models/stdSchema.js";
import Mentor from "../Models/mntrSchema.js";

// Create operation for new mentor
export const createMentor = async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        const result = await mentor.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Displaying all mentor
export const getAllMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find();
        res.status(200).json(mentors);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Assigning students to mentor
export const assignStudentsToMentor = async (req, res) => {
    try {
        const mentorId = req.params.id;
        const { std_ids } = req.body;
        
        const mentor = await Mentor.findByIdAndUpdate(
            mentorId,
            { $addToSet: { std_ids: { $each: std_ids } } },
            { new: true }
        );

        await Student.updateMany(
            { _id: { $in: std_ids } },
            { $set: { mentId: mentorId } }
        );

        res.status(200).json({ message: "Students assigned successfully", mentor });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Changing mentor
export const changeMentor = async (req, res) => {
    try {
        const studentId = req.params.id;
        const { newMentorId } = req.body;

        const student = await Student.findById(studentId);
        const previousMentorId = student.mentId;

        await Student.findByIdAndUpdate(
            studentId,{ mentId: newMentorId, $push: { previousMentors: previousMentorId } },{ new: true }
        );

        res.status(200).json({ message: "Mentor changed successfully" });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Displaying the students for that mentor 
export const getStudentsForMentor = async (req, res) => {
    try {
        const mentorId = req.params.id;
        const students = await Student.find({ mentId: mentorId });
        res.status(200).json({ message: "Student List Fetched successfully", students });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Getting previous mentor of the student
export const getPreviousMentors = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findById(studentId).populate('previousMentors');
        res.status(200).json({ previousMentors: student.previousMentors });
    } catch (error) {
        res.status(500).json(error.message);
    }
};
