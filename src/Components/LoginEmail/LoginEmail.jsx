import React, { useState } from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';
import { Link, NavLink , useNavigate} from 'react-router-dom';
import './LoginEmail.css';

function LoginEmail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = AUTH;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Usuario logueado exitosamente");
      navigate('/')
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='Caja1'>
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
    <NavLink to="/RegisterEmail">
    <button>¡registrese aca!</button>
    </NavLink>
    <NavLink to="/LoginSelect">
      <button>atras</button>
    </NavLink>
    </>
    </div>
  );
}

export default LoginEmail;