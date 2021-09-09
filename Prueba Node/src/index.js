const express = require('express');
const connectDB = require('./conexion/conn');
const app = express();

const port = process.env.port || 3000;

connectDB();
const players = require('./routes/jugadores');
app.use(express.json({extended: false}));
app.use('/jugadores',players);

app.listen(port, () => console.log("Escuchando el puerto:" + port));



