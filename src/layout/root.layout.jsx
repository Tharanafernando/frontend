/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { CartContext } from "../Context/Cartcontext";
import { ProductContext } from "../Context/ProductContext";


//<ProductPage name={props.name} image={props.image} _id={props._id} discription={props.discription}/>}
function RootLayout(){
    const [cart,setCart] = useState([]);
    const [products,setProducts] = useState([]);

   
    // const updateProduct = (product)=>{
    //     if (products.find((el)=>el._id === product._id)){
    //        setProducts
    //     }
    // }


    const updateProduct = (product)=>{
       if(!products.find((el)=>el._id === product._id)){
       
        setProducts([...products,{...product}])
        return;

       }
       setProducts(products.map((el) => el._id === product._id ? { ...el, ...product } : el));
    }


  
    const updateCart = (product) => {
        if (cart.find((el)=>product._id === el._id)) {
            setCart(cart.map((el)=>el._id === product._id ? {...el,count:el.count+1} : el));
            return ;
            

        }
        setCart([...cart,{...product,count:1}])
        return ;
    }

    

   
    return(
        <div>
            <CartContext.Provider value={{cart:cart,updateCart:updateCart}}>
                <ProductContext.Provider value={{product:products,updateProduct:updateProduct}}>
                    <Outlet/>
                </ProductContext.Provider>     
            </CartContext.Provider>
            

          

            

        </div>
        
           
            
    )


}

export default RootLayout;