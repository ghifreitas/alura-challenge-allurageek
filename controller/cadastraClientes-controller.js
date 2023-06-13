import { productService } from '../service/product-service.js'

const formulario = document.querySelector('[data-form]')

const pegaURL = new URL( window.location )
const id = pegaURL.searchParams.get("id");

document.querySelector("#add").textContent = "Atualizar";

if( id ) {
  productService.detalhaProduto(id)
  .then((data)=> {
    document.querySelector("#url").value = data.url;
    document.querySelector("#nome").value = data.nome;
    document.querySelector("#preco").value = data.price;
    document.querySelector("#mensagem").value = data.description;
    document.querySelector("#categoria").value = data.category;
  }); 
}

formulario.addEventListener('submit', (evento)=> { 
  evento.preventDefault();
  const prod = {
    "url": document.querySelector("#url").value,
    "nome": document.querySelector("#nome").value,
    "price": document.querySelector("#preco").value,
    "description": document.querySelector("#mensagem").value,
    "category": document.querySelector("#categoria").value
  };

  let args = [prod];

  
  let method = "criaProduto";

  if( id ) {
    args = [id, prod];
    method = "atualizaProduto";
  }



  productService[method](...args)
    .then(()=> {
      window.location.href = './index.html'
    }
  )
})