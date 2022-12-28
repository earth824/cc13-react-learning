import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme };

export default ThemeContextProvider;

function Modal(props) {
  return <div>{props.children}</div>;
}

Modal.Header = function () {
  return <header></header>;
};

{
  /* <Modal>
  <Modal.Header></Modal.Header>
  <Modal.Content></Modal.Content>
  <Modal.Footer></Modal.Footer>
</Modal> */
}
