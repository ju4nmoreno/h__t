import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Mariana', age: 20 },
];
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        <p>User: {user?.name}</p>
        <p>Age: {user?.age}</p>
      </div>
    </div>
  );
};

export default UserSearch;
