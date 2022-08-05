import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Breadcrumbs,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { setMessage } from "../../redux/reducers/products";
import { addCategory } from "../../redux/api/products";
import { Box } from "@mui/system";

function AdminCategoryAdd() {
  const dispatch = useDispatch();
  const [chars, setChars] = useState([]);
  const [charsInput, SetcharsInput] = useState("");

  const [form, setForm] = useState("");
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalInput, setModalInput] = useState("");
  const [selectedChar, setSelectedChar] = useState("");

  const deleteChar = (name) => {
    setChars(chars.filter((el) => el !== name));
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",

    p: 4,
  };
  const addToChars = (e) => {
    e.preventDefault();
    if (!chars.includes(charsInput)) {
      setChars([...chars, { name: charsInput, variants: [] }]);
      SetcharsInput("");
    } else {
      dispatch(
        setMessage({ status: "error", msg: "Характеристика уже существует" })
      );
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addCategory(form, check, chars));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal}
        onClose={() => setModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {selectedChar}
            </Typography>
            <TextField
              sx={{ p: 0, mt: 2 }}
              label="Добавьте варианты"
              fullWidth
              value={modalInput}
              onChange={(e) => setModalInput(e.target.value)}
            />
            <Button
              onClick={() => {
                setChars(
                  chars.map((el) =>
                    el.name === selectedChar
                      ? { ...el, variants: [...el.variants, modalInput] }
                      : el
                  )
                );
              }}
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
            >
              Добавить
            </Button>
            <List className="d-flex flex-wrap">
              {chars.find((el) => el.name === selectedChar) &&
                chars
                  .find((el) => el.name === selectedChar)
                  .variants.map((v) => (
                    <ListItem
                      key={v}
                      sx={{ width: "25ch" }}
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText style={{ cursor: "pointer" }} primary={v} />
                    </ListItem>
                  ))}
            </List>
          </Box>
        </Fade>
      </Modal>
      <div className="container-fluid mt-3">
        <>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={"/"}>Домашняя</Link>
            <Link to={"/admin"}>Админ панель</Link>
            <Typography color="text.primary">Категории</Typography>
          </Breadcrumbs>

          <form action="" className="mt-5">
            <TextField
              fullWidth
              label="Название"
              onChange={(e) => setForm(e.target.value)}
              value={form || ""}
            />
            <FormControlLabel
              control={
                <Checkbox value={check} onChange={() => setCheck(!check)} />
              }
              label="Отображать на главной странице"
            />
            <div className="category-chars_input mt-4">
              <h3>Список характеристик</h3>
              <List className="mt-3 category-list">
                {chars.map((el, index) => (
                  <ListItem
                    key={el.name}
                    sx={{ width: "30ch" }}
                    secondaryAction={
                      <IconButton
                        onClick={() => deleteChar(el.name)}
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      style={{ cursor: "pointer" }}
                      primary={el.name}
                      onClick={() => {
                        setModal(true);
                        setSelectedChar(el.name);
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <div className="d-flex align-items-center">
                <TextField
                  value={charsInput}
                  onChange={(e) => SetcharsInput(e.target.value)}
                  sx={{ width: "30ch" }}
                  label="Название"
                />
                <Button
                  onClick={(e) => addToChars(e)}
                  sx={{ ml: "2ch", width: "5ch", height: "5ch" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  <AddIcon />
                </Button>
              </div>
            </div>
            <Button
              onClick={(e) => submitHandler(e)}
              sx={{ width: "20ch" }}
              className="mt-3 d-block"
              variant="contained"
              color="primary"
              type="submit"
            >
              Сохранить
            </Button>
          </form>
        </>
      </div>
    </div>
  );
}

export default AdminCategoryAdd;
