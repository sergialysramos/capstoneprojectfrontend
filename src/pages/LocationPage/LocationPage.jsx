import React, { Component } from 'react';
import { AspectRatio, Box, Flex, Grid, Text } from '@chakra-ui/react';
import { JackInTheBox } from 'react-awesome-reveal';

class LocationPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Box width={'90%'} backgroundColor={'rgba(67, 66, 65, 2)'} margin={'30px auto'} padding={'70px'} borderRadius={'10px'} marginTop={'150px'}>
        <Grid templateColumns="repeat(2, 1fr)" marginBottom={'100px'} >
          <Box textAlign={'center'} fontFamily={'sans-serif'} fontSize={'20px'} padding={'40px'} >
            <JackInTheBox>
              <Text fontFamily={'Martel'} color={'(255, 249, 249, 0.5)'} fontWeight={'bold'} fontSize={'20px'}  marginBottom={'60px'}>VISIT OUR BARBERSHOP</Text>
              <Text textAlign={'center'} fontFamily={'Martel'} fontSize={'36px'} fontWeight={'bold'} color={'white'}  marginBottom={'60px'}>Calle de Embajadores, Centro 28012.</Text>
              <Flex justifyContent={'center'} marginBottom={'80px'}>
                <img src='/images/locationgold.svg' alt="location" width={'90px'} height={'90px'} />
              </Flex>
              <Text  color={'gray'} fontFamily={'sans-serif'}>Te aseguramos que no te dejará indiferente. Nuestro mayor objetivo, la satisfacción de nuestros clientes.</Text>
            </JackInTheBox>
          </Box>
          <Box width={'95%'} alignContent={'center'} margin={'0 auto'}>
            <AspectRatio ratio={5 / 7} >
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.9303848118307!2d-3.7092416249187785!3d40.41039295602644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzM3LjQiTiAzwrA0MicyNC4wIlc!5e0!3m2!1ses!2ses!4v1711370353423!5m2!1ses!2ses" height={'100px'} loading="lazy"></iframe>
            </AspectRatio>
          </Box>
        </Grid>
      </Box>
    );
  }
}

export default LocationPage;



