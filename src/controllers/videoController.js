const pool = require('../db');

exports.getVideos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM videos');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching videos' });
  }
};
