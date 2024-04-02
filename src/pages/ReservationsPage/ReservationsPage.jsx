import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Zoom } from 'react-awesome-reveal';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import moment from 'moment';

const ReservationsPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    // Obtener todos los usuarios (barberos)
    fetch('http://localhost:3001/api/user/getAllUsers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    // Obtener todos los servicios
    fetch('http://localhost:3001/api/services/getAllServices')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const formattedDate = moment(date).format('YYYY-MM-DD');
    // Realizar la consulta para obtener las citas del barbero seleccionado para la fecha seleccionada
    fetch(`http://localhost:3001/api/appointment/barberAppointments?user_id=${selectedUser._id}&date=${formattedDate}`)
      .then(response => response.json())
      .then(data => {
        setAppointments(data)})
      .catch(error => console.error('Error fetching appointments:', error));
  };

  useEffect(() => {
    if (selectedUser && selectedDate) {
      // Calcular los horarios disponibles basados en la hora de inicio y fin de jornada del barbero
      const startHour = selectedUser.schedule.hours.start;
      const endHour = selectedUser.schedule.hours.end;
      const timeSlots = [];

      // Generar intervalos de 30 minutos desde la hora de inicio hasta la hora de fin
      let currentTime = moment(startHour, 'HH:mm');
      const endTime = moment(endHour, 'HH:mm');
      while (currentTime.isSameOrBefore(endTime)) {
        timeSlots.push(currentTime.format('HH:mm'));
        currentTime.add(30, 'minutes');
      }

      // Filtrar los horarios disponibles para eliminar las horas en las que el barbero ya tenga una reserva
      const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
      const filteredTimeSlots = timeSlots.filter(slot => {
        const slotStart = moment.utc(`${formattedDate}T${slot}`).toDate();
        const slotEnd = moment.utc(`${formattedDate}T${slot}`).add(30, 'minutes').toDate();
        return !appointments.some(appointment => {
          const appointmentStart = moment.utc(appointment.date).toDate();
          const appointmentEnd = moment.utc(appointment.dateEnd).toDate();
          return appointmentStart <= slotStart && appointmentEnd >= slotEnd;
        });
      });

      setAvailableTimeSlots(filteredTimeSlots);
    }
  }, [selectedUser, selectedDate, appointments]);


  return (
    <PageWrapper>
      <Flex>
        <Box width={'50%'} background={`url('/images/jason-leung-2seUdPQNy_I-unsplash.jpg')`} backgroundSize={'cover'} backgroundPosition={'center'} padding={'100px'}>
          <Zoom>
            <Text fontFamily={'Martel'} color={'white'} fontWeight={'bold'} fontSize={'20px'} marginBottom={'60px'} textAlign={'center'}>BOOK A SEAT</Text>
            <Text textAlign={'center'} fontFamily={'Martel'} fontSize={'36px'} fontWeight={'bold'} color={'white'} marginBottom={'60px'}>¡SOLICITA TU CITA AHORA!</Text>
            <Text color={'white'} fontFamily={'sans-serif'} textAlign={'center'}>Reserva tu próxima cita en nuestro salon desde nuestro sitio web. Si deseas tu cita en las próximas 24 horas, haz tu reserva a través de nuestro teléfono:</Text>
            <Text textAlign={'center'} fontFamily={'sans-serif'} color={'rgba(244, 235, 163, 0.7)'}> +34 12 123 51 55.¡te esperamos!</Text>
          </Zoom>
        </Box>
        <Box width={'50%'} backgroundColor={'whitesmoke'} textAlign={'center'} alignContent={'center'} alignItems={'center'} padding={'30px'}>
          <div>
            {selectedUser === null && (
              <div>
                <h2>Seleccione un barbero:</h2>
                <ul>
                  {users.map(user => (
                    <li key={user._id} onClick={() => handleUserSelect(user)}>
                      {user.username}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedUser !== null && selectedService === null && (
              <div>
                <h2>Seleccione un servicio:</h2>
                <ul>
                  {services.map(service => (
                    <li key={service._id} onClick={() => handleServiceSelect(service)}>
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedUser !== null && selectedService !== null && (
              <div>
                <h2>Seleccione una fecha:</h2>
                <DatePicker
                  selected={selectedDate}
                  onChange={date => handleDateSelect(date)}
                  inline
                />

                {/* Mostrar los horarios disponibles */}
                <h3>Horarios Disponibles:</h3>
                <ul>
                  {availableTimeSlots.map(slot => (
                    <li key={slot}>{slot}</li>
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
