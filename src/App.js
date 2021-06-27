import classes from './App.module.css';
import Counter from './Counter/Counter';

function App(props) {
  return (
    <div className={classes.App}>
      <h1>{props.title}</h1>
      <Counter />
    </div>
  );
}

export default App;
