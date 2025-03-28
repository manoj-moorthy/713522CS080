import { getTopUsers, getTrendingPosts, getFeed } from '../models/analyticsModel';

export const fetchTopUsers = async (req, res) => {
  try {
    const users = await getTopUsers(); // Ensure this function is implemented
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching top users', error });
  }
};

export const fetchTrendingPosts = async (req, res) => {
  try {
    const posts = await getTrendingPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending posts', error });
  }
};

export const fetchFeed = async (req, res) => {
  try {
    const feed = await getFeed();
    res.status(200).json(feed);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feed', error });
  }
};