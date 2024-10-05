export const getAllCategoty = async()=>{
    const res = await fetch("http://localhost:8000/api/categories",{
        method:"GET",
    })

    console.log(res);
    const category = await res.json();
    console.log(category);
    return(category);
}