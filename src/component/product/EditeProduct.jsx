import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const products = useLoaderData();
  console.log(products)
  const{_id, brand_name, name, price, title, rating, image }=products;

  const handleUpdateData = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand_name = form.brand.value;
    const name = form.name.value;
    const price = form.price.value;
    const title = form.title.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const UpdateData = { brand_name, name, price, title, rating, image };
    console.log(UpdateData);
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          return Swal.fire(
            "Good job!",
            "You update this product successfully!",
            "success"
          );
        }else if(data.matchedCount>0){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'This update taken Already ',
            showConfirmButton: false,
            timer: 1500
        })
    }
      });
  };
  return (
    <div className="container w-[95%] h-screen justify-center mx-auto">
      <form onSubmit={handleUpdateData }>
        <div className="flex">
          <div className="form-control  md:w-1/3 ">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              name="brand"
             defaultValue={brand_name}
              placeholder="Brand name"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>
          <div className="form-control  md:w-1/3  ml-3">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Product name"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>

          <div className="form-control md:w-1/3 ml-3 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter price"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>
        </div>
        <div className="flex">
          <div className="form-control  md:w-2/3 ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Enter product title hear"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>
          <div className="form-control  md:w-1/3 ml-3">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={rating}
              placeholder="Give a rating hear"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>
        </div>
        <div className="flex">
          <div className="form-control  md:w-full ">
            <label className="label">
              <span className="label-text">Photo URl</span>
            </label>
            <br />
            <input
              type="text"
              name="image"
              defaultValue={image}
              placeholder="Enter photo URL"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>
        </div>

        <input
          className="w-full text-[#331A15] bg-[#D2B48C] mt-8 p-4"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default EditProduct;
