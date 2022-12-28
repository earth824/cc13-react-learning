import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default function Header() {
  const langCtx = useContext(LanguageContext);
  return (
    <div>
      <span onClick={() => langCtx.changeLang('TH')}>
        {langCtx.lang === 'EN' ? 'TH' : 'ไทย'}
      </span>{' '}
      |{' '}
      <span onClick={() => langCtx.changeLang('EN')}>
        {langCtx.lang === 'EN' ? 'EN' : 'อังกฤษ'}
      </span>
    </div>
  );
}
