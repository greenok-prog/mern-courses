import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <div className="container-fluid">
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Название таблицы</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link to={"products"}>Продукты</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link to={"categories"}>Категории</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link to={"users"}>Пользователи</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link to={"orders"}>Заказы</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminPanel;
