import { productService } from '../service/product-service.js'

const criaNovaLinha = (categoria, produtos) => {
    // nome, email, id
    const linhaNovoCliente = document.createElement('div');
    linhaNovoCliente.className = "category";

    if( produtos.length > 0 ) {
        linhaNovoCliente.innerHTML = `<div class="category_top_bar">
            <div class="category_title">${categoria}</div>
            <div class="category_more"><a class="product_link" href="all_products.html">Ver tudo &#10132;</a></div>
        </div>`;

        // <div class="category_content">
            
        const productDiv = document.createElement('div');
        productDiv.className = "category_content";
        for (const produto of produtos) {
            productDiv.innerHTML += `<div data-id="${produto.id}" class="product">
                <img class="product_image" src="${produto.url}">
                <p class="product_description">${produto.nome}</p>
                <p class="product_price">R$ ${produto.price}</p>
                <p class="product_link"><a class="product_link" href="#">Ver produto</a></p>
            </div>`;
        }
        linhaNovoCliente.appendChild(productDiv);
    }
    
    return linhaNovoCliente;
}

const tabela = document.querySelector('main');

productService.listaProdutos()
    .then(data => {
        let categories = {};

        data.forEach(elemento => {
            if( elemento.category in categories ) {
                categories[elemento.category].push(elemento);
            } else {
                categories[elemento.category] = [elemento];
            }
            
        })

        for (const category in categories) {
            const productArray = categories[category];
            tabela.appendChild(criaNovaLinha(category, productArray));
        }
    })