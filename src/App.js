import logo from './logo.svg';
import style from './css-module.module.css';
// import './custom.css';
// import './App.css';

// 1. Inline style
// function App() {
//   // <div style="border: 1px solid blue; border-radius: 8px"></div>;
//   return (
//     <div
//       style={{
//         border: '1px solid blue',
//         width: 600,
//         height: '400px',
//         borderRadius: '8px',
//         ['background-color']: 'red'
//       }}
//     >
//       Hello
//     </div>
//   );
// }

// 2. External CSS
function App() {
  return <div className={style.module}></div>;
}

// 3. CSS module

// 4. CSS in JS
// ex. styled-component

export default App;
