import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './RegisterEmail.css';

function Register() {
  const [email, setEmail] = useState('');
  const [emailRes, setEmailRes] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = AUTH;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado exitosamente");
      navigate('/LoginEmail');
    } catch (error) {
      alert(error);
    }
  };

  const detectEmail = (event, Email, EmailRes) => {
    event.preventDefault();
    if (Email === EmailRes) {
      handleSubmit(event);
    } else {
      alert("El correo electrónico no coincide");
    }
  };
  
 return(

  <>
  <video autoPlay loop muted playsInline className="back-video">
  <source
    src="https://player.vimeo.com/external/476642450.sd.mp4?s=ab80d3071fd28593a0aca4fb7747bbddef3e1fef&profile_id=164&oauth2_token_id=57447761"
    type="video/mp4"
  />
</video>


  <div className='Caja1'>
  <>
  <form onSubmit={(event) => detectEmail(event, email, emailRes)}>
      <label>
        Correo electrónico:
        <input
         type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        confirmar Correo electrónico:
        <input type="email" value={emailRes} onChange={(e) => setEmailRes(e.target.value)} required />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Registrar</button>
    </form>
    <NavLink to="/LoginSelect">
      <button>atras</button>
    </NavLink>
  </>
  </div>
  </>
 )
}

export default Register;