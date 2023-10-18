import { useContext } from "react";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userSignIn, signInWithGoogle,signInWithGithub } = useContext(AuthContext);
  const handelSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    console.log(email, password);
    if(password.length <6){
    return  toast.error(" password should be 8 character or longer", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }else if(!/[A-Z]/.test(password)){
      return  toast.error(" password should have an uppercase later and 8 character or longer", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",});
    }

    userSignIn(email, password)
      .then((result) => {
        console.log(result.user)
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        if (error) {
          return toast.error("wrong email or password", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  const handelWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handelWithGithub=()=>{
    signInWithGithub()
    .then((result) => {
      navigate(location?.state ? location.state : "/");
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div className="container  w-[95%] justify-center mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl justify-center  bg-red-50">
            <div className="card-body">
              <form onSubmit={handelSignIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
              </form>
              <h2 className="text-center">Or</h2>
              <div className="flex gap-2 items-center justify-center">
                <button onClick={handelWithGoogle}>
                  {" "}
                  <AiFillGoogleCircle className="text-3xl text-red-400">
                    google
                  </AiFillGoogleCircle>
                </button>
                <button onClick={handelWithGithub}><AiFillGithub className="text-3xl text-red-400"></AiFillGithub></button>
              </div>
              <p className="text-center">
                New here?please {""}
                <Link to="/signUp" className=" text-rose-400 font-bold">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
