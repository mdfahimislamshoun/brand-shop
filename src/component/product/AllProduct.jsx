import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllProduct = () => {
  const showAll = useLoaderData([]);

  const Order=()=>{
    return Swal.fire(
      "Good job!",
      "Your order has been successful",
      "success"
    );
  }

  return (
    <div className="container w-[98%] justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mx-auto "
    >
      {showAll.map((show) => (
        <div
          key={show._id}
          className="card w-80 h-[450px] bg-base-100 shadow-xl mb-20"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" >
          <figure>
            <img
              src={show.image}
              alt="name"
              className=" w-full h-56 rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{show.brand_name}</h2>
            <h2 className="card-title">{show.name}</h2>
            <p>{show.price}</p>
            <p>
              <span>{show.rating}</span>
              <span>
                <Rating
                  style={{ maxWidth: 100 }}
                  readOnly
                  halfFillMode="svg"
                  value={
                    show.rating < 4.5 ? Math.floor(show.rating) : show.rating
                  }
                />
              </span>
            </p>
          </div>

          <button onClick={Order}
          className="btn btn-primary w-full"> Buy now</button>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
