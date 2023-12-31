/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Products = ({ p }) => {
  const { _id} = p;
  return (
    <div>
      <div className="card w-80 h-[450px] bg-base-100 shadow-xl mb-20"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <figure>
          <img src={p.image} alt="name" className=" w-full h-56 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{p.brand_name}</h2>
          <h2 className="card-title">{p.name}</h2>
          <p>{p.price}</p>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="btn btn-primary w-full">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
