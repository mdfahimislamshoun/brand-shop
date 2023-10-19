
import { useContext } from "react";
import { AiFillEdit, AiFillFolderAdd } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
  const products = useLoaderData([]);
const  {user} = useContext(AuthContext);
const  mail=user.email
  
  console.log(products)
  const{_id, brand_name, name, price, title, rating, image }=products;


  const handleAddCard=()=>{

const brand=brand_name;
const product_name=name;
const Product_price=price;
const product_title=title;
const Product_rating=rating;
const product_image=image;
const email=mail
const productData={brand,product_name,Product_price,product_title,
  Product_rating,product_image,email}


    fetch("http://localhost:5000/cards", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          return Swal.fire(
            "Good job!",
            "You add this product successfully!",
            "success"
          );
        }
      });
  }
  
  return (
    <div>
      <div className="container w-[95%] mx-auto">
        <div className="card card-side  bg-base-100 shadow-xl flex  justify-between items-center">
          <div>
            <figure>
              <img src={image} alt="image" className="w-72 h-52" />
            </figure>
          </div>
          <div>
            <h1 className="text-xl font-bold">Brand Name: {brand_name}</h1>
            <h2 className="text-xl font-semibold">Name: {name}</h2>
            <h3 className="text-base font-medium">Title:{title}</h3>
            <h3 className="text-base font-medium">{price}</h3>
            <p>
              {rating ? (
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="">
            <div className="btn-group btn-group-vertical space-y-4">
              <Link to={`/edit/${_id}`}>
                <button className="btn text-xl text-white">
                  <AiFillEdit></AiFillEdit>
                </button>
              </Link>
              <button onClick={handleAddCard} className="btn text-xl text-white">
                <AiFillFolderAdd></AiFillFolderAdd>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
