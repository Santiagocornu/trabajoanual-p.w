import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { app, AUTH } from '../../firebase/firestore';

const Naza = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AUTH.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
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
    </div>
  );
};

export default Naza;