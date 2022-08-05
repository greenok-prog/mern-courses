import React from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="footer mt-auto mt-3">
      <div className="footer_inner container-fluid d-flex justify-content-between">
        <div className="contacts">
          <h1 className="text-primary">LOGO</h1>
          <div className="contacts_phones mt-3">
            <div className="contacts_phone">+7(777) 621-54-28</div>
            <span>справочная служба</span>
          </div>
          <div className="contacts_phones mt-3">
            <div className="contacts_phone">+7(777) 621-54-28</div>
            <span className="">интернет магазин</span>
          </div>
          <div className="social mt-3">
            <div className="social_title">Оставайтесь на связи</div>
            <div className="social_list">
              <a href="https://vk.com/id209133014">
                <InstagramIcon />
              </a>
              <a href={"https://wa.me/87474746399"}>
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_lists d-flex justify-content-between">
          <div className="footer_list mx-3">
            <div className="footer_title">О магазине</div>
            <ul>
              <li>
                <Link to={"/"}>Условия обмена и возврата</Link>
              </li>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
            </ul>
          </div>
          <div className="footer_list mx-3">
            <div className="footer_title">Клиентам</div>
            <ul>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
            </ul>
          </div>
          <div className="footer_list mx-3">
            <div className="footer_title">Информация</div>
            <ul>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
              <li>
                <Link to={"/"}>Каталог</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
