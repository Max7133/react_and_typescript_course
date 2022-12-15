import { useState } from 'react';

// if the Component won't receive Any Props, then I don't need to write any <> Brakets, like: GuestList:<>, or any Interface
const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]); // <string[]> tells TS it's going to be an Array of 'strings'

  // whenever a User click on the button, I want to add whatever text a user has entered, and add it as a String in to the Guests array
  const onClick = () => {
    setName(''); // will cause the input to empty out
    setGuests([...guests, name]); // takes to current Array of guests, take the all different strings out of it, add it to a new Array, and then add on "name" to the very end
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
