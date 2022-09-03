import { createSlice } from "@reduxjs/toolkit";
import { dummyTodo } from "../../app/dummyTodo";

export interface ITodo {
  id: number;
  title: string;
  status: "Not started" | "In progress" | "Completed" | string;
  description: string;
}

export const todoSlice = createSlice({
  name: "todos",
  initialState: dummyTodo,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: ITodo = {
        id: state.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
      };
      state.push(newTodo);
    },

    editTodo: (state, action) => {
      //Find the todo with the id
      const todo = state.find((element) => element.id === action.payload.id);
      // update todo
      if (todo) {
        const index = state.indexOf(todo);
        todo.title = action.payload.title;
        todo.description = action.payload.description;
        todo.status = action.payload.status;

        state.splice(index, 1, todo);
      }
      // insert at the original todo index
    },

    deleteTodo: (state, action) => {
      const todo = state.find((element) => element.id === action.payload.id);
      if (todo) {
        const index = state.indexOf(todo);
        state.splice(index, 1);
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
