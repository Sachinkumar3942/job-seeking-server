import express from "express";
import {employerGetAllApplications,jobSeekerGetAllApplications,jobSeekerDeleteApplication,postApplication} from "../controller/applicationController.js"
import {isAuthorized} from "../middleware/auth.js"

const router=express.Router();
router.post("/post",isAuthorized,postApplication);
router.post("/employer/getall",isAuthorized,employerGetAllApplications)
router.post("/jobseeker/getall",isAuthorized,jobSeekerGetAllApplications)
router.post("/delete/:id",isAuthorized,jobSeekerDeleteApplication)

export default router;