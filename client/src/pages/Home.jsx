import { Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SkeletonSlider from "../components/Skeleton/SkeletonSlider";
import ProductsSlider from "../components/Slider/ProductsSlider";
import StocksSlider from "../components/Slider/StocksSlider";
import { getCategoriesProducts } from "../redux/api/products";
import { SERVER_STATIC } from "../settings";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { categoriesProducts } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getCategoriesProducts()).then(() => setLoading(false));
  }, [dispatch]);

  const activeProducts =
    categoriesProducts && categoriesProducts.filter((el) => el.inMainPage);
  return (
    <div className="main wrap container-fluid">
      <section className="categories">
        <div className="">
          <div className="d-flex category_other d-flex justify-content-center">
            <div className="row d-flex justify-content-evenly category">
              <Link className="" to={"/"}>
                <img
                  src="./images/product-category/Component_5-5-min.jpg"
                  alt=""
                />
              </Link>
              <Link className="" to={"/"}>
                <img src="./images/product-category/2.jpg" alt="" />
              </Link>
              <Link className="" to={"/"}>
                <img
                  src="./images/product-category/Component_5-2-min_a3479b068fde77f382b45c3f7b419e62.jpg"
                  alt=""
                />
              </Link>
              <Link className="" to={"/"}>
                <img
                  src="./images/product-category/Component_5-6-min_91fb6e58be8236a94503b5bf747c1db8.jpg"
                  alt=""
                />
              </Link>
              <Link className="" to={"/"}>
                <img
                  src="./images/product-category/Component_5-4-min_4646b7946c16baf088d50f67227c015b.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="product_list mt-5">
        {!loading ? (
          <>
            {activeProducts[0].products.length ? (
              <>
                <Link to={`/category/${activeProducts[0]?._id}/products`}>
                  <h4 className="section_title">{activeProducts[0]?.name}</h4>
                </Link>
                <ProductsSlider products={activeProducts[0]?.products} />
              </>
            ) : (
              <div></div>
            )}
          </>
        ) : (
          <SkeletonSlider />
        )}
      </section>
      <div className="wrap mt-5">
        <section className="products">
          <div className="products_category row align-items-start d-flex justify-content-evenly">
            {!loading ? (
              <>
                {activeProducts[2] && activeProducts[2].products.length ? (
                  <>
                    <div className="category-item col-4">
                      <h4 className="category_name">
                        {activeProducts[2].name}
                      </h4>
                      <div className="category_products">
                        {activeProducts[2].products.map((el) => (
                          <Link
                            to={`/products/${el._id}`}
                            className="product_item d-flex justify-content-start align-items-start"
                          >
                            <div className="product_image">
                              <img
                                className=""
                                src={`${SERVER_STATIC}products/${el.image}`}
                                alt=""
                              />
                            </div>
                            <div className="product_body d-flex flex-column justify-content-between">
                              <p className="product-title">{el.name}</p>
                              <div className="mt-2 d-flex justify-content-between align-items-end">
                                {el.discount ? (
                                  <>
                                    <h4 className="old_price m-0">
                                      {el.price} Тг
                                    </h4>
                                    <h4 className="new_price m-0">
                                      {el.discountPrice} Тг
                                    </h4>
                                  </>
                                ) : (
                                  <h4 className="new_price m-0">
                                    {el.price} Тг
                                  </h4>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div></div>
                )}
                {activeProducts[3] && activeProducts[3].products.length ? (
                  <>
                    <div className="category-item col-4">
                      <h4 className="category_name">
                        {activeProducts[3].name}
                      </h4>
                      <div className="category_products">
                        {activeProducts[3].products.map((el) => (
                          <Link
                            to={`/products/${el._id}`}
                            className="product_item d-flex justify-content-start align-items-start"
                          >
                            <div className="product_image">
                              <img
                                className=""
                                src={`${SERVER_STATIC}products/${el.image}`}
                                alt=""
                              />
                            </div>
                            <div className="product_body d-flex flex-column justify-content-between">
                              <p className="product-title">{el.name}</p>
                              <div className="mt-2 d-flex justify-content-between align-items-end">
                                {el.discount ? (
                                  <>
                                    <h4 className="old_price m-0">
                                      {el.price} Тг
                                    </h4>
                                    <h4 className="new_price m-0">
                                      {el.discountPrice} Тг
                                    </h4>
                                  </>
                                ) : (
                                  <h4 className="new_price m-0">
                                    {el.price} Тг
                                  </h4>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div></div>
                )}
              </>
            ) : (
              <SkeletonSlider />
            )}
          </div>
        </section>
        <section className="stocks mt-3">
          <StocksSlider />
        </section>
        <section className="product_list mt-3">
          {!loading ? (
            <>
              {activeProducts[1] && activeProducts[1].products.length ? (
                <>
                  <Link to={`/category/${activeProducts[1]?._id}/products`}>
                    <h4 className="section_title">{activeProducts[1]?.name}</h4>
                  </Link>
                  <ProductsSlider products={activeProducts[1]?.products} />
                </>
              ) : (
                <div></div>
              )}
            </>
          ) : (
            <SkeletonSlider />
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;
