import express from "express";
import {postJob,getSingleJob,getAllJobs,getMyJobs,updateJob,deleteJob} from "../controller/jobController.js"
import {isAuthorized} from "../middleware/auth.js"

const router=express.Router();
router.get("/getall",getAllJobs);
router.get("/getmyjobs",isAuthorized,getMyJobs);
router.post("/post",isAuthorized,postJob);
router.put("/update/:id",isAuthorized,updateJob);
router.delete("/delete/:id",isAuthorized,deleteJob);
router.get("/:id",isAuthorized,getSingleJob);
export default router;
