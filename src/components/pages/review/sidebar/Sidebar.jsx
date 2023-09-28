import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebarWrapper">
        <div className="reviewListContainer">
          <div className="reviewListName">
            <h3 className="reviewName">復習リスト</h3>
          </div>
          <span className="borderLine"></span>
          <div className="titleName">
            <ul className="titleNameList">
              <li className="titleNameListItem">データ構造とアルゴリズム</li>
              <li className="titleNameListItem">データ構造とアルゴリズム</li>
              <li className="titleNameListItem">データ構造とアルゴリズム</li>
              <li className="titleNameListItem">データ構造とアルゴリズム</li>
              <li className="titleNameListItem">データ構造とアルゴリズム</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
