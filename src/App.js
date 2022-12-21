import logo from './logo.svg';
import './App.css';

function Test(props) {
  // props { onClick: () => console.log('click test') }
  return <button onClick={props.onClick}>Test</button>;
}

function App() {
  let count = 0;

  function decrease() {
    console.log('clicked decreaase');
  }

  const decreaseMouseOver = () => {
    console.log('mouse over decreas button');
  };

  const handleInputChange = (event, inp1, inp2) => {
    // console.log(event.target.name);
  };

  // const handleInputChange = (inp1, inp2) => event => {};

  // function handleInputChange(inp1, inp2) {
  //   return function (event) {};
  // }

  return (
    <div style={{ textAlign: 'center' }}>
      <Test onClick={() => console.log('click test')} />
      <h1>{count}</h1>
      <button
        onClick={function () {
          count++;
          console.log(count);
          console.log('clicked');
          // alert('User clicked increase button');
        }}
        onMouseOver={() => {
          console.log('mouse over');
        }}
      >
        Increase
      </button>
      <button onClick={decrease} onMouseOver={decreaseMouseOver}>
        Decrease
      </button>
      <div>
        <input
          onChange={event => handleInputChange(event, 'a', 'b')}
          // onChange={handleInputChange('a', 'b')}
          name="password"
          placeholder="Enter something"
          // onChange={function (event) {
          //   // console.log(event);
          //   console.log(event.target.name);
          //   console.log('value', event.target.value);
          //   // console.log('changed');
          // }}
        />
      </div>
    </div>
  );
}

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {});

export default App;
