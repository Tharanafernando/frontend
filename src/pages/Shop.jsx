/* eslint-disable no-unused-vars */
import Navigation from "../components/Navigation";
import { getAllProducts } from "../services/api/products";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Tab from "../components/Tab";
import { getAllCategoty } from "../services/api/categoires";
function Shop(){

  const [products,setProducts] = useState([]);
  const [sortedProducts,setSortedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [category, setCategory] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    getAllProducts()
    .then((data)=>{
      setIsLoading(false);
      setProducts(data);
    })
    .catch(
      setIsLoading(true)
    );
    getAllCategoty()
    .then((data)=>{
      setCategory(data);
    })
    .catch();

  },[])

  function lowToHigh(){
    let sortproduct = [...products.sort((b,a)=> b.price-a.price)] 
    setSortedProducts(sortproduct);

    // prove = true;
    // arr.sort((b,a)=> b.price-a.price)
    // display()
  }


  function highToLow(){
    let sortproduct = [...products.sort((b,a)=> a.price-b.price)] 
    setSortedProducts(sortproduct);
   
    // prove = false
    // arr.sort((b,a)=> a.price-b.price)
    // display()
    
    

  }

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((el) => el.categoryId === selectedCategory);

  const handleTabClick = (id) => {
    setSelectedCategory(id);
  };


  if (isLoading) {
    return (
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold">Our Top Products</h1>
        <div className="border mt-4"></div>

        <div className="py-8">
          <div className="flex items-center gap-x-4">
            {category.map((el) => {
              return (
                <Tab
                  selectedCategory={selectedCategory}
                  key={el._id}
                  category={el}
                  onClick={handleTabClick}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-4 gap-6 mt-4">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  

  return (
    <div>
       <Navigation/>
       <div className="ml-12 mt-20 flex">
         Sort By:
        <div className="flex pl-20">
            <button className="bg-slate-50 px-8 border border-black rounded-full hover:transition-colors hover:bg-slate-500 hover:text-white" onClick={lowToHigh}>Price Low to High</button>
            <button className="bg-slate-50 ml-12 px-8 border border-black rounded-full hover:transition-colors hover:bg-slate-500 hover:text-white" onClick={highToLow}>Price High to Low</button>
          </div>

               
        </div>
    <section className="py-8 px-16">
      <h1 className="text-4xl font-semibold">Our Top Products</h1>
      <div className="border mt-4"></div>

      <div className="py-8">
        <div className="flex items-center gap-x-4">
          {category.concat([{_id:"ALL",name:"ALL"}]).map((el) => {
            return (
              <Tab
                selectedCategory={selectedCategory}
                key={el._id}
                category={el}
                onClick={handleTabClick}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-6 mt-4">
          {filteredProducts.map((el) => {
            
            return (
              <ProductCard 
                key={el.id}
                image= {el.image}
                name={el.name}
                price={el.price}
                description={el.description}
              />
            );
            
          })}
        </div>
      </div>
    </section>
    </div>
  );
  

  
}

export default Shop;


