import { useState } from 'react';
import './App.css';

// undefined && 7
// ' ' && 5
// Lab 1
// function App() {
//   // มี variable เป็นตัวกำหนด show/hide button
//   const [isShow, setIsShow] = useState(true);
//   // const renderButton = isShow ? (
//   //   <button onClick={() => setIsShow(false)}>Click to hide me</button>
//   // ) : null;
//   // const renderButton = isShow && (
//   //   <button onClick={() => setIsShow(false)}>Click to hide me</button>
//   // );
//   let renderButton;
//   if (isShow)
//     renderButton = (
//       <button onClick={() => setIsShow(false)}>Click to hide me</button>
//     );

//   return <div>{renderButton}</div>;
// }

// Lab 3
// function App() {
//   const [isShow, setIsShow] = useState(true);
//   return (
//     <div>
//       <button onClick={() => setIsShow(!isShow)}>
//         {isShow ? 'Hide' : 'Show'}
//       </button>
//       {isShow ? <h2>SHow text</h2> : null}
//       {isShow && <h2>SHow text</h2>}
//     </div>
//   );
// }

// Lab 4
// function App() {
//   const [money, setMoney] = useState(10);
//   return (
//     <div>
//       <label>Enter Dollar: </label>
//       <input
//         type="text"
//         defaultValue={money}
//         // value={money}
//         onChange={event => {
//           setMoney(event.target.value);
//         }}
//       />
//       <p>Convert to Baht: {30 * money}</p>
//     </div>
//   );
// }

// Lab 5
// function App() {
//   const [input, setInput] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const validatePhoneNumber = () => {
//     if (!input.trim()) {
//       setError('Phone number is required.');
//     } else if (isNaN(input)) {
//       setError('Phone number is invalid');
//     } else if (input.length !== 10) {
//       setError('Invalid length');
//     } else {
//       setError('');
//       setSuccess(true);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <input
//         type="text"
//         className={error ? 'error' : ''}
//         style={{ outline: 'none' }}
//         value={input}
//         onChange={event => setInput(event.target.value)}
//       />
//       <button onClick={validatePhoneNumber}>Check</button>
//       <button onClick={() => setInput('')}>Reset</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>Success</p>}
//     </div>
//   );
// }

// Lab 6
const data = {
  BANGKOK: ['Pathumwan', 'Ratchathewi', 'Bang Rak'],
  PATHUMTHANI: ['Thanyaburi', 'Lumlukka', 'Klongluang'],
  CHIANGMAI: ['Muang', 'Mae rim', 'Fang']
};

function App() {
  const [province, setProvince] = useState('');
  return (
    <div style={{ margin: 30 }}>
      <label>Province: </label>
      <select onChange={event => setProvince(event.target.value)}>
        <option value="">--- Select province ---</option>
        <option value="BANGKOK">Bangkok</option>
        <option value="PATHUMTHANI">Pathumthani</option>
        <option value="CHIANGMAI">Chiang Mai</option>
      </select>
      <br />
      <br />
      <label>District: </label>
      <select>
        {data[province]?.sort().map(el => (
          <option>{el}</option>
        ))}
        {/* {data[province]?.sort().map(function (el) {
          return <option>{el}</option>;
        })} */}
      </select>
    </div>
  );
}

export default App;
