export const getAllProducts = async () => {
    const res = await fetch("http://localhost:8000/api/products",{
        method:"GET",
        
        
    });
    console.log(res);
    const products = await res.json();
    console.log(products)
    return products;
    

    
}