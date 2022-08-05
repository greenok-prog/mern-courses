import React from "react";
import OwlCarousel from "react-owl-carousel";
import Product from "../Product/Product";
function ProductsSlider({ products }) {
  const responseOpitons = {
    0: {
      items: 1,
      center: true,
    },
    450: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      nav: true,
      items: 5,
    },
  };
  return (
    <OwlCarousel
      margin={15}
      items={5}
      nav={true}
      dots={false}
      smartSpeed={500}
      lazyContent={true}
      lazyLoad={true}
      responsive={responseOpitons}
      className="owl-carousel owl-theme"
    >
      {products.map((product) => (
        <Product
          id={product._id}
          key={product._id}
          price={product.price}
          name={product.name}
          discount={product.discount}
          image={product.image}
        />
      ))}
    </OwlCarousel>
  );
}

export default ProductsSlider;
