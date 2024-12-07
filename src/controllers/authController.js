const bcrypt = require("bcryptjs");
const pool = require("../db"); // Asegúrate de tener tu conexión a la base de datos
const jwt = require("jsonwebtoken");

// Registro de usuario
exports.registerUser = async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    // Insertar el usuario en la base de datos con la contraseña tal cual
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password, age, gender) VALUES (?, ?, ?, ?, ?)",
      [name, email, password, age, gender]
    );

    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error("Error registering user:", error); // Log de error
    res.status(500).json({ error: "Error registering user" });
  }
};

// Login de usuario
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = users[0]; // Asegúrate de obtener el primer resultado

    if (!user) {
      return res.status(400).json({ error: "Invalid user" });
    }

    // Verificar si la contraseña es válida (sin encriptación)
    if (password.trim() !== user.password.trim()) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Si las credenciales son válidas, generamos un JWT
    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error); // Log del error
    res.status(500).json({ error: `Error logging in: ${error.message}` });
  }
};
