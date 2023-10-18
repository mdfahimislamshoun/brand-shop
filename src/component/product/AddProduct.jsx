import Swal from "sweetalert2";

const AddProduct = () => {

  const handleProductData = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand_name = form.brand.value;
    const price = form.price.value;
    const title=form.title.value
    const image = form.image.value;
    const productData = { brand_name, price,title,image };
    console.log(productData);
    fetch("http://localhost:5000/products", {
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
  };
  return (
    <div className="container w-[95%] justify-center mx-auto">
      <form onSubmit={handleProductData}>
        <div className="flex">
          <div className="form-control  md:w-1/2 ">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Brand name"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter price"
              className="input input-bordered border border-x-fuchsia-100 w-full"
            />
          </div>
        </div>
        <div className="flex">
          <div className="form-control  md:w-full ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter product title hear"
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

export default AddProduct;
