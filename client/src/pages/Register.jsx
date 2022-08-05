import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login_wrap container-fluid my-4">
      <h3 className="login_title">Регистрация</h3>
      <form className="mt-3">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Контактное лицо (ФИО)
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Контактный телефон
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Повторите пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="login_actions">
          <button type="submit" className="btn btn-primary px-3">
            Зарегестрироваться
          </button>
          <Link to={"/login"} className="ms-3">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
