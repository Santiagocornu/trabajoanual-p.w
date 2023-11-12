import React from 'react';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginGitHub() {
    const auth = AUTH;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  const signInWithGithub = async () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Usuario logueado exitosamente");
      navigate('/'); // Redirige al usuario a la ruta raíz
    } catch (error) {
      alert(error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={signInWithGithub} disabled={loading}>
      {loading ? "Cargando..." : "Iniciar sesión con GitHub"}
    </button>
  );
}

export default LoginGitHub;