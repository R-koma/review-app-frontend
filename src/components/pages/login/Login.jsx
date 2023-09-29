import React from "react";
import "./Login.css";
import Topbar from "../../../topbar/Topbar";

export default function Login() {
  return (
    <>
      <Topbar />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">アプリ名</h3>
            <span className="loginDesc">復習をいつでもどこでも簡単に管理</span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <p className="loginMsg">ログインはこちら</p>
              <input
                type="email"
                className="loginInput"
                placeholder="Eメール"
                required
              />
              <input
                type="password"
                className="loginInput"
                placeholder="パスワード"
                required
                minLength="6"
              />
              <button className="loginButton">ログイン</button>
              {/* <span className="loginForgot">パスワードを忘れた方へ</span> */}
              <button className="loginRegisterButton">アカウント作成</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
