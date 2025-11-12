import React, { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "ADD") {
    return [...state, { id: Date.now(), text: action.text }];
  }
  if (action.type === "DELETE") {
    return state.filter((todo) => todo.id !== action.id);
  }
  return state;
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch({ type: "ADD", text });
    setText("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
      <h2 className="text-2xl font-semibold text-center mb-4">TODO List</h2>

      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Yangi vazifa..."
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Qo‘shish
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
           className="flex justify-between items-center border p-2 rounded border-gray-300"
          >
            {todo.text}
            <button
              onClick={() => dispatch({ type: "DELETE", id: todo.id })}
              className="text-red-500 hover:underline cursor-pointer"
            >
              o'chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
