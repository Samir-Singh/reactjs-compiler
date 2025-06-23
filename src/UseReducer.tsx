import { useReducer } from "react";

type Action =
  | { type: "increment"; value?: number }
  | { type: "decrement"; value?: number }
  | { type: "reset" };

const UseReducer = () => {
  const countReducer = (state: { count: number }, action: Action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: action.value ? state.count + action.value : state.count + 1,
        };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h1>UseReducer Hook</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
