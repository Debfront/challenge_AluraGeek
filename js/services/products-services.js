

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

export const servicesProducts = {
    productList,
    createProduct,
}