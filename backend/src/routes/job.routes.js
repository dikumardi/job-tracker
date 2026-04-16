const express = require('express');
const jobController = require('../controllers/job.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

// Protect all job routes
// Purpose: Ensure only logged-in users can access jobs
router.use(authMiddleware.protect)

// CRUD routes
router.post('/create',jobController.createJobController)
router.get('/gets', jobController.getJobsController)
router.put('/update/:id', jobController.updateJobController)
router.delete('/delete/:id',jobController.deleteJobController)



module.exports = router;