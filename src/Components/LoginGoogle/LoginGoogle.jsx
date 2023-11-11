import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';
import { useNavigate } from 'react-router-dom';

function LoginGoogle() {
  const [loading, setLoading] = useState(false);
  const auth = AUTH;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      alert("Usuario logueado exitosamente");
      navigate('/'); // Redirige al usuario a la ruta raíz
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={signInWithGoogle} disabled={loading}>
      {loading ? "Cargando..." : "Iniciar sesión con Google"}
    </button>
  );
}

export default LoginGoogle;