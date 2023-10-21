import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const Deliver = () => {
  const [delivers, setDelivers] = useState([]);

  useEffect(() => {
    fetch("https://ten-9c1ccruaj-fahim-s-projects.vercel.app/delivers")
      .then((res) => res.json())
      .then((data) => {
        setDelivers(data);
      });
  }, []);
  return (
    <div className="container w-[95%] justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {delivers.map((deliver) => (
        <div
          className="card w-72 "
          key={deliver._id}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <figure>
            <img src={deliver.image} alt="Shoes" className=" w-20 h-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{deliver.title}</h2>
            <p>{deliver.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deliver;
