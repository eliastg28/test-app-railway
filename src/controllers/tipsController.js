const pool = require('../db');

exports.getHealthTips = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM health_tips');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching health tips' });
  }
};
