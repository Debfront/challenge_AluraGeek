import { servicesProducts } from "../services/products-services.js";


const productsContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createElement(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="img-container">
    <img src="${image}" alt="Logo da AluraGeek" height="54px">
  </div>
  
  <div class="card-container--info">
      <p>${name}</p>
      <div class="card-container--value">
          <p>${price}</p>
          <button class="delete-button" data-id="${id}">
           
          </button>
      </div>
  </div>    `;

    productsContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProduct = await servicesProducts.productList();

        listProduct.forEach(product => {
            productsContainer.appendChild(
                createElement(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )
            )
        });


    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts.createProduct(name, price, image)
    .then((res) => console.log(res))
    .catch((err)=> console.log(err))
    
    alert('Produto adicionado com sucesso');
})

render();