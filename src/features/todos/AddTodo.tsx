import React, { useState } from "react";
import { addTodo } from "./todoSlice";
import { useAppDispatch } from "../../app/hooks";

interface IAddTodoForm {
  name: string;
  value: string;
}

export const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [todoItem, setTodoItem] = useState({
    title: "",
    description: "",
    status: "Not started",
  });
  const submitTodo = () => {
    if (todoItem.description.trim() !== "" && todoItem.title.trim() !== "") {
      dispatch(addTodo(todoItem));
      setTodoItem({ title: "", description: "", status: "Not started" });
    }
    alert("Error: Title or description can't be empty.");
  };

  const handleChange = (e: React.FormEvent<IAddTodoForm>) => {
    const { name, value } = e.currentTarget;
    setTodoItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 mb-2 w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          htmlFor="todoTitle"
        >
          Title
        </label>
        <input
          id="todoTitle"
          name="title"
          value={todoItem.title}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title of your todo"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="todoDesc"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Description
        </label>
        <textarea
          id="todoDesc"
          name="description"
          rows={4}
          value={todoItem.description}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What exactly are you supposed to do?"
        ></textarea>
      </div>
      <div className="mb-4 inline-block relative w-64">
        <label
          htmlFor="todoStatus"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Status
        </label>
        <select
          id="todoStatus"
          name="status"
          onChange={handleChange}
          value={todoItem.status}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Not started</option>
          <option>In progress</option>
          <option>Completed</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        onClick={submitTodo}
      >
        Submit
      </button>
    </div>
  );
};
