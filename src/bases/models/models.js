const mongoose = require('mongoose');

const jugador =  new mongoose.Schema({
    name:{
        type:String
    },
    position:{
        type:String
    },
    nation:{
        type:String
    },
    team:{
        type:String
    }
});

module.exports = Jugador = mongoose.model('jugador', jugador);
