import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const ToDos = () => {
  const todos = useSelector((state) => state.todos);
  const dispactch = useDispatch();

  return (
    <>
      {todos.map((todo) => (
        <>
          <div
            className={`flex border w-full border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 bg-[#ccbed7] text-black `}
          >
            <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg border-transparent`}
              value={todo.text}
              readOnly
            />
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => dispactch(removeTodo(todo.id))}
            >
              ❌
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default ToDos;
