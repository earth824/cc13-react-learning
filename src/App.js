// Lab 1
// function App() {
//   const handleChange = e => console.log(e.target.value);

//   return (
//     <div className="box" style={{ gap: '12px' }}>
//       <label>Type somthing</label>
//       <input onChange={handleChange} />
//       <input onChange={e => console.log(e.target.value)} />
//     </div>
//   );
// }

// Lab 2
// function App() {
//   const handleChange = event => {
//     console.log(event.target.value);
//   };

//   return (
//     <select onChange={handleChange}>
//       <option value="THA">Thailand</option>
//       <option value="ENG">England</option>
//       <option value="USA">USA</option>
//       <option value="LAO">Laos</option>
//       <option value="JPN">Japan</option>
//     </select>
//   );
// }

// Lab 3
// const App = () => {
//   const myOnChange = e => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//     console.log(e.target.checked ? 'tick' : 'untick');
//   };
//   return (
//     <div>
//       <input
//         onChange={myOnChange}
//         type="checkbox"
//         id="vehicle1"
//         name="vehicle1"
//         value="Iphone"
//         defaultChecked
//       ></input>
//       <label htmlFor="vehicle1"> IPhone</label>
//       <br></br>
//       <input
//         onChange={myOnChange}
//         type="checkbox"
//         id="vehicle2"
//         name="vehicle2"
//         value="Nokia3310"
//       ></input>
//       <label htmlFor="vehicle2"> Nokia3310</label>
//       <br></br>
//       <input
//         onChange={myOnChange}
//         type="checkbox"
//         id="vehicle3"
//         name="vehicle3"
//         value="Samsung"
//       ></input>
//       <label htmlFor="vehicle3"> Samsung</label>
//       <br></br>
//       {/* <input type="radio" />
//       <label>Male</label>
//       <input type="radio" />
//       <label>Female</label> */}
//     </div>
//   );
// };

// Lab 4
// alert, prompt, confirm
function App() {
  const clickLink = event => {
    if (!window.confirm('Leave for https://google.com?'))
      event.preventDefault();
  };
  return (
    <div>
      <a onClick={clickLink} href="https://www.google.com">
        Google
      </a>
    </div>
  );
}

export default App;
