import { Flex, Box, Text, Divider } from '@chakra-ui/react';
import React from 'react';
import { COLORS } from '../../theme';
import Logo from '../Logos/Logo';
import CustomLink from '../CustomLink/CustomLink';
import SpinningText from '../SpinningText/SpinningText';
import InstagramIcon from "../InstagramIcon/InstagramIcon"
import FacebookIcon from "../FacebookIcon/FacebookIcon"
import TiktokIcon from "../TiktokIcon/TiktokIcon"


const Footer = () => {
    const ICONS = [
        {
            component: <InstagramIcon />,
            link: "https://www.instagram.com/",
            id: 1,
        },
        {
            component: <FacebookIcon />,
            link: "https://www.facebook.com/",
            id: 2,
        },
        {
            component: <TiktokIcon />,
            link: "https://tiktok.com/",
            id: 3,
        },
    ]
    return (
        <footer>
            <Divider borderColor={COLORS.PRIMARY} />
            <Flex justify="space-between" p={4} >
                <Box>
                    <CustomLink to="/">
                        <SpinningText text="Mustach • Barbershop • ">
                            <Logo color={COLORS.PRIMARY} w={1} h={1} />
                        </SpinningText>
                    </CustomLink>
                </Box>
                <Box marginTop={'5'} textAlign={'center'}>
                    <Text fontWeight="bold" fontFamily={'serif'} color={'white'} >OPEN:</Text>
                    <Text>Lunes-Sabado</Text>
                    <Text>09:00am-20:00pm</Text>
                </Box>
                <Flex alignItems="center">
                    {ICONS.map(({ component, link, id }) => {
                        return (
                            <Box key={id} marginLeft={4}>
                                <CustomLink to={link} cursor={"pointer"}>
                                    {component}
                                </CustomLink>
                            </Box>
                        )
                    })}
                </Flex>
            </Flex>
            <Divider borderColor={COLORS.PRIMARY} />
            <Box p={2} textAlign="center" fontSize={'15'} backgroundColor={'#000111'} marginBottom={'5'}>
                <Text>&copy; Copyright 2024 Mustach Barbershop. Todos los derechos reservados.</Text>
            </Box>
        </footer>
    );
};

export default Footer;
