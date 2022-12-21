import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// execute App()
// found <ShowCount /> => execute ShowCount()
// found <Button /> => execute Button() 2 times
{
  /* <div style={{ textAlign: 'center' }}> */
}
{
  /* <ShowCount /> => <h1>0</h1>
      
      <Button></Button> => <button>+</button>
      <Button></Button> => <button>+</button> */
}
// </div>;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
