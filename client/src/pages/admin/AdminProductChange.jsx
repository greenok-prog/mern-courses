import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProduct,
  getCategoriesProducts,
  getProduct,
} from "../../redux/api/products";
import { getProd, setMessage } from "../../redux/reducers/products";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { SERVER_STATIC } from "../../settings";

function AdminProductChange() {
  const dispatch = useDispatch();
  const params = useParams();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    count: 0,
  });
  const [image, setImage] = useState(null);

  const [category, setCategory] = React.useState("");
  const [chars, setChars] = useState([]);
  const [charsInput, setCharsInput] = useState({ name: "", value: "" });
  const [charsErrors, setCharsErrors] = useState({ name: false, value: false });
  useEffect(() => {
    dispatch(getProduct(params.id));
    dispatch(getCategoriesProducts());
  }, [dispatch]);
  const { categoriesProducts, currentProduct } = useSelector(
    (state) => state.products
  );
  const removeFromChars = (name) => {
    setChars(chars.filter((el) => el.name !== name));
  };
  useEffect(() => {
    if (currentProduct) {
      setCategory(currentProduct.category);
      setChars(currentProduct.chars);
      setForm({
        name: currentProduct.name,
        description: currentProduct.description,
        discount: currentProduct.discount,
        price: currentProduct.price,
        count: currentProduct.count,
      });
    }
  }, [currentProduct]);

  const addToChars = () => {
    if (!charsInput.name.length) {
      setCharsErrors({ ...charsErrors, name: true });
    } else if (!charsInput.value.length) {
      setCharsErrors({ ...charsErrors, value: true });
    } else if (chars.find((el) => el.name === charsInput.name)) {
      dispatch(
        setMessage({
          status: "error",
          msg: "Данная характеристика уже существует",
        })
      );
    } else {
      setChars([
        ...chars,
        { name: charsInput.name, value: charsInput.value, variants: [] },
      ]);
      setCharsErrors({ name: false, value: false });
      setCharsInput({ name: "", value: "" });
    }
  };

  return (
    <div className="container-fluid mt-5">
      {categoriesProducts && (
        <form action="" className="">
          <TextField
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            margin="dense"
            fullWidth
            label="Название"
          />
          <TextField
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            margin="dense"
            fullWidth
            label="Описание"
            multiline
          />
          <div className="d-flex align-items-center p-0">
            <TextField
              margin="dense"
              sx={{ width: "30ch" }}
              select
              value={category?.name || ""}
              label={category?.name || ""}
              onChange={(e) => {
                setCategory(e.target.value);
                setChars([
                  ...e.target.value.chars.map(
                    (el) => (el = { ...el, value: "" })
                  ),
                ]);
              }}
            >
              {categoriesProducts.map((option) => (
                <MenuItem key={option._id} value={option}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <Button className="add_btn" variant="contained" color="primary">
              <AddIcon />
            </Button>
          </div>
          <div>
            <TextField
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              sx={{ mr: 1, width: "30ch" }}
              type="number"
              margin="dense"
              label="Цена"
            />
            <TextField
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.value })}
              sx={{ width: "30ch" }}
              type="number"
              margin="dense"
              label="Скидка"
            />
          </div>
          <TextField
            onChange={(e) => setImage(e.target.files[0])}
            margin="dense"
            label="Фото"
            type={"file"}
            sx={{ m: 1, width: "30ch" }}
            variant="standard"
          />
          <TextField
            value={form.count}
            onChange={(e) => setForm({ ...form, count: e.target.value })}
            sx={{ width: "20ch" }}
            type="number"
            margin="dense"
            label="Количество"
            defaultValue={"Название"}
          />
          <div className="mt-3">
            <h3>Характеристики</h3>
            <Table className="m-0 p-0" sx={{ width: 700 }}>
              <TableBody className="m-0 p-0">
                {chars &&
                  chars.map((el, index) => (
                    <TableRow className="m-0 p-0" key={index}>
                      <TableCell>{el.name}</TableCell>
                      <TableCell className="m-0 p-0">
                        {el?.variants.length ? (
                          <TextField
                            margin="dense"
                            sx={{ width: "30ch" }}
                            select
                            value={el.value || ""}
                            label={el.name}
                            onChange={(e) =>
                              setChars(
                                chars.map((c) =>
                                  c.name === el.name
                                    ? (c = { ...el, value: e.target.value })
                                    : c
                                )
                              )
                            }
                          >
                            {el.variants.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                        ) : (
                          <TextField
                            onChange={(e) =>
                              setChars(
                                chars.map((char) =>
                                  char.name === el.name
                                    ? { ...char, value: e.target.value }
                                    : char
                                )
                              )
                            }
                            value={el.value}
                            label="Значение"
                            type="text"
                            sx={{ width: "30ch" }}
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => removeFromChars(el.name)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <div className="d-flex align-items-center mt-2">
              <TextField
                value={charsInput.name}
                onChange={(e) =>
                  setCharsInput({ ...charsInput, name: e.target.value })
                }
                helperText={
                  charsErrors.name
                    ? "Нужно заполнить поле"
                    : "Обязательное поле"
                }
                label="Название"
                error={charsErrors.name}
                type="text"
                sx={{ mr: 1, width: "30ch" }}
              />
              <TextField
                onChange={(e) =>
                  setCharsInput({ ...charsInput, value: e.target.value })
                }
                value={charsInput.value}
                label={"Значение"}
                error={charsErrors.value}
                helperText={
                  charsErrors.value
                    ? "Нужно заполнить поле"
                    : "Обязательное поле"
                }
                type="text"
                sx={{ width: "30ch" }}
              />
              <Button
                onClick={addToChars}
                variant="contained"
                color="primary"
                sx={{ ml: 2, height: "7ch" }}
              >
                Добавить
              </Button>
            </div>
          </div>
          <Button
            onClick={() =>
              dispatch(
                changeProduct(
                  params.id,
                  form.name,
                  form.description,
                  category._id,
                  form.price,
                  form.discount,
                  image,
                  form.count,
                  chars
                )
              )
            }
            sx={{ width: "20ch" }}
            className="mt-3 d-block"
            variant="contained"
            color="primary"
          >
            Сохранить
          </Button>
        </form>
      )}
    </div>
  );
}

export default AdminProductChange;
