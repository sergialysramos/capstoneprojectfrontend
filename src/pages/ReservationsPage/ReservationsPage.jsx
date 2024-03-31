import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Flex, Text } from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/es';
import { Zoom } from 'react-awesome-reveal';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import AppointmentModal from '../../components/AppointmentModal/AppointmentModal';

const ReservationsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchAvailableSlots = async (date) => {
    try {
      const response = await fetch(`/api/availability?date=${date}`);
      const data = await response.json();
      setAvailableSlots(data.slots);
    } catch (error) {
      console.error('Error fetching available slots:', error);
    }
  };

  useEffect(() => {
    fetchAvailableSlots(moment(selectedDate).format('YYYY-MM-DD'));
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectSlot = () => {
    setShowModal(true);
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
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              showTimeSelect
            />
            <button onClick={handleSelectSlot}>Select Slot</button>
          </div>
        </Box>
      </Flex>
      {showModal && (
        <AppointmentModal
          selectedDate={selectedDate}
          availableSlots={availableSlots}
          onClose={handleCloseModal}
        />
      )}
    </PageWrapper>
  );
};

export default ReservationsPage;
