import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_wrap container-fluid my-4">
      <h3 className="login_title">Вход в кабинет покупателя</h3>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Телефон или Email
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
        <div className="login_actions">
          <button type="submit" className="btn btn-primary px-3">
            Войти
          </button>
          <Link to={"/register"} className="ms-3">
            Зарегестрироваться
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
