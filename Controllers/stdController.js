// importing necessary components
import Student from "../Models/stdSchema.js";

// Creating new student
export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Displaying all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error.message);
    }
};
