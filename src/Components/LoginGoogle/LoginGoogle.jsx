import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { AUTH } from '../../firebase/firestore';





function LoginGoogle() {
    const auth = AUTH;
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // User signed in successfully.
    } catch (error) {
      console.error(error);
      // Error signing in.
    }
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

export default LoginGoogle;