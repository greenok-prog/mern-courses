import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CompareIcon from "@mui/icons-material/Compare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/reducers/favorite";
import { SERVER_STATIC } from "../../settings";
import { addToCart, removeFromCart } from "../../redux/reducers/cart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function Product({ id, image, name, price, discount }) {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.favorite);
  const { cart } = useSelector((state) => state.cart);
  const discountPrice = discount && price - (price / 100) * discount;

  const addCart = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };
  const removeCartHandler = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };
  const addFavHandler = (e) => {
    e.preventDefault();
    dispatch(addToFav(id));
  };
  const removeFavHandler = (e) => {
    e.preventDefault();
    dispatch(removeFromFav(id));
  };
  return (
    <div className="slider_item mt-5">
      <Link to={`/products/${id}`}>
        <div className="card-head d-flex justify-content-end">
          <div className="card-image">
            <img
              className="card-img-top"
              src={`${SERVER_STATIC}products/${image}`}
              alt="product"
            />
          </div>
          {favorite && (
            <div className="card_actions text-end">
              {favorite.includes(id) ? (
                <FavoriteBorderIcon
                  color="primary"
                  onClick={(e) => removeFavHandler(e)}
                />
              ) : (
                <FavoriteBorderIcon onClick={(e) => addFavHandler(e)} />
              )}
              <CompareIcon />
            </div>
          )}
        </div>
        <div className="card-body p-0 ">
          <p className="card-title">{name}</p>
          <div className="card_cart  mt-2 d-flex justify-content-between align-items-end">
            <div className="card_price">
              {discount ? (
                <>
                  <h4 className="old_price m-0">{price} Тг</h4>
                  <h4 className="new_price m-0">{discountPrice} Тг</h4>
                </>
              ) : (
                <h4 className="new_price m-0">{price} Тг</h4>
              )}
            </div>

            <div className="card_add">
              {!cart.filter((el) => el.id === id).length ? (
                <Button
                  variant="contained"
                  className=""
                  onClick={(e) =>
                    addCart(e, {
                      id,
                      price: discount ? discountPrice : price,
                      name,
                      image,
                      quantity: 1,
                    })
                  }
                >
                  <AddShoppingCartIcon />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className=""
                  onClick={(e) => removeCartHandler(e)}
                >
                  <RemoveShoppingCartIcon />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
