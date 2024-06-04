import {servicesProducts} from "../services/products-services.js";


const productsContainer = document.querySelector("[data-product]");

function createElement(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="img-container">

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

render();