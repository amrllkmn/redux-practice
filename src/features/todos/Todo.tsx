import React, { useState } from "react";
import { ITodo, deleteTodo } from "./todoSlice";
import { EditTodo } from "./EditTodo";
import { useAppDispatch } from "../../app/hooks";

const getColor = (status: String) => {
  switch (status) {
    case "Not started":
      return "text-red-500";
    case "In progress":
      return "text-yellow-500";
    case "Completed":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

export const Todo = ({ id, title, status, description }: ITodo) => {
  const [editTodo, setEditTodo] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleEditTodo = () => {
    setEditTodo(true);
  };

  const handleCloseEdit = () => {
    setEditTodo(false);
  };

  return (
    <div
      className="p-6 mb-2 w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      id={id.toString()}
      data-testid="card"
    >
      {editTodo ? (
        <>
          <div className="p-6 inline-block">
            <button type="button" onClick={handleCloseEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 dark:stroke-gray-600 hover:bg-gray-400 hover:stroke-gray-200 rounded-sm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <EditTodo
            todoId={id}
            isEditing={editTodo}
            handleClose={handleCloseEdit}
          />
        </>
      ) : (
        <div>
          <div className="p-6 inline-block">
            <button type="button" onClick={handleEditTodo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 dark:stroke-gray-600 hover:bg-gray-400 hover:stroke-gray-200 rounded-sm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button type="button" onClick={handleDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 dark:stroke-gray-600 hover:bg-gray-400 hover:stroke-gray-200 rounded-sm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <p className={`inline-flex items-center ${getColor(status)}`}>
            {status}
          </p>
        </div>
      )}
    </div>
  );
};
