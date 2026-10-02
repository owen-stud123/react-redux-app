import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { decrement, increment, reset } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.counterContainer}>
      <h2 className={styles.counterValue}>Counter: {count}</h2>
      <div className={styles.controls}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className={styles.button} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;