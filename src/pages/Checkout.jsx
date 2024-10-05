/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import Textinput from "../components/Textinput"
import { CartContext } from "../Context/Cartcontext";
import { createOrder } from "../services/api/orders";
function Checkout(){

    const [formData,setFormData] = useState({
        fname:"",
        lname:"",
        line1:"",
        line2:"",
        city:"",
        number:""
    })
    const {cart} = useContext(CartContext)
    const handleSubmit = async(e) =>{
        e.preventDefalult();
        try {
          await createOrder({
            userId: "123",
            orderProducts: cart.map((el) => ({
              productId: el._id,
              quantity: el.count,
            })),        
          });
        } catch (error) {}
      };
    


    
    const handlecheck = (e) =>{

       console.log({...formData,[e.target.name]:[e.target.value]})
        
    }
    return(
        <div>
            <section className="grid grid-cols-2 gap-1">
                <form className="border border-black m-20 rounded-lg" onSubmit={handleSubmit}>
                  <h1 className="text-2xl p-8 text-center font-bold">Shiping Information</h1>
                  
                    <div className="grid grid-cols-2 p-8">
                        <Textinput onChange={handlecheck} name={"John"} placeholder={"John"} label={"Enter first name"} required={true}/>
                        <Textinput onChange={handlecheck} name={"Doe"} placeholder={"Doe"} label={"Enter last name"} required={true}/>
                        <Textinput onChange={handlecheck} name={"address1"} placeholder={"123 main street"} label={"Address Line 1"} required={true}/>
                        <Textinput onChange={handlecheck} name={"address2"} placeholder={"WestSide"} label={"Address Line 2"} required={true}/>
                        <Textinput onChange={handlecheck} name={"City"} placeholder={"NewYork"} label={"City"} required={true}/>
                        <Textinput onChange={handlecheck} name={"Phone number"} placeholder={"0723446454"} label={"Phone number"} required={true}/>
                    </div>

                    <button type="submit" className="bg-slate-300 border border-black text-center my-8 mx-40 px-8 text-lg hover:transition-all hover:bg-black hover:text-white font-mono font-bold">Checkout</button>
                </form>

                <div className="col-span-1 border-2 border-gray-500 rounded-lg p-2">
                      <h2 className="text-2xl font-semibold">Order Summary</h2>
                      <div className="flex flex-col gap-y-4 mt-4">
                      {cart.map((el) => {
                           return (
                              <div className="grid grid-cols-3 border p-2 rounded-xl">
                                   <div className="col-span-1 bg-[#f4f8f9] rounded-lg">
                                       <img src={el.image} alt="" className="w-full h-full object-cover rounded-lg"/>
                                   </div>
                                   <div className="col-span-2 px-4">
                                          <h3 className="text-lg font-semibold">{el.name}</h3>
                                          <p className="text-sm">{el.description}</p>
                                            <span className="block text-lg font-semibold mt-2">
                                                $ {el.price}
                                            </span>
                                         <p className="mt-1 text-sm">Amount: {el.count}</p>
                                    </div>
                                </div>
                             );
                            })}
                        </div>
                        <div>
                       <span className="block mt-4 font-semibold text-xl">
                           Total: $
                            {cart.reduce(
                             (acc, el) => acc + el.count * parseFloat(el.price),
                                0
                            )}
                       </span>
                    </div>
                    </div>
                   
             
        </section>
           
        </div>
    )
}

export default Checkout