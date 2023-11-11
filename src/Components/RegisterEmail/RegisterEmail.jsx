import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = AUTH;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Usuario registrado exitosamente
    } catch (error) {
      console.error(error);
      // Error al registrar usuario
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
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;