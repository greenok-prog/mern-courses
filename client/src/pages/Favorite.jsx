import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product/Product";
import { getProducts } from "../redux/api/products";
import { setFav } from "../redux/reducers/favorite";

function Favorite() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getProducts()).then(() => setLoading(false));
  }, []);
  const { products } = useSelector((state) => state.products);
  const { favorite } = useSelector((state) => state.favorite);
  const favItems = products.filter((product) => favorite.includes(product._id));
  return (
    <section className="favorite mt-3">
      <h3 className="title container-fluid mt-3">Избранное</h3>
      {!loading ? (
        <div className="favorite_list container-fluid">
          {favItems &&
            favItems.map((product) => (
              <Product
                id={product._id}
                key={product._id}
                price={product.price}
                name={product.name}
                discount={product.discount}
                image={product.image}
              />
            ))}
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#0d6efd", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </section>
  );
}

export default Favorite;
