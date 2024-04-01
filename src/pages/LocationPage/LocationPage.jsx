import React, { Component } from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { JackInTheBox } from 'react-awesome-reveal';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

class LocationPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.initMap();
  }

  initMap = () => {
    // Eliminar cualquier script de la API de Google Maps existente
    const existingScript = document.querySelector('[src^="https://maps.googleapis.com/maps/api/js"]');
    if (existingScript) {
      existingScript.remove();
    }
  
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.defer = true;
    script.async = true;
    script.onerror = () => {
      console.error('Error al cargar el script de la API de Google Maps.');
    };
    
    script.onload = () => {
      // Aquí puedes utilizar la API de Google Maps, por ejemplo, crear el mapa y agregar marcadores
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.40425297456302, lng: -3.702034253838755 },
        zoom: 16
      });
  
      new window.google.maps.Marker({
        position: { lat: 40.40425297456302, lng: -3.702034253838755 },
        map: map,
        title: 'Barbershop Location'
      });
    };
  
    document.head.appendChild(script);
  };
  

  render() {
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
            <div id="map" style={{ height: "400px", width: "100%" }} />
          </Box>
        </Grid>
      </Box>
    );
  }
}

export default LocationPage;






