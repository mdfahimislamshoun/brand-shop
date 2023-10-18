import { useEffect, useState } from "react";
import "../home/banner.css";
import ProductSlider from "./ProductData";
const ProductBanner = () => {
    const [slider, setSlider] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (slider === 5) {
          setSlider(0);
        } else {
          setSlider(slider + 1);
        }
      }, 3000
      );
      return()=>clearTimeout(timer)
    }, [slider]);
  
    const bgImage = {
      backgroundImage: `url(${ProductSlider[slider].image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
    };
  
    const goNext = (slider) => {
      setSlider(slider);
    };
  
    return (
      <div className="Banner">
        <div className="container-style ">
          <div style={bgImage}></div>
          <div className="w-96 absolute z-10 top-48 sm:left-10  md:left-16  lg:left-20  justify-center">
            <h1 className="text-2xl text-center text-white font-semibold" >{ProductSlider[slider].title}</h1>
            <h1 className="text-xl text-white text-center font-medium">{ProductSlider[slider].description}</h1>
            <div className="carousel-bullet mt-5">
              {ProductSlider.map((Sliders, slider) => (
                <span key={slider} onClick={() => goNext(slider)}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductBanner;