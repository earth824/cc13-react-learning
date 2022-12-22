import { useState } from 'react';

function App() {
  // const friends = ['Korn', 'Bell', 'Ice', 'Mew', 'Ham', 'Korn'];
  const initialFriends = [
    { id: 1, name: 'Korn' },
    { id: 2, name: 'Bell' },
    { id: 3, name: 'Ice' },
    { id: 4, name: 'Mew' },
    { id: 5, name: 'Ham' },
    { id: 6, name: 'Korn' }
  ];
  const products = [];
  const product = { name: 'Coke', price: 15 };

  const [friends, setFriends] = useState(initialFriends);

  const handleClickUnfriend = idToDelete => {
    const nextFriendsState = friends.filter(el => el.id !== idToDelete);
    setFriends(nextFriendsState);
  };

  return (
    <div>
      {friends.map(el => (
        <div
          style={{
            border: '1px solid green',
            display: 'flex',
            justifyContent: 'space-between'
          }}
          // key={el.id}
        >
          <span>{el.name}</span>
          <button onClick={() => handleClickUnfriend(el.id)}>Unfriend</button>
        </div>
      ))}
    </div>
  );
}

export default App;
