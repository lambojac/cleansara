import mongoose  from "mongoose";

const organizationSchema = new mongoose.Schema({
  organization_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registration_no: { type: String, required: true, unique: true },
});

export default mongoose.model("user",organizationSchema)