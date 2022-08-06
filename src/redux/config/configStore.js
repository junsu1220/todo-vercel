import { configureStore } from "@reduxjs/toolkit";

import todos from "../modules/todos.js";

const store = configureStore({
  reducer: { todos: todos.reducer },
});

export default store;
