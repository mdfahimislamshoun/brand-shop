/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// eslint-disable-next-line react/prop-types
const Cards = ({ myCard, existCard, setExistCard }) => {
  const {
    brand,
    _id,
    product_name,
    Product_price,
    product_title,
    Product_rating,
    product_image,
    email,
  } = myCard;
  const removeCard = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://ten-9c1ccruaj-fahim-s-projects.vercel.app/cards/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your coffee has been deleted.",
                  "success"
                );
                const remaining = existCard.filter((card) => card._id !== _id);
                setExistCard(remaining);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div >
      <div className="card w-96 h-[500px] bg-base-100 shadow-xl mt-20 mb-20">
        <figure className="">
          <img
            src={product_image}
            alt="image"
            className="rounded-xl w-full h-60"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand}</h2>
          <h3>{product_name}</h3>
          <p>{product_title}</p>
          <p>{Product_price}</p>
          <p>
            <span>{Product_rating}</span>
            <span>
              <Rating
                style={{ maxWidth: 100 }}
                readOnly
                halfFillMode="svg"
                value={Product_rating < 4.5 ? Math.floor(Product_rating) : Product_rating}
              />
            </span>
          </p>
        </div>
        <button onClick={() => removeCard(_id)} className="btn btn-primary">
          Remove Card
        </button>
      </div>
    </div>
  );
};

export default Cards;
