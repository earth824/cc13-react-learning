import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <div>
      <form
        action="http//localhost:3000"
        method="POST"
        // onSubmit={event => {}}
      >
        <input name="email" type="text" />
        <input name="password" />
        <input
          type="file"
          // value={input}
          onChange={event => console.log(event)}
        />
        <button>Submit Form</button>
      </form>
      <button>Submit Form Outside</button>
    </div>
  );
}

export default App;
