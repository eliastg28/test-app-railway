const pool = require('../db');

exports.getRoutines = async (req, res) => {
  const { age } = req.params;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM routines WHERE age_group = (SELECT CASE WHEN ? < 60 THEN "Niño" WHEN ? BETWEEN 60 AND 70 THEN "Adulto" ELSE "Adulto Mayor" END)',
      [age, age]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching routines' });
  }
};
