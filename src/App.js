import React from 'react';

import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {/* {Header()} <header>Header</header>;       */}
      <Header />
      {/* <Friend /> */}
      {/* {Friend('In')}
      {Friend('Pink')}
      {Friend('Bo')} */}
      <Friend name="In" age="20" /> {/* Friend({ name: 'In' })  */}
      {Friend({
        name: 'In',
        age: '20'
      })}
      <Friend name="Pink" />
      <Friend name="Bo" />
      <Friend name="Yok" />
    </div>
  );
}

function Header() {
  return <header>Header</header>;
}

const Friend = props => {
  props.name = 'jack';
  props.age = 5;
  return (
    <h1>
      {props.name} {props.age}
    </h1>
  );
};

// class App extends React.Component {
//   render() {
//     return <div className="App">Hello Class Component</div>;
//   }
// }

export default App;
