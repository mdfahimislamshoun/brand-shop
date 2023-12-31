/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { img, brand_name} = brand;
  return (
    <div>
       <Link to={`/product/${brand_name}`}>
      <div className="card w-80 h-80 bg-base-100 shadow-xl">
        <figure >
          <img 
            src={img}
            alt="name"
            className=" w-full h-56 rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>
           
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BrandCard;
