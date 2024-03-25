import { Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { COLORS } from '../../theme';
import { Link } from 'react-router-dom';
import { Rotate, Slide } from 'react-awesome-reveal';


const HomePage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      minHeight="100vh"
      backgroundImage="url('/images/barbershop.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      padding="100px"
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 1%)',
        maskPosition: 'top',
      }}
    >
      <Rotate>
        <Text color={'white'} fontSize={'70px'} fontFamily={'Bookman Old Style'} marginBottom="0px">
          MUSTACH
        </Text>
        <Text color={COLORS.PRIMARY} fontSize={'30px'} fontFamily={'Helvetica Neue'} marginBottom="100px">
          BARBERSHOP
        </Text>
      </Rotate>
      
      <Slide>
        <Link to="/reservations">
          <Button
            backgroundColor={COLORS.SECONDARY}
            border={'2px'}
            borderColor={COLORS.PRIMARY}
            textColor={'white'}
            _hover={{ bg: 'rgba(0,0,0, .85)' }}
            _active={{
              bg: '#bec3c9',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
            _focus={{
              boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            fontFamily={'PT Serif'}
          >
            Reserva ahora
          </Button>
        </Link>
      </Slide>
    </Flex>
  );
};

export default HomePage;






