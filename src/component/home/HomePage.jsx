import { useState } from "react";
import Banner from "./Banner";
import { useEffect } from "react";
import BrandCard from "./BrandCard";
import "./home.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper style

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useLoaderData } from "react-router-dom";
import Deliver from "../delivers/Deliver";

const HomePage = () => {
  const [brands, setBrands] = useState([]);
  const testimonials = useLoaderData([]);
  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  return (
    <div className="container w-[98%] justify-center  mx-auto">
      <Banner></Banner>
      <div className="mt-20"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <h1 className=" text-3xl text-white text-center font-bold">
          choose your favorite brand
        </h1>
      </div>
      <div
        className=" container w-[98%] justify-center
            grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  mx-auto"
      >
        {brands.map((brand) => (
          <BrandCard key={brand.brand_name} brand={brand}></BrandCard>
        ))}
      </div>
      <div className="container w-[98%] justify-center mx-auto  mt-20 relative"
      >
        <div>
          <figure>
            <img
              src="https://i.ibb.co/pWFbWfP/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-st.jpg"
              alt="image"
              className="w-full h-[500px] opacity-50"
            />
          </figure>
        </div>
        <div className=" absolute top-40 max-sm:right-4 md:right-16 lg:right-32"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
          <h3 className="text-2xl font-semibold ">HAPPY SUNDAY</h3>
          <h1 className="text-7xl font-normal">20% off</h1>
          <p className="text-2xl font-medium">all premium T-Shirt</p>
          <Link to='/product'>
          <button className="btn  bg-blue-500 hover:bg-blue-600 text-xl mt-5">Shop Now</button></Link>
        </div>
      </div>

      <div className="container w-[98%]  mt-20 justify-center mx-auto ">
        <div className="mb-20">
          <h1 className="text-2xl font-black text-center">CUSTOMER SAY</h1>
          <h2 className="text-3xl font-semibold text-center">
            Happy customer words
          </h2>
        </div>
        <div className=" container  mx-auto justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={100}
            slidesPerView={2}
            autoplay={true}
            navigation
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimon) => (
              <SwiperSlide key={testimon._id}>
                <div className="container flex flex-col items-center ">
                  <div className="container p-8 relative client-review shadow-xl rounded-xl">
                    <p>{testimon.review}</p>
                  </div>
                  <div className=" flex items-center gap-10 mt-6">
                    <div className="">
                      <figure>
                        <img
                          src={testimon.image}
                          alt="client image"
                          className="w-20 h-20 rounded-full"
                        ></img>
                      </figure>
                    </div>
                    <div>
                      <p>{testimon.name}</p>
                      <p>{testimon.occupation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mt-20">
        <Deliver></Deliver>
      </div>
      <div className="mt-20"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <footer className="footer p-10 bg-base-200 text-base-content">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className=" items-center p-4 bg-base-200  text-content">
          <p className="text-center">Copyright © 2023 - All right reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
