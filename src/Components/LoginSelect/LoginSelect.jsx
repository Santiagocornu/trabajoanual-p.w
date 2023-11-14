import React from 'react';
import LoginGitHub from '../LoginGitHub/LoginGitHub';
import LoginGoogle from '../LoginGoogle/LoginGoogle';
import { Link, NavLink } from 'react-router-dom';
import './LoginSelect.css';

function LoginSelect() {

  return (
    <div>
      <LoginGitHub/>
      <LoginGoogle/>
      <NavLink to="/LoginEmail">
      <button>Iniciar sesión con Mail</button>
      </NavLink>
      <NavLink to="/">
      <button>entrar sin loguearse</button>
      </NavLink>
    </div>
  );
}

export default LoginSelect;