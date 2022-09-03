import React from "react";
import { Todo } from "./Todo";
import { useAppSelector } from "../../app/hooks";

export const TodoList = () => {
  const todoList = useAppSelector((state) => {
    return state.todos;
  });
  return (
    <div className="w-full p-6 mb-2 inline-flex items-center">
      {todoList &&
        todoList.map((item, index) => {
          return (
            <Todo
              id={item.id}
              title={item.title}
              status={item.status}
              description={item.description}
              key={index}
            />
          );
        })}
    </div>
  );
};
