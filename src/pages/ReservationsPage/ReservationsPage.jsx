import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Flex, Text, Button, useToast } from '@chakra-ui/react';
import { Zoom } from 'react-awesome-reveal';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import moment from 'moment';
import axios from 'axios';
import AppointmentModal from '../../components/AppointmentModal/AppointmentModal';

const ReservationsPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();


  useEffect(() => {
    // Obtener todos los usuarios (barberos)
    axios.get('http://localhost:3001/api/user/getAllUsers')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    // Obtener todos los servicios
    axios.get('http://localhost:3001/api/services/getAllServices')
      .then(response => setServices(response.data))
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
    axios.get(`http://localhost:3001/api/appointment/barberAppointments?user_id=${selectedUser._id}&date=${formattedDate}`)
      .then(response => setAppointments(response.data))
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

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateAppointment = async (formData) => {
    try {
      if (!selectedUser || !selectedService || !selectedDate || !selectedTimeSlot) {
        console.error('User, service, date, or time slot not selected.');
        return;
      }

      const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
      const formattedDateTime = moment.utc(`${formattedDate}T${selectedTimeSlot}`).toISOString();

      const requestData = {
        user: selectedUser._id,
        service: selectedService._id,
        date: formattedDateTime,
        customerEmail: formData.email,
        customerName: formData.name,
        customerPhone: formData.phone
      };

      // Realizar la solicitud POST al backend
      await axios.post('http://localhost:3001/api/appointment/createAppointment', requestData);

      setIsModalOpen(false);

      toast({
        title: "Cita creada",
        description: "Tu cita ha sido creada exitosamente.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (error) {
      console.error('Error creating appointment:', error);
      toast({
        title: "Error",
        description: "Hubo un error al crear la cita. Por favor, inténtalo de nuevo más tarde.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
        <Box
          width={'50%'}
          backgroundColor={'whitesmoke'}
          textAlign={'center'}
          padding={'40px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'auto'}
        >
          <Flex direction={'column'}>
            {selectedUser === null && (
              <>
                <Text fontSize={'40px'} padding={'40px'} fontWeight={'bold'}>Seleccione un barbero:</Text>
                <Flex gap={'20px'} justifyContent={'center'}>
                  {users.map(user => (
                    <Button backgroundColor={'black'} color={'white'} key={user._id} onClick={() => handleUserSelect(user)}>
                      {user.username}
                    </Button>
                  ))}
                </Flex>
              </>
            )}{selectedUser !== null && selectedService === null && (
              <>
                <Text fontSize={'40px'} padding={'40px'} fontWeight={'bold'}>Seleccione un servicio:</Text>
                <Flex
                  direction={'row'}
                  justifyContent="center"
                  flexWrap="wrap"
                  gap="20px"
                >
                  {services.map(service => (
                    <Button
                      key={service._id}
                      onClick={() => handleServiceSelect(service)}
                      backgroundColor={'black'}
                      color={'white'}
                    >
                      {service.name}
                    </Button>
                  ))}
                </Flex>
              </>
            )}
            {selectedUser !== null && selectedService !== null && (
              <>
                <Text fontSize={'40px'} padding={'40px'} fontWeight={'bold'}>Seleccione una fecha:</Text>
                <Flex justifyContent={'center'}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={date => handleDateSelect(date)}
                    inline
                    backgroundColor={'black'}
                  />
                </Flex>

                <Text fontSize={'20px'} padding={'20px'} fontWeight={'bold'}>Horarios Disponibles:</Text>
                <Flex
                  direction={'row'}
                  justifyContent="center"
                  flexWrap="wrap" 
                  gap="20px"
                >
                  {availableTimeSlots.map(slot => (
                    <Button
                      key={slot}
                      onClick={() => handleTimeSlotSelect(slot)}
                      backgroundColor={'black'}
                      color={'white'}
                    >
                      {slot}
                    </Button>
                  ))}
                </Flex>

                {/* Modal para crear cita */}
                <AppointmentModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onCreateAppointment={handleCreateAppointment}
                />
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </PageWrapper>
  );
};

export default ReservationsPage;
