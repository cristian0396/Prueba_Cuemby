const { Router } = require("express");
const { ExplainVerbosity } = require("mongodb");
const router = new Router();
const Jugador = require('../bases/models/models');
const mongoose = require('mongoose');
const url = require('url');

router.post('/create', async (req, res) => {
    const {name, position, nation, team} = req.body;
    let jugador = {};
    jugador.name = name;
    jugador.position = position;
    jugador.nation = nation;
    jugador.team = team;
    let jugadorModel = new Jugador(jugador);
    await jugadorModel.save();
    res.json(jugadorModel);
});

router.post('/api/v1/team', async (req, res) => {
    const {Name, Page} = req.body;
    const jugadorModel = await Jugador.find();
    let result = [];
    let equipo =[];
    let count = 0
    for (var i in jugadorModel){
        const cad = jugadorModel[i].team
        if (cad.toUpperCase() == Name.toUpperCase()){
            let datos = { name : jugadorModel[i].name, position : jugadorModel[i].position, nation : jugadorModel[i].nation} 
            result.push(datos)
            count += 1
        }
    }
    equipo.push({Page : Page, totalPages : 2,Items : count, totalItems : 2*count,Players : result});
    res.json(equipo);
});

router.get('/api/v1/players', async (req, res) => {
    const queryObject = url.parse(req.url,true).query;
    const Name = queryObject.name
    const jugadorModel = await Jugador.find();
    let result = [];
    let equipo =[];
    let count = 0
    for (var i in jugadorModel){
        let cad = jugadorModel[i].name
        if (String(cad.toUpperCase()).includes(Name.toUpperCase())){
            let datos = { name : jugadorModel[i].name, position : jugadorModel[i].position, nation : jugadorModel[i].nation, team : jugadorModel[i].team} 
            result.push(datos)
            count += 1
        }
    }
    equipo.push({Page : 1, totalPages : 2,Items : count, totalItems : 2*count,Players : result});
    res.json(equipo);
});

module.exports = router;