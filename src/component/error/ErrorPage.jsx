import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        className="mt-20 justify-center mx-auto"
        src="https://i.ibb.co/5K0vqrB/istockphot.png"
        alt=""
      />

      <h1 className="text-xl text-center font-bold mb-2">No Data Found</h1>
      <h2 className="text-xl font-semibold text-center mb-4">
        you are in wrong page
      </h2>
      <p className="text-sm text-center text-black mb-20">
        Click here to return to{" "}
        <span className="text-red-600">
          <Link to="/">Homepage</Link>
        </span>{" "}
      </p>
    </div>
  );
};

export default ErrorPage;
