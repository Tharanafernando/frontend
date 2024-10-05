/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Textinput({placeholder,label,name,onChange}){
    return(
        <div>
             {/* <label className="text-lg">First name:</label><br />
             <input type="text" id="" placeholder="Enter your name" className="border border-black focus:outline-sky-500 rounded-md text-sm pl-3"/> */}

             <label htmlFor={name} >{label}</label><br/>
             <input type="text" onChange={onChange} placeholder={placeholder} id={name} name={name} required className="border border-black focus:outline-sky-500 rounded-md text-sm pl-3 h-8" />
        </div>
       
    )

}
export default Textinput