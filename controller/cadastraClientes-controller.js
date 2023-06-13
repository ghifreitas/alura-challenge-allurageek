import { productService } from '../service/product-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento)=> { 
  evento.preventDefault();
  const prod = {
    "url": document.querySelector("#url").value,
    "nome": document.querySelector("#nome").value,
    "price": document.querySelector("#preco").value,
    "description": document.querySelector("#mensagem").value,
    "category": "Diversos"
  };

  productService.criaProduto(prod)
    .then(()=> {
      window.location.href = './index.html'
    }
  )
})