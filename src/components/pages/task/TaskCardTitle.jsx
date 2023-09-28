import React, { useState } from "react";
import "./TaskCards.css";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Task Title");

  const handleClick = () => {
    setIsClick(true);
    // console.log(isClick);
  };

  const handleChange = (e) => {
    // console.log(inputCardTitle);
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus //入力を押すと自動でフォーカスしてくれる。
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10} //入力できる文字列の制限
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
