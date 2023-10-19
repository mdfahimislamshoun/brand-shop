import React from "react";

const Cards = ({ myCard }) => {
  const { name, brand_name, title, price, rating,image } = myCard;
  return (
    <div>
      <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={image}
            alt="image"
            className="rounded-xl w-full h-60"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>
          <h3>{name}</h3>
          <p>{title}</p>
          <p>{price}</p>
          <p>{rating?<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>:''}</p>
         
        </div>
        <button className="btn btn-primary">Remove Card</button>
      </div>
    </div>
  );
};

export default Cards;
