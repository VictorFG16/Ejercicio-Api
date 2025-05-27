// Importa los módulos necesarios
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Middleware para parsear JSON en las peticiones
app.use(bodyParser.json());

// Importa y usa las rutas de usuario
const userRoute = require('./routes/user');
app.use('/usuarios', userRoute);

// Ruta principal: muestra el formulario de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Sirve archivos estáticos desde la carpeta "pages"
app.use(express.static(path.join(__dirname, 'pages')));

// Ruta para mostrar el formulario de registro
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'registro.html'));
});

// Función principal para conectar a MongoDB y arrancar el servidor
async function main() {
    try {
        await mongoose.connect('mongodb+srv://victor:12345@cluster0.b3zdmjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB');
        // Inicia el servidor en el puerto 10000
        app.listen(10000, () => {
            console.log('Servidor escuchando en puerto 10000');
        });
    } catch (err) {
        console.error('Error conectando a MongoDB:', err);
    }
}

// Ejecuta la función principal
main();