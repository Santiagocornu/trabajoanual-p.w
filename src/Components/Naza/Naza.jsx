// Naza.js

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AUTH } from '../../firebase/firestore';
import ChangeName from '../ChangeName/ChangeName';
import PasswordChange from '../ChangePassword/ChangePassword';
import './Home.css';

const Naza = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    AUTH.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      if (user) {
        setUserName(user.displayName || user.email);
      }
    });
  }, []);

  const handleLogout = () => {
    AUTH.signOut()
      .then(() => {
        alert("se deslogueo");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleDeleteUser = () => {
    const user = AUTH.currentUser;
    user.delete()
      .then(() => {
        alert("Usuario eliminado");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="caja1">

      <div className="centered-content">
        {isLoggedIn && <p>{userName}</p>}
        <NavLink to="LoginSelect">
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout}>Desloguearse</button>
              <button onClick={handleDeleteUser}>Eliminar Usuario</button>
            </>
          ) : (
            <button className='Boton'>Loguearse</button>
          )}
        </NavLink>
        <ChangeName />
        <PasswordChange />
      </div>
    </div>
  );
};

export default Naza;

