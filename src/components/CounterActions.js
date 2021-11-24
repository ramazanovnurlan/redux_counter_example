import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../stores/counterSlice";

const CounterActions = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>5 artır</button>
    </div>
  );
};

export default CounterActions;
