import express from 'express';
const router = express.Router();

import {
  showStats,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobsController.js';

router.route('/').get(getAllJobs).post(createJob);
router.route('/stats').get(showStats);
router.route('/:id').patch(updateJob).delete(deleteJob);

export default router;
