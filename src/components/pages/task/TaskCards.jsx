import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./TaskCards.css";
import Topbar from "../../../topbar/Topbar";

const reorder = (taskCardsList, startIndex, endIndex) => {
  const remove = taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(endIndex, 0, remove[0]);
};

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);

    setTaskCardsList(taskCardsList);
  };

  return (
    <>
      <Topbar titleCenter="復習" />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div
              className="taskCardsArea"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskCardsList.map((taskCard, index) => (
                <TaskCard
                  key={taskCard.id}
                  index={index}
                  taskCardsList={taskCardsList}
                  setTaskCardsList={setTaskCardsList}
                  taskCard={taskCard} //idが入っている。×ボタンで削除する時に必要。
                />
              ))}
              {provided.placeholder}
              <AddTaskCardButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
