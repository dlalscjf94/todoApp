import axios from "axios";
import { Todo } from "../types/todo";

const API_URL = "/api/todos";

// 할일목록 가져오기
export const getTodos = () => axios.get<Todo[]>(API_URL);
// 할일 생성 
export const createTodo = (todo: Todo) => axios.post<Todo>(API_URL, todo);
// 할일 업데이트  
export const updateTodo = (id: number, updatedTodo: Todo) => axios.put<Todo>(`${API_URL}/${id}`, updatedTodo);
