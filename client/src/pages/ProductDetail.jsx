import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProduct } from "../redux/api/products";
import { addToCart, removeFromCart } from "../redux/reducers/cart";
import { SERVER_STATIC } from "../settings";
function ProductDetail() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(params.id)).then(() => setLoading(false));
  }, [dispatch, params.id]);
  const { currentProduct } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const [type, setType] = useState(0);
  const [promo, setPromo] = useState(false);
  const discountPrice =
    currentProduct.discount &&
    currentProduct.price -
      (currentProduct.price / 100) * currentProduct.discount;

  const chars = currentProduct.chars && currentProduct.chars;

  return (
    <>
      {!loading ? (
        <>
          <section className="container mt-3">
            <h4 className="product_name">{currentProduct.name}</h4>
            <div className="product_content d-flex justify-content-between flex-wrap mt-3">
              <div className="product_content-image">
                <img
                  src={`${SERVER_STATIC}products/${currentProduct.image}`}
                  alt="produt_image"
                ></img>
              </div>
              <div className="product_content-options">
                {/* <div className="product_content-option">
                  <p>Цвет</p>
                  <div className="d-flex justify-content-start align-items-center ">
                    <div className="active py-1 px-3">Черный</div>
                    <div className="py-1 px-3">Красный</div>
                    <div className=" py-1 px-3">Белый</div>
                  </div>
                </div>
                <div className="product_content-option mt-3">
                  <p>Объем памяти</p>
                  <div className="d-flex justify-content-start align-items-center ">
                    <div className="option-active py-1 px-3">128 Gb</div>
                    <div className="active py-1 px-3">256 Gb</div>
                  </div>
                </div> */}
                <div className="characteristics mt-3">
                  <h5>Характеристики</h5>
                  <ul>
                    {chars &&
                      [...chars].splice(0, 3).map((el) => (
                        <li key={el.name}>
                          <span>{el.name}:</span> {el.value}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="characteristics mt-3">
                  {currentProduct.description && (
                    <>
                      <h5>Описание</h5>
                      <div>
                        {currentProduct.description.slice(0, 100) + "..."}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="product_content-price">
                {currentProduct.discount ? (
                  <>
                    <div className="product_content__old-price">
                      {currentProduct.price} Тг
                    </div>
                    <div className="product_content__new-price">
                      {discountPrice} Тг
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <span>Цена:</span>
                    </div>
                    <div className="product_content__new-price ">
                      {currentProduct.price} Тг
                    </div>
                  </>
                )}
                <div className="promo">
                  {!promo && (
                    <span onClick={() => setPromo(true)} className="mt-3">
                      Использовать промокод
                    </span>
                  )}
                  {promo && (
                    <TextField
                      className="w-100 mt-2 promo_input"
                      type="text"
                      label="Промокод"
                      variant="filled"
                    />
                  )}
                </div>

                {!cart.filter((el) => el.id === currentProduct._id).length ? (
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: params.id,
                          name: currentProduct.name,
                          price: currentProduct.discount
                            ? discountPrice
                            : currentProduct.price,
                          image: currentProduct.image,
                          quantity: 1,
                        })
                      )
                    }
                    className="btn btn-primary w-100 mt-5"
                  >
                    В корзину
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(removeFromCart(params.id))}
                    className="btn btn-primary w-100 mt-5"
                  >
                    Удалить из корзины
                  </button>
                )}
              </div>
            </div>
          </section>
          <div className="product_more container-fluid mt-5">
            <ul className="d-flex justify-content-start">
              <li
                onClick={() => setType(0)}
                className={type === 0 ? "active" : ""}
              >
                Описание
              </li>
              <li
                onClick={() => setType(1)}
                className={type === 1 ? "active" : ""}
              >
                Характеристики
              </li>
            </ul>
            {type === 0 ? (
              <div className="description mt-3">
                {currentProduct.description}
              </div>
            ) : (
              <div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {chars &&
                      chars.map((el) => (
                        <TableRow key={el.name}>
                          <TableCell>{el.name}</TableCell>
                          <TableCell>{el.value}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </>
      ) : (
        <Backdrop
          sx={{ color: "#0d6efd", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default ProductDetail;
