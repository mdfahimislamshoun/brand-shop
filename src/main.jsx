import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root.jsx";
import HomePage from "./component/home/HomePage.jsx";
import ErrorPage from "./component/error/ErrorPage";
import SignIn from "./component/signIn&up/SignIn";
import SignUp from "./component/signIn&up/SignUp";
import AuthProvider from "./component/AuthProvider/AuthProvider";
import Product from "./component/product/Product";
import Private from "./component/AuthProvider/Private";
import AddProduct from "./component/product/AddProduct";
import EditProduct from "./component/product/EditeProduct";
import Details from "./component/product/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/Product/:brand_name",
        element: (
          <Private>
            <Product></Product>
          </Private>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addProduct",
        element: (
          <Private>
            <AddProduct></AddProduct>
          </Private>
        ),
      },
      {
        path: "/edit/:id",
        element: (
          <Private>
            <EditProduct></EditProduct>
          </Private>  
        ),
       loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/details/:id",
        element:<Private><Details></Details></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
