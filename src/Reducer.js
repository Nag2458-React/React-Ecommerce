import React, { useReducer } from "react";
//useReducer anedi stage change kosam use chestaru like useState
//useReducer ni top lo import cheskovali
//call the reducer function like useReducer();
//use reducer 2 argumnts theeskuntundi

const initialState = 0;
const countReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return (state = state + action.payload);
    case "DEC":
      if (state > 0) {
        return (state = state - action.payload);
      }
      return state;
    case "RESET":
      return (state = initialState);
    default:
      return state;
  }
};
const Reducer = () => {
  const [count, dispatch] = useReducer(countReducer, initialState);
  console.log(count);
  return (
    <div className="items">
      <div className="container">
        <h2>Welcome to UseReducer</h2>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INC", payload: 1 })}
        >
          Plus
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "DEC", payload: 1 })}
        >
          Minus
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "RESET", payload: 0 })}
        >
          Reset
        </button>
        <p className="display h3">{count}</p>
      </div>
    </div>
  );
};

export default Reducer;
