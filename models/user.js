const mongoose = require('mongoose');

// Definición del esquema para los usuarios
const userSchema = mongoose.Schema({
    // Campo para el nombre de usuario, requerido y único
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    // Campo para la contraseña, requerido 
    password: {
        type: String,
        required: true
    }
});

// Exporta el modelo 'User' basado en el esquema definido
module.exports = mongoose.model('User', userSchema);