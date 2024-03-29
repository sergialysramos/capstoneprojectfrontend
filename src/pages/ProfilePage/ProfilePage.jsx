import React from 'react';
import { useAuth } from './AuthContext';

const ProfilePage = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        // Puedes redirigir al usuario a la página de inicio o a donde desees después de cerrar sesión
    };

    return (
        <div>
            <h2>Perfil de usuario</h2>
            {user && (
                <div>
                    <p>Nombre de usuario: {user.username}</p>
                    <p>Correo electrónico: {user.email}</p>
                    {/* Agrega aquí más detalles del perfil del usuario si los tienes */}
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}
        </div>
    );
};

export default <ProfilePage></ProfilePage>;

