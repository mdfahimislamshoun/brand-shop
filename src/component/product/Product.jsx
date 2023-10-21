
import ProductBanner from "./ProductBanner";
import { useLoaderData, useParams } from "react-router-dom";
import Products from "./Products";

const Product = () => {
  const products = useLoaderData([]);
  const { brand_name } = useParams();
  const product = products.filter((products) => products.brand_name === brand_name);
  
  return (
    <div >
      <ProductBanner></ProductBanner>
      <div className=" container w-[95%] justify-center
            grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto mt-20 ">
        {
          product.map(p=><Products key={p._id} p={p}></Products>)
        }
      </div>
    </div>
  );
};

export default Product;
