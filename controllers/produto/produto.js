let produtos = [
    {
        "id": 1,
        "nome": "produto 1"
    },
    {
        "id": 2,
        "nome": "produto 2"
    }
]

function listar(){
    return produtos;
}
function criar(produto){
    produtos.push(produto);
    return produtos
}

function atualizar(){
    return "Atualizar produto"
}

function deletar(produto_id){
    produtos = produtos.filter((prod) => prod.id != produto_id)
    return JSON.stringify(produtos)
}

module.exports = {
    listar: listar,
    criar: criar,
    atualizar: atualizar,
    deletar: deletar
}