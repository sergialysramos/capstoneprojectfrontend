import React from 'react';
import Logo from '../Logos/Logo';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Flex, Text } from '@chakra-ui/react';
import { COLORS } from '../../theme';
import CustomLink from '../CustomLink/CustomLink';
import SpinningText from '../SpinningText/SpinningText';
import AuthLink from '../AuthLink/AuthLink';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const NAVIGATION_LINK = [
        { link: '/', text: 'inicio' },
        { link: '/services', text: 'servicios' },
        { link: '/reservations', text: 'reservas' },
        { link: '/location', text: 'ubicación' },
        { link: '/login', text: 'Login' }
    ]

    const location = useLocation();

    return (
        <Flex
            padding={'10px 50px'}
            justifyContent={'space-between'}
            alignItems={'center'}
            position="fixed"
            top={0}
            width="100%"
            zIndex={999}
            backgroundColor={'rgba(0, 0, 0, 0.9)'}
        >
            <CustomLink to="/">
                <SpinningText text="Mustach • Barbershop • ">
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
            <Flex gap={"20px"}>
                {user ? (
                    <>
                        <AuthLink to={"/profile"}>Profile</AuthLink>
                        <AuthLink onClick={logout}>Logout</AuthLink>
                    </>
                ) : (
                        <>
                            <AuthLink to={"/login"}>Login</AuthLink>
                        </>
                    )}
            </Flex>
        </Flex>
    )
}

export default Navbar;

