const fs = require('fs');

function listar(produtoIdParam) {
    return JSON.parse(fs.readFileSync(__dirname+'/comentario.json').toString())
    .filter(({produtoId})=>produtoId === produtoIdParam);
}

function listarAutor(produtoIdParam,autorParam) {
    // console.log(produtoIdParam);
    let comentariosFiltrados = listar(produtoIdParam);
    // console.log(comentariosFiltrados);
    return listar(produtoIdParam).filter(({nomeDoAutor})=>{
        // console.log(nomeDoAutor);
        return autorParam === nomeDoAutor})
}
module.exports={
    listar,
    listarAutor
}