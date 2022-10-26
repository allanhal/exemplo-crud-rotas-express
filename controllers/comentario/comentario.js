const fs = require('fs');

function listar(produtoIdParam) {
    return JSON.parse(fs.readFileSync(__dirname+'/comentario.json').toString())
    .filter(({produtoId})=>produtoId === produtoIdParam);
}
module.exports={
    listar
}