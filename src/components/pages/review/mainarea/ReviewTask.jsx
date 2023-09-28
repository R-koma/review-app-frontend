import React from "react";
import "./ReviewTask.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../../../../topbar/Topbar";

export default function ReviewTask() {
  return (
    <>
      <Topbar titleCenter="復習" titleRight="タスク" />
      <div className="sideContainer">
        <Sidebar />

        <div className="reviewWrapper">
          <div className="reviewTitle">
            <h3>復習リストの題名</h3>
          </div>
          <div className="reviewCompleteButton">
            <button className="completeButton">完了</button>
          </div>
          <div className="startDay">
            <span>開始日:2023/09/27</span>
          </div>
          <div className="countReview">
            <span>復習回数:2回</span>
          </div>
          <div className="reviewContainer">
            <input
              type="text"
              className="reviewInput"
              placeholder="キーワードを入力"
            />
            <button className="inputOutput">復習ページ作成</button>
          </div>
        </div>
      </div>
    </>
  );
}
