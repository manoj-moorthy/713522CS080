import express from 'express';
import { fetchTopUsers, fetchTrendingPosts, fetchFeed } from '../controllers/analyticsController.js';
import { calculateAverage } from '../controllers/averageController.js';

const router = express.Router();

router.get('/top-users', fetchTopUsers);
router.get('/trending-posts', fetchTrendingPosts);
router.get('/feed', fetchFeed);
router.get('/numbers/:numberId', calculateAverage);

export default router;