import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default function Content() {
  const langCtx = useContext(LanguageContext);
  return (
    <div>
      <form>
        <label>{langCtx.langObj['form.email.text']}: </label>
        <input
          placeholder={langCtx.lang === 'EN' ? 'Enter email' : 'กรุณากรอกอีเมล'}
        />
        <label>{langCtx.lang === 'EN' ? 'Email' : 'รหัสผ่าน'}: </label>
        <input
          placeholder={
            langCtx.lang === 'EN' ? 'Enter password' : 'กรุณากรอกรหัสผ่าน'
          }
        />
      </form>
    </div>
  );
}
