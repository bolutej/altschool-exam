import {useState} from 'react'




const useCounter = (reducer, intialState) => {
  const [state, setState] = useState(intialState)

    const dispatch = (actionParams) => {
      const updateState = reducer(state, actionParams)
      setState(updateState);
    }

    function increment() {
      dispatch({ type: "increment" });
    }
    function decrement() {
      dispatch({ type: "decrement" });
    }
    function reset() {
      dispatch({ type: "reset" });
    }
    function setValue(e) {
      const currentValue = e.target.value === "" ? 0 : parseInt(e.target.value);
      dispatch({ type: "setValue", payload: currentValue });
    }

  return [state, increment, decrement, reset, setValue];
}

export default useCounter