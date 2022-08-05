import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  removeFromCart,
  removeQuantity,
  setCartPrice,
} from "../../redux/reducers/cart";
import { addToFav, removeFromFav } from "../../redux/reducers/favorite";
import { SERVER_STATIC } from "../../settings";

function CartItem({ image, id, name, price, quantity }) {
  const { favorite } = useSelector((state) => state.favorite);

  let fullPrice = Number(quantity * price);

  const dispatch = useDispatch();

  return (
    <div className="cart_item">
      <div className="cart_item-info">
        <div className="cart_item-image">
          <img src={`${SERVER_STATIC}products/${image}`} alt="" />
        </div>
        <div className="cart_item-body">
          <h4 className="cart_item-title">{name}</h4>
          <div className="cart_item-actions">
            {favorite.includes(id) ? (
              <span onClick={() => dispatch(removeFromFav(id))}>
                Удалить из избранного
              </span>
            ) : (
              <span onClick={() => dispatch(addToFav(id))}>
                Добавить в избранное
              </span>
            )}

            <span
              onClick={() => {
                dispatch(removeFromCart(id));
                dispatch(setCartPrice());
              }}
            >
              Удалить
            </span>
          </div>
        </div>
      </div>
      <div className="cart_item-price">
        <h4>{fullPrice.toFixed(2)} Тг</h4>
        <div className="cart_item-count">
          <Button
            onClick={() => {
              dispatch(removeQuantity(id));
            }}
            disabled={quantity === 1}
            className="dec"
            color="primary"
            variant="contained"
          >
            —
          </Button>
          <span className="quantity">{quantity}</span>
          <Button
            // disabled={quantity === el.count}
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch(addQuantity(id));
            }}
            className="inc"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
