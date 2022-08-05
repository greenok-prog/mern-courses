import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import {
  Backdrop,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import Product from "../components/Product/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/api/products";
import { useMemo } from "react";

function Products() {
  const dispatch = useDispatch();
  const { catId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentCategory } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getCategory(catId)).then((res) => {
      setProducts(res.products);
      setLoading(false);
    });
  }, [dispatch, catId]);

  const [price, setPrice] = useState([0, 10000]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedVars, setSelectedVars] = useState([]);
  const variants = [];

  products.map((pr) =>
    pr.chars.map((c) => [...c.variants].map((e) => variants.push(e)))
  );

  console.log(variants);
  const filteredProducts = useMemo(() => {
    return products.filter(
      (el) => el.price >= price[0] && el.price <= price[1]
    );
  }, [price, products]);

  useEffect(() => {
    setPrice([0, Math.max(...products.map((e) => e.price))]);
    setMaxPrice(Math.max(...products.map((e) => e.price)));
  }, [products]);
  const updateRange = (e, data) => {
    setPrice(data);
  };

  return (
    <>
      {!loading ? (
        <section className="products_filter container-fluid mt-5">
          <h3 className="title">{currentCategory.name}</h3>
          <div className="products_filter__cols">
            <div className="products_filter-items">
              <div className="product_filter-list">
                {filteredProducts.map((product) => (
                  <Product
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    image={product.image}
                    id={product._id}
                  />
                ))}
              </div>
            </div>
            <Accordion
              defaultActiveKey="0"
              className="products_filter-filter"
              id="accordionExample"
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Цена</Accordion.Header>
                <Accordion.Body>
                  <Slider
                    value={price}
                    min={0}
                    max={maxPrice}
                    valueLabelDisplay="auto"
                    defaultValue={0}
                    onChange={updateRange}
                  />
                </Accordion.Body>
              </Accordion.Item>
              {currentCategory.chars.map((char, index) =>
                char.variants.length ? (
                  <Accordion.Item eventKey={index + 1}>
                    <Accordion.Header>{char.name}</Accordion.Header>
                    <Accordion.Body>
                      {char.variants.map((v) => (
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  setSelectedVars(
                                    selectedVars.includes(v)
                                      ? selectedVars.filter((el) => el !== v)
                                      : [...selectedVars, v]
                                  )
                                }
                              />
                            }
                            label={v}
                          />
                        </FormGroup>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ) : (
                  <div></div>
                )
              )}
            </Accordion>
          </div>
        </section>
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

export default Products;
