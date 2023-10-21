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
import MyCard from "./component/myCard/MyCard";
import About from "./component/delivers/About";
import AllProduct from "./component/product/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () =>
          fetch(
            "https://ten-9c1ccruaj-fahim-s-projects.vercel.app/testimonials"
          ),
      },
      {
        path: "/about",
        element: <About></About>,
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
        loader: () =>
          fetch("https://ten-9c1ccruaj-fahim-s-projects.vercel.app/products"),
      },
      {
        path:'/Product',
        element:<Private><AllProduct></AllProduct></Private>,
        loader: () =>
          fetch("https://ten-9c1ccruaj-fahim-s-projects.vercel.app/products"),
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
        loader: ({ params }) =>
          fetch(
            `https://ten-9c1ccruaj-fahim-s-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ten-9c1ccruaj-fahim-s-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/myCard",
        element: (
          <Private>
            <MyCard></MyCard>
          </Private>
        ),
        loader: () =>
          fetch("https://ten-9c1ccruaj-fahim-s-projects.vercel.app/cards"),
      },
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
