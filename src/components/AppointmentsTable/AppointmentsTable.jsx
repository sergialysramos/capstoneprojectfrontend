// En el componente AppointmentsTable
import React from 'react';
import "./AppointmentsTable.css"

const AppointmentsTable = ({ appointments, handleStatusUpdate }) => {
    const appointmentList = appointments.appointments || [];
    
    const handleClick = (appointmentId, status) => {
        handleStatusUpdate(appointmentId, status);
    };

    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Confirmar</th>
                        <th>Cancelar</th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentList.map(appointment => (
                        <tr key={appointment._id}>
                            <td>{appointment.customer}</td>
                            <td>{new Date(appointment.date).toLocaleString()}</td>
                            <td>{appointment.status}</td>
                            <td><button className='confirmed' onClick={() => handleClick(appointment._id, 'confirmed')}>✅</button></td>
                            <td><button className='cancelled' onClick={() => handleClick(appointment._id, 'cancelled')}>❌</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsTable;
