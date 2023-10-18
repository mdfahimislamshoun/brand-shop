const EditeProduct = ({ p }) => {
  const { _id, brand_name, title, image } = p;
  return (
    <div>
      <div className="card w-80 h-80 bg-base-100 shadow-xl">
        <figure>
          <img src={p.image} alt="name" className=" w-full h-56 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{p.brand_name}</h2>
          <p>{p.title}</p>
        </div>

        <button className="btn btn-primary w-full">Buy Now</button>
      </div>
    </div>
  );
};

export default EditeProduct;
