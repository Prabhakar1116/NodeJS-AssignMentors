import mongoose from "mongoose";

// setting data type
const stdSchema = mongoose.Schema({
    name: String,
    email: String,
    batch: String,
    mentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
    previousMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }]
});

const Student = mongoose.model("Student", stdSchema);
export default Student;
