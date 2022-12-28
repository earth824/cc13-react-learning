import { useState, createContext, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import LanguageContext from './contexts/LanguageContext';
import { LanguageContextProvider } from './contexts/LanguageContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <Header />
          <Content />
        </LanguageContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

// const langObj = {
//   EN: {
//     'form.email.text': 'Email',
//     'form.email.placeholder': 'Enter email',
//     'form.password.text': 'Password',
//     'form.password.placeholder': 'Enter password',
//     'display.lang.en': 'EN',
//     'display.lang.th': 'TH'
//   },
//   TH: {
//     'form.email.text': 'อีเมล',
//     'form.email.placeholder': 'กรุณากรอกอีเมล',
//     'form.password.text': 'รหัสผ่าน',
//     'form.password.placeholder': 'กรุณากรอกรหัสผ่าน',
//     'display.lang.en': 'อังกฤษ',
//     'display.lang.th': 'ไทย'
//   }
// };

// function App() {
//   const [lang, setLang] = useState('EN');

//   const changeLang = language => setLang(language);

//   return (
//     <div>
//       <LanguageContext.Provider
//         value={{ lang, changeLang, langObj: langObj[lang] }}
//       >
//         <Header />
//         <Content />
//       </LanguageContext.Provider>
//     </div>
//   );
// }

// const CountContext = createContext();

// function App() {
//   const [count, setCount] = useState(0);
//   const [language, setLanguage] = useState('TH');
//   return (
//     <div className="App">
//       <CountContext.Provider value={{ count: count, language: language }}>
//         <Level1 count={count} />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Level1(props) {
//   return (
//     <div>
//       Level 1
//       <Level2 count={props.count} />
//     </div>
//   );
// }

// function Level2(props) {
//   return (
//     <div>
//       Level 2
//       <Level3 count={props.count} />
//     </div>
//   );
// }

// function Level3(props) {
//   const contextObj = useContext(CountContext);
//   return <div>Level 3 {contextObj.count}</div>;
// }

export default App;
