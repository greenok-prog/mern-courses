import React from "react";
import OwlCarousel from "react-owl-carousel";
function StocksSlider() {
  const responseOpitons = {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
      autoplay: true,
    },
    1000: {
      items: 3,
      nav: true,
      autoplay: true,
    },
  };
  return (
    <OwlCarousel
      margin={15}
      loop
      items={5}
      dots={false}
      smartSpeed={500}
      nav={true}
      touchDrag={true}
      mouseDrag={true}
      lazyLoad={true}
      responsive={responseOpitons}
      className="owl-carousel owl-theme mt-3"
    >
      <div className="">
        <img src="./images/stocks/1.jpg" className="w-100" alt="..." />
      </div>
      <div className="">
        <img src="./images/stocks/2.jpg" className="w-100" alt="..." />
      </div>
      <div className="">
        <img src="./images/stocks/3.jpg" className="w-100" alt="..." />
      </div>
    </OwlCarousel>
  );
}

export default StocksSlider;
