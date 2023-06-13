const listaProdutos = () => {
    return fetch(`http://localhost:3000/products`)
        .then(resposta => {

            return resposta.json()

        })
}

const filterProdutos = (filter) => {
    return fetch(`http://localhost:3000/products?nome=${filter}`)
        .then(resposta => {

            return resposta.json()

        })
}

const criaProduto = (produto) => {
    return fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
        .then(resposta => {
            return resposta.body
        })
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    })
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}

const atualizaProduto = (id, nome, email) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.json()
        })
}

export const productService = {
    listaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto,
    filterProdutos
}