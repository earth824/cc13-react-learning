import { useState } from 'react';

// function App() {
//   const resultUseState = useState(0); // return [state, updateStateFn]
//   console.log('App execute');

//   let count = 0;
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>{resultUseState[0]}</h1>
//       <button onClick={() => resultUseState[1](resultUseState[0] + 1)}>
//         +
//       </button>
//       <button>-</button>
//     </div>
//   );
// }

// function App() {
//   // const resultUseState = useState(0); // return [state, updateStateFn]
//   // const arr = ['john', 34]
//   // const nickname = arr[0]; const age = arr[1]
//   // const [nickname, age] = arr
//   const [count, setCount] = useState(0);
//   const [toggle, setToggle] = useState(true);
//   const [obj, setObj] = useState({ toggle: true });
//   console.log('App execute');

//   const handleClickIncrease = () => {
//     // setCount(count + 1); // memory: count = 1
//     // setCount(count + 1); // memory: count = 1
//     // setCount(count + 1); // memory: count = 1
//     // setCount(count + 1); // memory: count = 1
//     // setCount(count + 1); // memory: count = 1
//     let temp = count;
//     setCount(function (memory) {
//       return memory + 1;
//     }); // memery: count = 1

//     setCount(function (memory) {
//       return memory + 1;
//     }); // memory: count = 2
//     setCount(function (memory) {
//       return memory + 1;
//     });
//     setCount(function (memory) {
//       return memory + 1;
//     });
//     setCount(function (memory) {
//       return memory + 1;
//     });
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>{count}</h1>
//       <button onClick={handleClickIncrease}>+</button>
//       <button>-</button>
//       {/* <div>{toggle === true ? 'TRUE' : 'FALSE'}</div>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
//       <div>{obj.toggle === true ? 'TRUE' : 'FALSE'}</div>
//       <button
//         onClick={() => {
//           const newObj = { ...obj, toggle: !obj.toggle };
//           setObj(newObj);
//         }}
//       >
//         Toggle
//       </button>
//     </div>
//   );
// }

import ShowCount from './components/ShowCount';
import Button from './components/Button';

function App() {
  console.log('App run');
  return (
    <div style={{ textAlign: 'center' }}>
      <ShowCount />
      <Button></Button>
      <Button></Button>
    </div>
  );
}

export default App;
