import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const ReservationsPage = () => {
  const localizer = momentLocalizer(moment);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para almacenar la fecha seleccionada
  const [showAvailability, setShowAvailability] = useState(false); // Estado para controlar la visibilidad del submenú

  // Datos de ejemplo para las reservas existentes
  const reservas = [
    {
      id: 1,
      title: 'Reserva 1',
      start: new Date(2024, 2, 28, 10, 0), // 28 de marzo de 2024 a las 10:00 AM
      end: new Date(2024, 2, 28, 11, 0),
    },
    {
      id: 2,
      title: 'Reserva 2',
      start: new Date(2024, 2, 29, 11, 0), // 29 de marzo de 2024 a las 11:00 AM
      end: new Date(2024, 2, 29, 12, 0),
    },
    
  ];

  // Función para manejar la selección de una fecha en el calendario
  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start); // Almacena la fecha seleccionada en el estado
    setShowAvailability(true); // Muestra el submenú cuando se selecciona una fecha
  };

  
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('/images/pexels-nikolaos-dimou-1319459.jpg')", // Agrega la imagen de fondo aquí
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div style={{  marginTop:'60px',height: '400px', width: '400px' }}>
        <BigCalendar
          localizer={localizer}
          events={reservas}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot} // Maneja la selección de una fecha
          style={{ flex: 1 }}
        />
        {/* Muestra el submenú si se ha seleccionado una fecha */}
        {showAvailability && (
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
            <h2 style={{ marginBottom: '10px' }}>Disponibilidad para {moment(selectedDate).format('LL')}</h2>
            {/* Muestra las reservas existentes */}
            <ul>
              {reservas.map(reserva => (
                <li key={reserva.id}>
                  {moment(reserva.start).format('LT')} - {moment(reserva.end).format('LT')} ({reserva.title})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ReservationsPage;


















