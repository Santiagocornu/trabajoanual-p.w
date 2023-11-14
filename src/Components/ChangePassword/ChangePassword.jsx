import React, { useState } from 'react';
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { AUTH } from '../../firebase/firestore';

function PasswordChange() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const auth=AUTH;

    const handleChangePassword = async () => {
        // Reautenticar al usuario
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(
            user.email, 
            currentPassword
        );

        try {
            await reauthenticateWithCredential(user, credential);
        } catch (error) {
            console.error(error);
            return;
        }

        // Cambiar la contraseña
        try {
            await updatePassword(user, newPassword);
            alert('Contraseña actualizada con éxito');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input 
                type="password" 
                value={currentPassword} 
                onChange={e => setCurrentPassword(e.target.value)} 
                placeholder="Contraseña actual"
            />
            <input 
                type="password" 
                value={newPassword} 
                onChange={e => setNewPassword(e.target.value)} 
                placeholder="Nueva contraseña"
            />
            <button onClick={handleChangePassword}>
                Cambiar Contraseña
            </button>
        </div>
    );
}

export default PasswordChange;
