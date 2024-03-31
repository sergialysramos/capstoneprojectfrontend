import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'; // Importa el idioma español
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Zoom } from 'react-awesome-reveal';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const ReservationsPage = () => {
  const localizer = momentLocalizer(moment);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para almacenar la fecha seleccionada
  const [showAvailability, setShowAvailability] = useState(false); // Estado para controlar la visibilidad del submenú

  // Establece el idioma español para el calendario
  moment.locale('es');

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
      <PageWrapper>
      <Flex>
        {/* Contenedor de la imagen en el lado izquierdo */}
        <Box 
          width={'50%'} 
          background={`url('/images/jason-leung-2seUdPQNy_I-unsplash.jpg')`} // Ruta a la imagen de fondo
          backgroundSize={'cover'} 
          backgroundPosition={'center'} 
          padding={'100px'} 
        >
          <Zoom>
            <Text fontFamily={'Martel'} color={'white'} fontWeight={'bold'} fontSize={'20px'} marginBottom={'60px'} textAlign={'center'}>BOOK A SEAT</Text>
            <Text textAlign={'center'} fontFamily={'Martel'} fontSize={'36px'} fontWeight={'bold'} color={'white'} marginBottom={'60px'}>¡SOLICITA TU CITA AHORA!</Text>
            <Text color={'white'} fontFamily={'sans-serif'} textAlign={'center'}>Reserva tu próxima cita en nuestro salon desde nuestro sitio web. Si deseas tu cita en las próximas 24 horas, haz tu reserva a través de nuestro teléfono:</Text>
            <Text textAlign={'center'} fontFamily={'sans-serif'} color={'rgba(244, 235, 163, 0.7)'}> +34 12 123 51 55.¡te esperamos!</Text>
          </Zoom>
        </Box>
        {/* Contenedor del calendario en el lado derecho */}
        <Box width={'50%'} backgroundColor={'whitesmoke'}>
          <div style={{ height: '400px', width: '100%', padding: '20px' }}>
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
        </Box>
      </Flex>
      </PageWrapper>
  );
};

export default ReservationsPage;
