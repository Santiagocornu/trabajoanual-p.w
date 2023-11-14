// LoginSelect.js

import React from 'react';
import LoginGitHub from '../LoginGitHub/LoginGitHub';
import LoginGoogle from '../LoginGoogle/LoginGoogle';
import { NavLink } from 'react-router-dom';
import './LoginSelect.css';

function LoginSelect() {
  return (
    <div className="Caja1">
      <div className="button-container">
        <LoginGitHub />
        <LoginGoogle />
        <NavLink to="/LoginEmail">
          <button className="login-button">Iniciar sesión con Mail</button>
        </NavLink>
        <div className="separator"></div> {/* Agregamos un separador */}
        <NavLink to="/">
          <button className="login-button">entrar sin loguearse</button>
        </NavLink>
      </div>
    </div>
  );
}

export default LoginSelect;
