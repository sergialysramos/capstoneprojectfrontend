import React from 'react';
import "./AppointmentsTable.css"

const AppointmentsTable = ({ appointments }) => {
    const appointmentList = appointments.appointments || [];
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
                            <td><button>✅</button></td>
                            <td><button>❌</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


};

export default AppointmentsTable;
