import mongoose from "mongoose";

//  setting data type
const mntrSchema = mongoose.Schema({
    name: String,
    email: String,
    batch: String
})

const Mentor = mongoose.model("Mentor",mntrSchema);
export default Mentor
