import React, { useMemo } from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { JackInTheBox } from 'react-awesome-reveal';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const LocationPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  });

  const containerStyle = {
    width: '500px',
    height: '500px'
  };

  const center = useMemo(() => ({
    lat: 40.40425297456302,
    lng: -3.702034253838755
  }), []);

  return (
    <Box width={'90%'} backgroundColor={'rgba(67, 66, 65, 2)'} margin={'30px auto'} padding={'70px'} borderRadius={'10px'} marginTop={'150px'}>
      <Grid templateColumns="repeat(2, 1fr)" marginBottom={'100px'}>
        <Box textAlign={'center'} fontFamily={'sans-serif'} fontSize={'20px'} padding={'40px'}>
          <JackInTheBox>
            <Text fontFamily={'Martel'} color={'(255, 249, 249, 0.5)'} fontWeight={'bold'} fontSize={'20px'} marginBottom={'60px'}>VISIT OUR BARBERSHOP</Text>
            <Text textAlign={'center'} fontFamily={'Martel'} fontSize={'36px'} fontWeight={'bold'} color={'white'} marginBottom={'60px'}>Calle de Embajadores, Centro 28012.</Text>
            <Flex justifyContent={'center'} marginBottom={'80px'}>
              <img src='/images/locationgold.svg' alt="location" width={'90px'} height={'90px'} />
            </Flex>
            <Text color={'gray'} fontFamily={'sans-serif'}>Te aseguramos que no te dejará indiferente. Nuestro mayor objetivo, la satisfacción de nuestros clientes.</Text>
          </JackInTheBox>
        </Box>
        <Box width={'95%'} alignContent={'center'} margin={'0 auto'}>
          {isLoaded && (
            <GoogleMap
              center={center}
              zoom={16}
              mapContainerStyle={containerStyle}
            >
              <Marker position={center} />
            </GoogleMap>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default LocationPage;

