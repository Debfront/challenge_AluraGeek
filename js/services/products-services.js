

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

export const servicesProducts = {
    productList,
}