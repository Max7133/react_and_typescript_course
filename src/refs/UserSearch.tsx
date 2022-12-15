import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  // New Ref - for assigning it to the text input
  // Telling TS that I'm going to create a 'ref' with a initial starting value of ref.current of Null (means I'haven't assigned anything to this 'ref' yet)
  // and I have update the Type at some point in time to Type Null, but at other points in time, it might poiny to an HTMLInputElement
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  // for having the input already selected so I can straight away type there
  useEffect(() => {
    if (!inputRef.current) return; // otherwise TS will think I might not assign it
    inputRef.current.focus();
  }, []); //2nd arg Empty Array, so I can be sure that the useEffect will be invoked only 1 time

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
