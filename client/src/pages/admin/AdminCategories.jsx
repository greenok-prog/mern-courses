import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCat,
  deleteManyPr,
  getCategoriesProducts,
} from "../../redux/api/products";
import { Link } from "react-router-dom";
import { Button, Typography, Link as UiLink, Breadcrumbs } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

export default function AdminCategories() {
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Название", width: 300 },
    { field: "inMainPage", headerName: "На главной странице", width: 300 },
    {
      field: "change",
      headerName: "Изменить",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Link to={`${params.id}/change`}>
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
          onClick={() => dispatch(deleteCat(params.id))}
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
    dispatch(getCategoriesProducts());
  }, [dispatch]);
  const { categoriesProducts } = useSelector((state) => state.products);

  if (categoriesProducts.length) {
    categoriesProducts.forEach((el) => {
      rows.push({
        _id: el._id,
        name: el.name,
        inMainPage: el.inMainPage,
      });
    });
  }

  return (
    <div className="mt-3">
      <div className="container-fluid">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/"}>Домашняя</Link>
          <Link to={"/admin"}>Админ панель</Link>
          <Typography color="text.primary">Категории</Typography>
        </Breadcrumbs>
      </div>
      <div className="d-flex justify-content-between align-items-center container-fluid mt-3">
        <h3 className="">Категории</h3>
        <div>
          <Link to={"/admin/categories/add"}>
            <Button sx={{ mr: 2 }} color="primary" variant="contained">
              Добавить категорию
            </Button>
          </Link>
          <Button
            onClick={() => dispatch(deleteManyPr(selectedItems))}
            color="error"
            variant="contained"
            disabled={!selectedItems.length}
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
