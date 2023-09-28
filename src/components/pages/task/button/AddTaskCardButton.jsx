import React from "react";
import { v4 as uuid } from "uuid";
import "../TaskCards.css";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    // タスクカードを追加する。
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
