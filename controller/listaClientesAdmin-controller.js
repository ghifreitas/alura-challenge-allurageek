import { productService } from '../service/product-service.js'

const criaNovaLinha = (produto) => {
    // nome, email, id
    
        return `<div data-id="${produto.id}" class="product">
            <img class="product_image" src="${produto.url}">
            <p class="product_description">${produto.nome}</p>
            <p class="product_price">R$ ${produto.price}</p>
            <p class="product_link"><a class="product_link" href="#">Ver produto</a></p>
            <p class="product_link"><a class="product_link delete-button" data-id="${produto.id}" href="#">Excluir produto</a></p>
        </div>`;
}

const tabela = document.querySelector('main');

const pegaURL = new URL( window.location )
const nome = pegaURL.searchParams.get('nome');
let arg = nome;

const method = nome ? "filterProdutos" : "listaProdutos";

productService[method](arg)
    .then(data => {

    const productDiv = document.createElement('div');
    productDiv.className = "category_content";
    productDiv.innerHTML = "";
        data.forEach(elemento => {

            productDiv.innerHTML += criaNovaLinha(elemento);
        });

        tabela.appendChild(productDiv);

        const deleteButtons = document.querySelectorAll(".delete-button");
        for (const button of deleteButtons) {
            button.onclick = (e) => {
                productService.removeProduto(e.target.dataset.id);
                location.reload();
            };
        }    

    });