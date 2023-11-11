import React from 'react';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';





function LoginGitHub() {
    const auth = AUTH;
  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // User signed in successfully.
    } catch (error) {
      console.error(error);
      // Error signing in.
    }
  };

  return (
    <button onClick={signInWithGithub}>Sign in with GitHub</button>
  );
}

export default LoginGitHub;