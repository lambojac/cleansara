import express from "express";
import bcrypt from "bcryptjs";
import user from "../models/user.js";

const router = express.Router();

export const signup= async (req, res) => {
  const { organization_name, email, password, confirm_password, registration_no } = req.body;

  // Validate required fields
  if (!organization_name || !email || !password || !confirm_password || !registration_no) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Confirm password match
  if (password !== confirm_password) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    // Check for existing user
    const existingEmail = await user.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const existingRegNo = await user.findOne({ registration_no });
    if (existingRegNo) {
      return res.status(400).json({ message: "Registration number already in use." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create organization
    const newOrg = new user({
      organization_name,
      email,
      password: hashedPassword,
      registration_no,
    });

    await newOrg.save();
    res.status(201).json({ message: "Organization registered successfully.",newOrg });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};


