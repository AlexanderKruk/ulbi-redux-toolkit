import { useDispatch, useSelector } from "react-redux";
import {
  incriment,
  decriment,
  addTodo,
  deleteTodo,
} from "./vanillaRedux/mainReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.main.count);
  const todos = useSelector((state) => state.main.todos);

  return (
    <div>
      <h1 style={styles.h1}>Count: {count}</h1>
      <button style={styles.btn} onClick={() => dispatch(incriment())}>
        INC
      </button>
      <button style={styles.btn} onClick={() => dispatch(decriment())}>
        DEC
      </button>
      <button style={styles.btn} onClick={() => dispatch(addTodo(prompt()))}>
        ADD TASK
      </button>
      <button style={styles.btn} onClick={() => dispatch(deleteTodo())}>
        DELETE TASK
      </button>
      <button style={styles.btn}>ADD ASYNC TASK</button>
      <ul>
        {todos.map((item) => (
          <li style={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

const styles = {
  h1: {
    margin: 20,
  },
  btn: {
    margin: 20,
    padding: 5,
    color: "orange",
    backgroundColor: "black",
    fontSize: 25,
  },
  item: {
    width: "800px",
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    listStyleType: "none",
    marginTop: 5,
  },
};
