

const productList = async () => {
    const configFetch = {
        method: "GET",
    }

    try {
        const res = await fetch( 'http://localhost:3000/products', configFetch);
        return await res.json();
    } catch (err) {
        return console.error(err);
    }
};

const createProduct = (name, price, image) => {
    return  fetch( 'http://localhost:3000/products', {
        method: "POST",
        headers : {
            "Content-type": "application/json",
        },
        body : JSON.stringify({
            name, 
            price,
            image

        })
    })

    .then((res)=> res.json())
    .catch((err) => console.log(err))
};



    // Método para deletar produto
   async function deleteProduct (id) {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro ao deletar o produto');
        }
        return response.json();
    };

export const servicesProducts = {
     productList,
     createProduct,
     deleteProduct
}




  