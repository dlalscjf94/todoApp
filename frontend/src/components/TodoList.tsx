import { useEffect, useState } from "react";
import { getTodos, createTodo } from "../services/todoService";
import { Todo } from "../types/todo";

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const loadTodos = () => {
        getTodos().then((res) => setTodos(res.data));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo: Todo = {
            title,
            description,
            completed: false,
        };
        createTodo(newTodo).then(() => {
            loadTodos();
            setTitle("");
            setDescription("");
        });
    };

    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <div>
            <h2>오늘의 할일</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="설명"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">추가</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong>: {todo.description}{" "}
                        [{todo.completed ? "완료" : "미완료"}]
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;