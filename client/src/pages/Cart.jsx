import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import { getProducts } from "../redux/api/products";
import { setCart, setCartPrice } from "../redux/reducers/cart";

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartPrice());
  }, [dispatch]);
  const { cart, cartCount, cartPrice } = useSelector((state) => state.cart);

  return (
    <section className="container-fluid mt-5 cart_section">
      <div className="cart mt-3">
        <div className="cart_items">
          {cart.length ? (
            cart.map((el) => (
              <CartItem
                key={el.id}
                price={el.price}
                id={el.id}
                name={el.name}
                image={el.image}
                quantity={el.quantity}
              />
            ))
          ) : (
            <h3>В корзине нет товаров</h3>
          )}
        </div>
        <div className="cart_total">
          <div className="cart_total-price">
            <h4>В корзине</h4>
            <span>Товаров: {cartCount}</span>
            <h3>{cartPrice.toFixed(2)} Тг</h3>
          </div>
          <button className="btn btn-primary w-100">Оформить заказ</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
