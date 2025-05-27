const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registro 

router.post('/registro', async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const user = new User({ usuario, password });
        await user.save();
        res.json({ mensaje: 'Usuario registrado correctamente' });
    } catch (err) {
        res.status(400).json({ mensaje: 'Error al registrar usuario', error: err });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const user = await User.findOne({ usuario });
        if (!user) {
            return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
        }
        if (user.password !== password) {
            return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
        }
        res.json({ mensaje: 'Login exitoso' });
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al iniciar sesión', error: err });
    }
       
});

module.exports = router;