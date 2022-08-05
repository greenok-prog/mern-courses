import React from "react";
import { Link } from "react-router-dom";

// material icons
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareIcon from "@mui/icons-material/Compare";
import PhoneIcon from "@mui/icons-material/Phone";

// material components
import { Badge, Button } from "@mui/material";
import { useSelector } from "react-redux";

function Navbar() {
  const { favoriteCount } = useSelector((state) => state.favorite);
  const { cartCount } = useSelector((state) => state.cart);

  return (
    <>
      <div className="pre_header py-2">
        <div className="pre_header-inner container-fluid d-flex justify-content-end align-items-center">
          <ul className="pre_header__info d-flex justify-content-start align-items-center mx-5">
            <li className="mx-2">
              <Link to={"/"}>Доставка и оплата</Link>
            </li>
            <li className="mx-2">
              <Link to={"/"}>Пункты выдачи</Link>
            </li>
            <li className="mx-2">
              <Link to={"/"}>Поддержка</Link>
            </li>
          </ul>
          <Link
            to={"/"}
            className="pre_header__phone d-flex align-items-center"
          >
            <PhoneIcon />
            +7(777) 621-54-28
          </Link>
        </div>
      </div>
      <header className="py-3">
        <div className="header_inner container-fluid">
          <div className="logo_section d-flex align-items-center">
            <Link to={"/"} className="logo">
              <h1 className="text-primary">ItShop</h1>
            </Link>

            <Button variant="contained" className="ms-2 btn d-flex catalog">
              <DehazeIcon />
              <p className="">Каталог</p>
            </Button>

            <div className="my_modal">
              <div className="modal_content">
                <span className="modal_close">&times;</span>
                <div className="modal_content__inner row justify-content-between">
                  <div className="modal_content_item col-3">
                    <div className="modal_content_category d-flex justify-content-start align-items-center">
                      <img src="./images/modal/1.webp" alt="" />
                      <strong>Смартфоны и планшеты</strong>
                    </div>
                    <ul className="modal_content_list">
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="modal_content_item col-3">
                    <div className="modal_content_category d-flex justify-content-start align-items-center">
                      <img src="./images/modal/1.webp" alt="" />
                      <strong>Смартфоны и планшеты</strong>
                    </div>
                    <ul className="modal_content_list">
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="modal_content_item col-3">
                    <div className="modal_content_category d-flex justify-content-start align-items-center">
                      <img src="./images/modal/1.webp" alt="" />
                      <strong>Смартфоны и планшеты</strong>
                    </div>
                    <ul className="modal_content_list">
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="modal_content_item col-3">
                    <div className="modal_content_category d-flex justify-content-start align-items-center">
                      <img src="./images/modal/1.webp" alt="" />
                      <strong>Смартфоны и планшеты</strong>
                    </div>
                    <ul className="modal_content_list">
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="modal_content_item col-3">
                    <div className="modal_content_category d-flex justify-content-start align-items-center">
                      <img src="./images/modal/1.webp" alt="" />
                      <strong>Смартфоны и планшеты</strong>
                    </div>
                    <ul className="modal_content_list">
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="modal_content_item col-3">
                    <div className="modal_content_category d-flex justify-content-start align-items-center">
                      <img src="./images/modal/1.webp" alt="" />
                      <strong>Смартфоны и планшеты</strong>
                    </div>
                    <ul className="modal_content_list">
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="modal_content_item col-3">
                    <div className="modal_content_category d-flex justify-content-start align-items-center">
                      <img src="./images/modal/1.webp" alt="" />
                      <strong>Смартфоны и планшеты</strong>
                    </div>
                    <ul className="modal_content_list">
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Планшеты</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="search ">
            <input type="text" placeholder="Поиск" className="search_field" />
            <svg
              fill="rgb(162, 160, 160)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="28px"
              height="28px"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
            </svg>
          </div>

          <div className="menu_section">
            <ul className="d-flex justify-content-between menu">
              <li className="">
                <Link
                  className="d-flex menu-link flex-column justify-content-center align-items-center"
                  to={"/register"}
                >
                  <PersonOutlineIcon />
                  <p>Профиль</p>
                </Link>
              </li>
              <li className="">
                <Link
                  className="d-flex menu-link compartion-link flex-column justify-content-center align-items-center"
                  to={"/"}
                >
                  <Badge
                    badgeContent={4}
                    color="primary"
                    className="d-flex menu-link flex-column justify-content-center align-items-center"
                  >
                    <CompareIcon />
                  </Badge>
                  <p>Сравнение</p>
                </Link>
              </li>
              <li className="">
                <Link
                  className="d-flex menu-link flex-column justify-content-center align-items-center"
                  to={"/favorite"}
                >
                  <Badge
                    badgeContent={favoriteCount}
                    color="primary"
                    className="d-flex menu-link flex-column justify-content-center align-items-center"
                  >
                    <FavoriteBorderIcon />
                  </Badge>
                  <p>Избранное</p>
                </Link>
              </li>
              <li className="">
                <Link
                  className="d-flex menu-link flex-column justify-content-center align-items-center"
                  to={"/cart"}
                >
                  <Badge
                    badgeContent={cartCount}
                    color="primary"
                    className="d-flex menu-link flex-column justify-content-center align-items-center"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                  <p>Корзина</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
