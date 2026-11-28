import { useEffect, useReducer, useState } from "react"

type Todo = {
  id: number
  text: string
}

type Action =
  | { type: "add"; text: string }
  | { type: "edit"; id: number; text: string }
  | { type: "delete"; id: number }

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }]
    case "edit":
      return state.map((t) =>
        t.id === action.id ? { ...t, text: action.text } : t
      )
    case "delete":
      return state.filter((t) => t.id !== action.id)
    default:
      return state
  }
}

function getInitial(): Todo[] {
  const saved = localStorage.getItem("todos")
  if (saved) return JSON.parse(saved)
  return [
    { id: 1, text: "Learn useReducer" },
    { id: 2, text: "Make a ToDo list" },
  ]
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], getInitial)

  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)

  const [addText, setAddText] = useState("")
  const [editText, setEditText] = useState("")
  const [editId, setEditId] = useState(0)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function addData() {
    if (addText.trim() === "") return
    dispatch({ type: "add", text: addText })
    setAddText("")
    setModalAdd(false)
  }

  function editData() {
    if (editText.trim() === "") return
    dispatch({ type: "edit", id: editId, text: editText })
    setModalEdit(false)
  }

  function openEdit(todo: Todo) {
    setEditId(todo.id)
    setEditText(todo.text)
    setModalEdit(true)
  }

  return (
    <div className="mx-auto max-w-[600px] p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">ToDo List</h1>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => { setAddText(""); setModalAdd(true) }}
        >
          Add
        </button>
      </div>

      {todos.length === 0 && (
        <p className="mt-6 text-center text-gray-500">Задач пока нет</p>
      )}

      <ul className="mt-6 flex flex-col gap-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between rounded border p-3"
          >
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                className="rounded bg-yellow-500 px-3 py-1 text-white"
                onClick={() => openEdit(todo)}
              >
                Edit
              </button>
              <button
                className="rounded bg-red-500 px-3 py-1 text-white"
                onClick={() => dispatch({ type: "delete", id: todo.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {modalAdd && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="flex w-[360px] flex-col gap-3 rounded bg-white p-5">
            <h2 className="text-xl font-bold">Add task</h2>
            <input
              className="rounded border p-2"
              value={addText}
              onChange={(e) => setAddText(e.target.value)}
              placeholder="New task"
            />
            <div className="flex justify-end gap-2">
              <button
                className="rounded bg-gray-200 px-4 py-2"
                onClick={() => setModalAdd(false)}
              >
                Cancel
              </button>
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white"
                onClick={() => addData()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {modalEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="flex w-[360px] flex-col gap-3 rounded bg-white p-5">
            <h2 className="text-xl font-bold">Edit task</h2>
            <input
              className="rounded border p-2"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="rounded bg-gray-200 px-4 py-2"
                onClick={() => setModalEdit(false)}
              >
                Cancel
              </button>
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white"
                onClick={() => editData()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
