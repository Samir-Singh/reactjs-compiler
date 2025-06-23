import { useReducer, useState } from "react";

type TodoType = {
  id: number;
  value: string;
  completed: boolean;
};

type actionType = {
  type: "ADD_TODO" | "REMOVE_TODO" | "COMPLETE_TODO";
  value?: string;
  id?: number;
};

const TodoReducer = () => {
  const [text, setText] = useState("");
  const initialState: TodoType[] = [];
  const todoReducer = (state: TodoType[], action: actionType): TodoType[] => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: Date.now(), value: action.value ?? "", completed: false },
        ];
      case "REMOVE_TODO":
        return state.filter((item) => item.id !== action.id);
      case "COMPLETE_TODO":
        return state.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const completedCount = state.filter((item) => item.completed).length;

  return (
    <>
      <h1>Todo Reducer</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            value: text,
          });
          setText("");
        }}
      >
        Submit
      </button>

      <div style={{ margin: "10px 0" }}>
        Total Items: {state.length} | Completed Items: {completedCount}
      </div>

      {state?.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "COMPLETE_TODO", id: item.id })}
          />
          <span
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.value}
          </span>
          <button
            onClick={() => dispatch({ type: "REMOVE_TODO", id: item.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoReducer;
