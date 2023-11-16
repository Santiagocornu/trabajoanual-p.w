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
<>
    <video autoPlay loop muted playsInline className="back-video">
    <source
      src="https://player.vimeo.com/external/476642450.sd.mp4?s=ab80d3071fd28593a0aca4fb7747bbddef3e1fef&profile_id=164&oauth2_token_id=57447761"
      type="video/mp4"
    />
  </video>
    
    <div className='Caja1'>
      <p className='p'>
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
    </p>
    </div>
  
    </>
    
  );
}

export default LoginEmail;