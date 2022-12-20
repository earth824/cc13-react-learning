import './App.css';

function App() {
  const myName = 'John';
  const func = () => 'Func execute';
  const classes = 'App';

  const a = (
    <div>
      <p>Test A</p>
      <span></span>
    </div>
  );
  const age = 2022 - 1960;
  let showOld;
  if (age > 60) {
    showOld = 'Old';
  } else {
    showOld = 'Young';
  }

  const obj = { name: 'ope', age: 23 };
  const arr = [<p>Ope</p>, <h1>23</h1>];
  // <p>Ope</p><h1>23</h1>
  return (
    <div className={classes}>
      <h1>Welcome to React world, {myName}</h1>
      <h2>{func()}</h2>
      <h3>age: {2022 - 1960}</h3>
      <h3>You are {2022 - 1960 > 60 ? 'Old' : 'Young'}</h3>
      <h3>{showOld}</h3>
      <label htmlFor="email">Email: </label>
      <input type="text" id="email" placeholder="Enter email" />
      {a}
      <img src="" />
      <br />
      <p>{true}</p>
      <p>{false}</p>
      <p>{undefined}</p>
      <p>{null}</p>
      {/* <h1>{obj}</h1> */}
      {arr}
    </div>
  );
}

export default App;
