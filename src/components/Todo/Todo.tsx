import { useState } from "react";
import "./Todo.css";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn useState" },
    { id: 2, text: "Create a List" },
  ]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  function addTodo() {
    if (text.trim() === "") return;

    if (editId === null) {
      setTodos([...todos, { id: Date.now(), text: text }]);
    } else {
      setTodos(
        todos.map((item) =>
          item.id === editId ? { ...item, text: text } : item
        )
      );
      setEditId(null);
    }

    setText("");
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function startEdit(id: number, oldText: string) {
    setEditId(id);
    setText(oldText);
  }

  return (
    <section className="todo">
      <h2>ToDo List</h2>

      <TodoForm
        text={text}
        setText={setText}
        onAdd={addTodo}
        isEditing={editId !== null}
      />

      <ul className="todoList">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            onDelete={deleteTodo}
            onEdit={startEdit}
          />
        ))}
      </ul>
    </section>
  );
}

export default Todo;