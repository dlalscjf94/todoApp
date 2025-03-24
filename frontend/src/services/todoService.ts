import axios from "axios";
import { Todo } from "../types/todo";

const API_URL = "/api/todos";

export const getTodos = () => axios.get<Todo[]>(API_URL);

export const createTodo = (todo: Todo) => axios.post<Todo>(API_URL, todo);