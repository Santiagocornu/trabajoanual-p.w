// LoginSelect.js

import React from 'react';
import LoginGitHub from '../LoginGitHub/LoginGitHub';
import LoginGoogle from '../LoginGoogle/LoginGoogle';
import { NavLink } from 'react-router-dom';
import './LoginSelect.css';

function LoginSelect() {
  return (
    <>
    <video autoPlay loop muted playsInline className="back-video">
    <source
      src="https://player.vimeo.com/external/476642450.sd.mp4?s=ab80d3071fd28593a0aca4fb7747bbddef3e1fef&profile_id=164&oauth2_token_id=57447761"
      type="video/mp4"
    />
  </video>
  
    <div className="Caja1">
      <p className='p'> Iniciar Sesion</p>
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
    </>
  );
}

export default LoginSelect;
