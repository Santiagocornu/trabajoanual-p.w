import React from 'react';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';
import { useNavigate } from 'react-router-dom';

function LoginGitHub() {
    const auth = AUTH;
    const navigate = useNavigate();
  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Usuario logueado exitosamente");
      navigate('/'); // Redirige al usuario a la ruta raíz
    } catch (error) {
      alert(error);
    }
  };

  return (
    <button onClick={signInWithGithub}>Sign in with GitHub</button>
  );
}

export default LoginGitHub;