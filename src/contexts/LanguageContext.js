import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const langObj = {
  EN: {
    'form.email.text': 'Email',
    'form.email.placeholder': 'Enter email',
    'form.password.text': 'Password',
    'form.password.placeholder': 'Enter password',
    'display.lang.en': 'EN',
    'display.lang.th': 'TH'
  },
  TH: {
    'form.email.text': 'อีเมล',
    'form.email.placeholder': 'กรุณากรอกอีเมล',
    'form.password.text': 'รหัสผ่าน',
    'form.password.placeholder': 'กรุณากรอกรหัสผ่าน',
    'display.lang.en': 'อังกฤษ',
    'display.lang.th': 'ไทย'
  }
};

function LanguageContextProvider(props) {
  const [lang, setLang] = useState('EN');
  const changeLang = language => setLang(language);

  return (
    <LanguageContext.Provider
      value={{ lang, changeLang, langObj: langObj[lang] }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  return useContext(LanguageContext);
}

export { LanguageContextProvider, useLanguage };

export default LanguageContext;
