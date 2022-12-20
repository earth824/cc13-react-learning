import logo from './logo.svg';
import './App.css';

// 1. Name import
import { formatTwoDigit, formatTwoDigit1, formatTwoDigit2 } from './formatNumber';
import * as formatNumberService from './formatNumber';

// 2. Default Import
import a from './formatNumber';

console.log(formatTwoDigit);
console.log(formatNumberService.formatTwoDigit);

function App() {
  return <div className="App"></div>;
}

export default App;
