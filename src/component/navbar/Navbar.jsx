import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => console.log("user logOut "))
      .catch((error) => console.log(error));
  };
    return (
      <div className="container  flex w-[100%] mx-auto">
      <div className=" navbar  md:flex lg:flex items-center justify-center  min-h-16 w-[100%]  bg-base-100">
        <div className="navbar-start items-center">
          <img className="text-xl h-20 " src="" alt="" />
        </div>
        <div className="navbar-end  hidden lg:flex ">
          <ul className="flex items-center ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about">AboutUs</NavLink>
            </li>
            <li>
              {
                user?"":<NavLink to="/signIn">SignIn</NavLink>
              }
            </li>
            <li>
              {
                user?"":<NavLink to="/signUp">SignUp</NavLink>
              }
            </li>
            <li>
              {user && <button onClick={handleSignOut} className="btn ">
                SignOut
              </button>}
            </li>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={user? user.photoURL:""} />
                </div>
              </label>
            </div>
          </ul>
        </div>
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 rounded-box w-24"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
              {
                user?"":<NavLink to="/signIn">SignIn</NavLink>
              }
            </li>
            <li>
              {
                user?"":<NavLink to="/signUp">SignUp</NavLink>
              }
            </li>
            <li>
              {user && <button onClick={handleSignOut} className="btn ">
                SignOut
              </button>}
            </li>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                <img src={user? user.photoURL:""} />
                </div>
              </label>
            </div>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Navbar;