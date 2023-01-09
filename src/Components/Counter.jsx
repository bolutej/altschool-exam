import React from "react";
import { Helmet } from "react-helmet-async";
import useMyReducer from "./Hooks/useCounter";
import { GrRefresh } from 'react-icons/gr'

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: state.count - state.count };
    case "setValue":
      return { count: action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, increment, decrement, reset, setValue] = useMyReducer(reducer, { count: 0 });


  return (
    <div>
      <Helmet>
        <title>Counter Page</title>
        <meta name="description" content="counter page"/>
        <link rel="canonical" href="/counter"/>
      </Helmet>
      <div className="main">
        <h1>Counter App</h1>
        <span>
          <input
            type="tel"
            placeholder="set value"
            value={state.count}
            className="input"
            onChange={setValue}
          />
        </span>

        <div className="counter">
          <button className="decrement" onClick={decrement}>
            -
          </button>
          <button className="reset" onClick={reset}>
          <GrRefresh />
          </button>
          <button className="increment" onClick={increment}>
            +
          </button>
          </div>
        </div>
      </div>
    
  );
};

export default Counter;
