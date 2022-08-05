import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { deleteManyPr, deletePr, getProducts } from "../../redux/api/products";
import { Link } from "react-router-dom";
import { Button, Typography, Link as UiLink, Breadcrumbs } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { removeFromFav } from "../../redux/reducers/favorite";
import { removeFromCart } from "../../redux/reducers/cart";

export default function AdminProducts() {
  const { products } = useSelector((state) => state.products);
  const { favorite } = useSelector((state) => state.favorite);
  const { cart } = useSelector((state) => state.cart);
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Название", width: 250 },
    {
      field: "image",
      headerName: "Фото",
      width: 130,
      renderCell: (params) => (
        <a
          href={`http://localhost:5000/static/products/${params.formattedValue}`}
        >
          <img
            src={`http://localhost:5000/static/products/${params.formattedValue}`}
            alt=""
          />
        </a>
      ),
    },
    {
      field: "price",
      headerName: "Цена",
      type: "number",
      width: 130,
    },
    {
      field: "discount",
      headerName: "Скидка %",
      type: "number",
      width: 100,
    },
    { field: "category", headerName: "Категория", width: 130 },
    { field: "count", headerName: "Количество", width: 100 },
    {
      field: "change",
      headerName: "Изменить",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Link to={`${params.id}/change/`}>
          <Button color="warning" variant="contained" size="small">
            <CreateIcon />
          </Button>
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Удалить",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          onClick={() => {
            dispatch(deletePr(params.id));
            if (favorite.includes(params.id)) {
              dispatch(removeFromFav(params.id));
            }
            if (cart.includes(params.id)) {
              dispatch(removeFromCart(params.id));
            }
          }}
          color="error"
          variant="contained"
          size="small"
        >
          <DeleteIcon />
        </Button>
      ),
    },
  ];
  const [selectedItems, setSelectedItems] = useState([]);

  const dispatch = useDispatch();
  let rows = [];
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (products.length) {
    products.forEach((el) => {
      rows.push({
        _id: el._id,
        name: el.name,
        image: el.image,
        price: el.price,
        discount: el?.discount,
        category: el?.category?.name,
        count: el.count,
      });
    });
  }

  return (
    <div className="mt-3 ">
      <div className="container-fluid">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/"}>Домашняя</Link>

          <Link to={"/admin"}>Админ панель</Link>

          <Typography color="text.primary">Продукты</Typography>
        </Breadcrumbs>
      </div>
      <div className="d-flex justify-content-between align-items-center container-fluid mt-3">
        <h3 className="">Продукты</h3>
        <div>
          <Button color="primary" variant="contained" size="small">
            <Link to={"add"}>Добавить</Link>
          </Button>
          <Button
            onClick={() => dispatch(deleteManyPr(selectedItems))}
            color="error"
            variant="contained"
            size="small"
            disabled={!selectedItems.length}
            className="ms-2"
          >
            Удалить выбранные
          </Button>
        </div>
      </div>
      <DataGrid
        className="mydatagrid mt-3"
        autoHeight
        scrollX
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5, 6]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(selected) => {
          setSelectedItems(selected);
        }}
      />
    </div>
  );
}
