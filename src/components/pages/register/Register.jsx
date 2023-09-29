import React from "react";
import "./Register.css";
import Topbar from "../../../topbar/Topbar";

export default function Register() {
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
              <p className="loginMsg">新規登録はこちら</p>
              <input
                type="text"
                className="loginInput"
                placeholder="ユーザー名"
                required
              />
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
              <input
                type="password"
                className="loginInput"
                placeholder="確認用パスワード"
                required
                minLength="6"
              />
              <button className="loginButton" type="submit">
                サインアップ
              </button>
              <button className="loginRegisterButton">ログイン</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
