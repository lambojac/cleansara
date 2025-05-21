import { signup } from "../controller/signup.js";
import express from 'express';


const router = express.Router();
/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: Register a new organization
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - organization_name
 *               - email
 *               - password
 *               - confirm_password
 *               - registration_no
 *             properties:
 *               organization_name:
 *                 type: string
 *                 example: Acme Corp
 *               email:
 *                 type: string
 *                 format: email
 *                 example: org@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Password123!
 *               confirm_password:
 *                 type: string
 *                 format: password
 *                 example: Password123!
 *               registration_no:
 *                 type: string
 *                 example: REG-2025-001
 *     responses:
 *       201:
 *         description: Organization registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Organization registered successfully.
 *                 newOrg:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     organization_name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     registration_no:
 *                       type: string
 *       400:
 *         description: Bad request (e.g., missing fields, email/registration already in use, passwords do not match)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email already in use.
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server error.
 */

router.post("/signup",signup)

export default router;