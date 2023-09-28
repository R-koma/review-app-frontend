import React from "react";
import "./Topbar.css";

export default function Topbar(props) {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <h1 className="logo">サービス名</h1>
      </div>
      <div className="topbarCenter">
        <span>{props.titleCenter}</span>
      </div>
      <div className="topbarRight">
        <span>{props.titleRight}</span>
      </div>
    </div>
  );
}
