import React, { useState, useEffect } from 'react';
import { Grid, Box, Text, Flex } from '@chakra-ui/react';
import data from '../../servicios.json';
import { COLORS } from '../../theme';
import { Slide } from 'react-awesome-reveal';

const ServicesPage = () => {
  const [cortesCabello, setCortesCabello] = useState([]);
  const [cortesBarba, setCortesBarba] = useState([]);
  const [otrosServicios, setOtrosServicios] = useState([]);

  useEffect(() => {
    setCortesCabello(data.corte_de_cabello);
    setCortesBarba(data.corte_de_barba);
    setOtrosServicios(data.otros_servicios);
  }, []);

  const renderizarServicios = (image, servicios) => (
    <Slide>
      <Box p={7} borderWidth="1px" borderColor={COLORS.PRIMARY} borderRadius="md" mb={10} backgroundColor={'rgba(0,0,0, .65)'} >
        <Flex marginBottom={'30'} justifyContent={'center'}>{image}</Flex>
        {servicios.map(servicio => (
          <Box key={servicio.id} mb={10}>
            <Text fontSize={'20px'} mb={1} color={'white'} fontFamily={'Prata'} fontWeight={'bold'}>{servicio.nombre}</Text>
            <Text fontSize={'15px'} color={'#e1dbc8'} fontFamily={'sans-serif'}>{servicio.descripcion}</Text>
            <Text mt={1} fontFamily={'Prata'} color={COLORS.PRIMARY}>Precio: €{servicio.precio}</Text>
          </Box>
        ))}
      </Box>
    </Slide>
  );

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        minHeight="100vh"
        backgroundImage="url('/images/elements.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="30px"
        marginTop={'150px'}
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 1%)',
          maskPosition: 'top'
        }}
      >
        <Flex>
          <Text color={'#e1dbc8'} fontSize={'60px'} fontFamily={'PT Serif'} padding={'20px'}>SERVICIOS</Text>
        </Flex>
        <Flex textAlign={'center'} flexDir={'column'} width={'100%'} padding={'10px 20px'} alignItems={'center'}>
          <Flex>
            <Text color={COLORS.PRIMARY} fontFamily={"Prata"} padding={'20px'} backgroundColor={'rgba(0,0,0, .65)'} borderRadius={'30px'} fontSize={'15px'} marginBottom={'80px'}>Disfruta de la variedad de nuestros mejores servicios que harán que tu confianza aumente instantáneamente.</Text>
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} minWidth="10" fontFamily={"Prata"} alignContent={'center'}>
            {renderizarServicios(<img src='/images/barbershop-scissors.svg' width={'80px'} alt='spray'></img>, cortesCabello)}
            {renderizarServicios(<img src='/images/beard.svg' width={'80px'} alt='spray'></img>, cortesBarba)}
            {renderizarServicios(<img src='/images/beard-spray.svg' width={'80px'} alt='spray'></img>, otrosServicios)}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default ServicesPage;
