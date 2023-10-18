// import { useState } from "react";
import EditeProduct from "./EditeProduct";
import ProductBanner from "./ProductBanner";
import { useLoaderData, useParams } from "react-router-dom";

const Product = () => {
  // const[existProduct,setExistProduct]=useState([])
  const products = useLoaderData();
  console.log(products);
  const { brand_name } = useParams();
  console.log(brand_name);
  //   const idInt = parseInt(id);
  const product = products.filter((products) => products.brand_name === brand_name);
  console.log(product)
  
  return (
    <div>
      <ProductBanner></ProductBanner>
      <div>
        {
          product.map(p=><EditeProduct key={p._id} p={p}></EditeProduct>)
        }
      </div>
    </div>
  );
};

export default Product;
