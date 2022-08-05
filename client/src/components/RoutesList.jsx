import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminCategories from "../pages/admin/AdminCategories";
import AdminCategoryAdd from "../pages/admin/AdminCategoryAdd";
import AdminCategoryChange from "../pages/admin/AdminCategoryChange";
import AdminProductChange from "../pages/admin/AdminProductChange";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminProductsAdd from "../pages/admin/AdminProductsAdd";
import AdminPanel from "../pages/AdminPanel";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Register from "../pages/Register";

function RoutesList() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} exact />
      <Route path="/register" element={<Register />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path="/cart" element={<Cart />} exact />
      <Route path="/favorite" element={<Favorite />} exact />
      <Route path="/category/:catId/products" element={<Products />} exact />

      {/* admin */}
      <Route path="/admin" element={<AdminPanel />} exact />
      <Route path="/admin/products" element={<AdminProducts />} exact />
      <Route
        path="/admin/products/:id/change"
        element={<AdminProductChange />}
        exact
      />
      <Route path="/admin/products/add" element={<AdminProductsAdd />} exact />
      <Route path="/admin/categories" element={<AdminCategories />} exact />

      <Route
        path="/admin/categories/:id/change"
        element={<AdminCategoryChange />}
        exact
      />
      <Route
        path="/admin/categories/add"
        element={<AdminCategoryAdd />}
        exact
      />

      <Route path="/products/:id" element={<ProductDetail />} exact />

      {/* 404 page */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default RoutesList;
