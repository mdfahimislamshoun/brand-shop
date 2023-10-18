import { useState } from "react";
import Banner from "./Banner";
import { useEffect } from "react";
import BrandCard from "./BrandCard";

const HomePage = () => {
    const[brands,setBrands]=useState([]);
   console.log(brands)
    useEffect(()=>{
fetch('brand.json')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    setBrands(data)
})
    },[])
    return (
        <div className="container w-[100%] justify-center  mx-auto"> 
           <Banner></Banner>
           <div className="mt-20">
            <h1 className=" text-3xl text-white text-center font-bold">choose your favorite brand</h1>
           </div>
           <div className=" container w-[95%] justify-center
            grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  mx-auto">
            {
                brands.map(brand=><BrandCard key={brand.brand_name} brand={brand}></BrandCard>)
            }
           </div>
        </div>
    );
};

export default HomePage;