import express from "express";
import {postJob,getSingleJob,getAllJobs,getMyJobs,updateJob,deleteJob} from "../controller/jobController.js"
import {isAuthorized} from "../middleware/auth.js"

const router=express.Router();
router.get("/getAll",getAllJobs);
router.get("/getMyJobs",isAuthorized,getMyJobs);
router.post("/postJob",isAuthorized,postJob);
router.put("/update/:id",isAuthorized,updateJob);
router.delete("/delete/:id",isAuthorized,deleteJob);
router.get("/getSingle/:id",getSingleJob);
export default router;