import React from "react";
import "./ReviewTask.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../../../../topbar/Topbar";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AddCommentIcon from "@mui/icons-material/AddComment";

export default function ReviewTask() {
  return (
    <>
      <Topbar titleRight="タスク" />
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
            <div className="reviewTop">
              <input
                type="text"
                className="reviewInput"
                placeholder="キーワードを入力"
              />
              <button className="inputOutput">ページ作成</button>
            </div>
            <div className="addIconContainer">
              <div className="addIconButtons">
                <label className="addIconButton" htmlFor="photo">
                  <div className="addIcon">
                    <AddPhotoAlternateIcon style={{ fontSize: 18 }} />
                    <span className="iconText">写真</span>
                    <input
                      type="file"
                      id="photo"
                      accept=".png, .jpeg, .jpg"
                      style={{ display: "none" }}
                    />
                  </div>
                </label>
                <label className="addIconButton" htmlFor="file">
                  <div className="addIcon">
                    <InsertDriveFileIcon style={{ fontSize: 18 }} />
                    <span className="iconText">ファイル</span>
                    <input
                      type="file"
                      id="file"
                      accept=".png, .jpeg, .jpg"
                      style={{ display: "none" }}
                    />
                  </div>
                </label>
                <label className="addIconButton" htmlFor="word">
                  <div className="addIcon">
                    <AddCommentIcon style={{ fontSize: 18 }} />
                    <span className="iconText">重要語句</span>
                    <input type="text" id="word" style={{ display: "none" }} />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
