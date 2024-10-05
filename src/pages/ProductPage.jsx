/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function ProductPage(){

  const {product} = useContext(ProductContext)
    
    return(
      <div>
        
       {product.map((el)=>{
         return(
          <div>
          <div className="grid grid-cols-2 m-20">
            <div className="border border-black h-96 w-96 rounded-3xl shadow-xl hover:opacity-70 transition-all">
              <img src={el.image} alt="" className="h-full w-full" />
               
            </div>
            <div className="border border-black w-96 rounded-xl h-96 grid grid-rows-4 shadow-lg hover:cursor-pointer transition-colors hover:bg-slate-700 hover:text-white">
              
                <h3 className="font-bold font-topic text-center text-xl pt-4">{el.name}</h3>
                 <div className="px-7">
                  <h4 className="font-serif ml-2 font-semibold">Price:</h4>
                  <p className="ml-2 mt-1">{el.price}</p>
                  
                 </div>
                 
                <div className="px-7">
                <h5 className="font-serif ml-2 font-semibold">Discirption:</h5>
                <p className="ml-2 mt-1">{el.description}</p>
                </div>

              
          
                
                
                
            </div>
  
            
          </div>
  
            
         </div>
         )
         

       })}
        
      

      
      </div>
      
        

        
       
    )

}

export default ProductPage;