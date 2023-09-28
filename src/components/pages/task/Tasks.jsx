import React, { useState } from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./TaskCards.css";

// const reorder = (taskList, startIndex, endIndex) => {
//   const remove = taskList.splice(startIndex, 1);
//   taskList.splice(endIndex, 0, remove[0]);
// };

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    // console.log(result);
    // reorder(taskList, result.source.index, result.destination.index);
    // setTaskList(taskList);

    const reorderedTaskList = Array.from(taskList);
    const [movedItem] = reorderedTaskList.splice(result.source.index, 1);
    reorderedTaskList.splice(result.destination.index, 0, movedItem);
    setTaskList(reorderedTaskList);
  };

  const handleToggle = (taskId) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    onToggle={handleToggle}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
