import express from "express";
import {employerGetAllApplications,jobSeekerGetAllApplications,jobSeekerDeleteApplication,postApplication} from "../controller/applicationController.js"
import {isAuthorized} from "../middleware/auth.js"

const router=express.Router();
router.post("/post",isAuthorized,postApplication);
router.get("/employer/getall",isAuthorized,employerGetAllApplications)
router.get("/jobseeker/getall",isAuthorized,jobSeekerGetAllApplications)
router.delete("/delete/:id",isAuthorized,jobSeekerDeleteApplication)

export default router;