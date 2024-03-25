import React from 'react';
import { AspectRatio, Box, Grid } from '@chakra-ui/react';

const LocationPage = () => {
  return (
    <>
    <Grid templateColumns="repeat(2, 1fr)" marginBottom={'200px'} marginTop={'200px'}>
    <Box width={'75%'} alignContent={'center'} margin={'0 auto'}>
    <img src='/images/blackandwhite.jpg' alt="" />
    </Box>
    <Box width={'95%'} alignContent={'center'} margin={'0 auto'}>
      <AspectRatio ratio={5 / 4} >
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.9303848118307!2d-3.7092416249187785!3d40.41039295602644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzM3LjQiTiAzwrA0MicyNC4wIlc!5e0!3m2!1ses!2ses!4v1711370353423!5m2!1ses!2ses" height={'100px'}  loading="lazy"></iframe>
      </AspectRatio>
    </Box>
    </Grid>
    </>
  )
};

export default LocationPage;


