const jobModel = require("../models/job.model")

/**
@name createJobController
@description Add a new job application, Purpose: Store job data when user applies
**/
async function createJobController(req,res) {
   try {
     // Create job document in DB
    // Purpose: Save application details
     const {company , position} = req.body

    const job = await jobModel.create({
        company,
        position,
        user:req.user.id
         // Purpose: Assign ownership to logged-in user

    })

    res.status(201).json({message:"Job Created Successfully", job})
   } catch (error) {
            res.status(500).json({ error: error.message });

   }
}
/**
@name getJobsController
@description Purpose: Display all job applications for tracking
**/
async function getJobsController(req,res) {
   const jobs = await jobModel.find({user:req.user.id})
   res.status(200).json({message:"Jobs Fetched Successfully", jobs})
    
}
/**
@name updateJobController
@description Purpose: Track job progress (Applied → Interview → Selected/Rejected)
 **/
async function updateJobController(req,res) {
    const {id} = req.params
    const {status} = req.body

    // Find job by ID and update status
    // Purpose: Modify job progress stage

    const job = await jobModel.findByIdAndUpdate(
        id,
        {status},
        {new:true}
    )

     res.status(200).json({
            success: true,
            message: "Job status updated Successfully",
            data: job
        });

}

/**
@name deleteJobController
@description Remove unwanted or irrelevant job records
 **/
async function deleteJobController(req,res) {
    const {id} = req.params
        // Delete job by ID
        // Purpose: Clean up data and manage storage  
  await jobModel.findByIdAndUpdate(
        id,)

     res.status(200).json({
            success: true,
            message: "Job deleted Successfully",
        
        });

}



module.exports = {
    createJobController,
    getJobsController,
    updateJobController,
    deleteJobController
}