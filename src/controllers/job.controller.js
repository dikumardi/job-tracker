const jobModel = require("../models/job.model")

// CREATE JOB
async function createJobController(req, res) {
    try {
        const { company, position } = req.body;

        //  Validation
        if (!company || !position) {
            return res.status(400).json({
                success: false,
                message: "Company and Position are required"
            });
        }

        const job = await jobModel.create({
            company,
            position,
            user: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Job Created Successfully",
            data: job
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// GET JOBS (with pagination + search + filter)
async function getJobsController(req, res) {
    try {
        const { status, search, page = 1, limit = 5 } = req.query;

        //  Query object
        let query = { user: req.user.id };

        //  Filter by status
        if (status) {
            query.status = status;
        }

        //  Search by company name
        if (search) {
            query.company = { $regex: search, $options: "i" };
        }

        //  Pagination
        const skip = (page - 1) * limit;

        const jobs = await jobModel
            .find(query)
            .skip(skip)
            .limit(Number(limit))
            .sort({ createdAt: -1 });

        const totalJobs = await jobModel.countDocuments(query);

        res.status(200).json({
            success: true,
            message: "Jobs Fetched Successfully",
            totalJobs,
            currentPage: Number(page),
            totalPages: Math.ceil(totalJobs / limit),
            data: jobs
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// UPDATE JOB
async function updateJobController(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body;

        //  Status validation
        const validStatus = ["Applied", "Interview", "Selected", "Rejected"];

        if (!validStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status value"
            });
        }

        //  Secure update (only user's job)
        const job = await jobModel.findOneAndUpdate(
            { _id: id, user: req.user.id },
            { status },
            { new: true }
        );

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Job status updated Successfully",
            data: job
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// DELETE JOB
async function deleteJobController(req, res) {
    try {
        const { id } = req.params;

        //  Secure delete
        const job = await jobModel.findOneAndDelete({
            _id: id,
            user: req.user.id
        });

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Job deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = {
    createJobController,
    getJobsController,
    updateJobController,
    deleteJobController
}