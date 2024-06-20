


import { servicesProducts } from "../services/products-services.js";

const productsContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

// Função para deletar um produto
async function deletarProduto (id) {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
        try {
            await servicesProducts.deleteProduct(id);
            const productCard = document.querySelector(`[data-id='${id}']`).closest('.card');
            if (productCard) {
                productCard.remove();
            }
            alert('Produto deletado com sucesso');
        } catch (err) {
            console.error("Erro ao deletar o produto:", err);
            alert('Não foi possível deletar o produto. Tente novamente mais tarde.');
        }
    }
}

// Função para criar o elemento de produto
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
            <p>$ ${price}</p>
            <button class="delete-button" data-id="${id}">
                <img src="img/lixo.png" alt="Ícone" width= "15px">
            </button>
        </div>
    </div>`;

    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener('click', () => deletarProduto(id));

    productsContainer.appendChild(card);
    return card;
}

// Função para renderizar a lista de produtos
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
            );
        });
    } catch (error) {
        console.log(error);
    }
}

// Evento de envio do formulário para criar um novo produto
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try {
        const res = await servicesProducts.createProduct(name, price, image);
        console.log(res);
        alert('Produto adicionado com sucesso');
    } catch (err) {
        console.error(err);
        alert('Não foi possível adicionar o produto. Tente novamente mais tarde.');
    }
});

render();




