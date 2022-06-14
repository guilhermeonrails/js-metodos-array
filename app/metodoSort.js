let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(lirvosOrdenados)
}