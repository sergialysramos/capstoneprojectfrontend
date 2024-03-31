import React, { useState, useEffect, useContext } from 'react';
import authService from '../services/auth.service'; // Importar authService para obtener los appointments
import { AuthContext } from '../../contexts/AuthContext'; // Importar AuthContext para acceder al token de autenticación

const AppointmentsTable = () => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            const token = user.token;

            const getAppointments = async () => {
                try {
                    await authService.setToken(token); // Establecer el token en el servicio de autenticación
                    const appointmentsData = await authService.getAppointments();
                    setAppointments(appointmentsData);
                } catch (error) {
                    console.error('Error al obtener las citas:', error);
                }
            };

            getAppointments();
        }
    }, [user]);

    return (
        <div>
            <h2>Tabla de Citas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment._id}>
                            <td>{appointment.customer}</td>
                            <td>{new Date(appointment.date).toLocaleString()}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsTable;
