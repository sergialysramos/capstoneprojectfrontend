import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const AppointmentModal = ({ isOpen, onClose, onCreateAppointment }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateAppointment = () => {
    onCreateAppointment({ email, name, phone });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Crear Cita</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt={4}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input 
              placeholder='Introduzca su correo' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Nombre</FormLabel>
            <Input 
              placeholder='Introduzca su nombre' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Teléfono</FormLabel>
            <Input 
              placeholder='Introduzca su teléfono' 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateAppointment}>
            Crear Cita
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AppointmentModal;
