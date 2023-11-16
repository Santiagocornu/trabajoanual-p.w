import { useState } from 'react';
import { AUTH } from '../../firebase/firestore';
import { updateProfile } from "firebase/auth";
import './ChangeName.css'

const ChangeName = () => {
  const [newName, setNewName] = useState('');

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = AUTH;
    const user = auth.currentUser;
    if (user) {
      updateProfile(user, {
        displayName: newName
      }).then(() => {
        console.log('Name updated successfully!');
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='h'>
        New name:
        <input type="text" value={newName} onChange={handleChange} />
      </label>
      <button type="submit">Change name</button>
    </form>
  );
}

export default ChangeName;
