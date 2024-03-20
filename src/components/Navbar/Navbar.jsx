import React from 'react'
import Logo from '../Logos/Logo'
import { useLocation } from 'react-router-dom'
import { Flex, Text } from '@chakra-ui/react'
import { COLORS } from '../../theme'
import CustomLink from '../CustomLink/CustomLink'
import SpinningText from '../SpinningText/SpinningText';

const Navbar = () => {
    const NAVIGATION_LINK = [
        { link: '/', text: 'inicio' },
        { link: '/services', text: 'servicios' },
        { link: '/reservations', text: 'reservas' },
        { link: '/location', text: 'ubicación' }
    ]

    const location = useLocation();

    return (
        <Flex padding={'10px 50px'}
            justifyContent={'space-between'}
            alignItems={'center'}>
                
            <CustomLink to="/">
                
                <SpinningText  text="Mustach • Barbershop • ">
                <Logo color={COLORS.PRIMARY} />
                </SpinningText>
            </CustomLink>

            <Flex gap={'60px'} >
                {NAVIGATION_LINK.map(({ link, text }) => {
                    const isActiveLink = location.pathname === link;
                    return (
                        <CustomLink
                            to={link}
                            key={text}
                            textDecoration={isActiveLink ? 'underline' : 'none'}
                            fontWeight={isActiveLink ? 'bold' : 'normal'}
                            color={isActiveLink ? 'white' : COLORS.TERTIARY}
                        >
                            <Text fontWeight={'bold'} fontFamily={'sans-serif'} textTransform={'uppercase'}>{text}</Text>
                        </CustomLink>
                    );
                })}
            </Flex>
        </Flex>
    )
}

export default Navbar;
