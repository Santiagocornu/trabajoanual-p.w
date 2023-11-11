import React, { useState } from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = AUTH;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Usuario inició sesión exitosamente
    } catch (error) {
      console.error(error);
      // Error al iniciar sesión
    }
  };

  return (
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
  );
}

export default Login;