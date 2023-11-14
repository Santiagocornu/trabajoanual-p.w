import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { app, AUTH } from '../../firebase/firestore';
import axios from 'axios';
import ChangeName from '../ChangeName/ChangeName';
import PasswordChange from '../ChangePassword/ChangePassword';

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
    <div>
      Naza
      {isLoggedIn && <p>{userName}</p>}
      <NavLink to="LoginSelect">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Desloguearse</button>
            <button onClick={handleDeleteUser}>Eliminar Usuario</button>
          </>
        ) : (
          <button>Loguearse</button>
        )}
      </NavLink>
      <ChangeName></ChangeName>
      <PasswordChange></PasswordChange>
    </div>
  );
};

export default Naza;