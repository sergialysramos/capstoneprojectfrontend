import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/es';
import { Zoom } from 'react-awesome-reveal';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import AppointmentModal from '../../components/AppointmentModal/AppointmentModal';

const ReservationsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableBarbers, setAvailableBarbers] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [availableServices, setAvailableServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAvailableBarbers();
  }, []);

  const fetchAvailableBarbers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/user/getAllUsers');
      const users = await response.json();
      setAvailableBarbers(users);
    } catch (error) {
      console.error('Error fetching available barbers:', error);
    }
  };

  const fetchAvailableServices = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/services/getAllServices`);
      const services = await response.json();
      setAvailableServices(services);
    } catch (error) {
      console.error('Error fetching available services:', error);
    }
  };

  const fetchAvailableSlots = async (userId, date) => {
    try {
      const response = await fetch(`http://localhost:3001/api/appointment/barberAppointments?user_id=${userId}&date=${date}`);
      const appointments = await response.json();
      setAvailableSlots(appointments);
    } catch (error) {
      console.error('Error fetching available slots:', error);
    }
  };

  const handleBarberSelection = (userId) => {
    setSelectedBarber(userId);
    fetchAvailableServices(userId);
  };

  const handleServiceSelection = (serviceId) => {
    setSelectedService(serviceId);
    setShowModal(true); // Mostrar el modal cuando se selecciona un servicio
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (selectedBarber) {
      fetchAvailableSlots(selectedBarber, moment(date).format('YYYY-MM-DD'));
    }
  };

  const handleSelectSlot = () => {
    // Aquí puedes realizar la lógica para manejar la selección de horario
    // Por ahora, solo cerramos el modal
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        <Box width={'50%'} backgroundColor={'whitesmoke'}>
          <div style={{ padding: '20px' }}>
            <Flex flexDirection={'column'} alignItems={'center'}>
              {availableBarbers.map((barber) => (
                <Button key={barber.id} onClick={() => handleBarberSelection(barber.id)}>{barber.username}</Button>
              ))}
            </Flex>
            {selectedBarber && (
              <Flex flexDirection={'column'} alignItems={'center'} marginTop={'20px'}>
                {availableServices.map((service) => (
                  <Button key={service.id} onClick={() => handleServiceSelection(service.id)}>{service.name}</Button>
                ))}
              </Flex>
            )}
            {showModal && selectedService && (
              <Flex flexDirection={'column'} alignItems={'center'} marginTop={'20px'}>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  inline
                  showTimeSelect
                />
                <Button onClick={handleSelectSlot}>Seleccionar Horario</Button>
              </Flex>
            )}
          </div>
        </Box>
      </Flex>
      <AppointmentModal
        selectedDate={selectedDate}
        availableSlots={availableSlots}
        onClose={handleCloseModal}
        handleSlotSelection={handleSelectSlot} // Pasar la función de selección de horario al modal
      />
    </PageWrapper>
  );
};

export default ReservationsPage;
