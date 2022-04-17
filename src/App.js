function App() {
  return (
    <div>
      <h1 style={styles.h1}>Count</h1>
      <button style={styles.btn}>INC</button>
      <button style={styles.btn}>DEC</button>
      <button style={styles.btn}>ADD TASK</button>
      <button style={styles.btn}>DELETE TASK</button>
      <button style={styles.btn}>ADD ASYNC TASK</button>
      <ul>
        <li style={styles.item}>Test list</li>
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
