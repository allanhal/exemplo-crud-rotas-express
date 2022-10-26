const express = require('express')
const route = express.Router();

const comentario = require("./comentario")

route.get('/comentario/:produtoId', (req, res) => {
    res.send(comentario.listar(req.params.produtoId))
})
module.exports = route;