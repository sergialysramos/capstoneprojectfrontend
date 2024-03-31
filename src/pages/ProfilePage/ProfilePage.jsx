import React, { useContext, useEffect, useState } from 'react';
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/Title/Title';
import { Flex, Text } from '@chakra-ui/react';
import { AuthContext } from '../../contexts/AuthContext';
import AppointmentsTable from '../../components/AppointmentsTable/AppointmentsTable';
import dataService from '../../services/data.service'

const ProfilePage = () => {
    const { user } = useContext(AuthContext);
    const { username, email, avatar, phone } = user;
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchUserAppointments = async () => {
            try {
                if (!user) return;
        
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No token found");
                    return;
                }
                const appointmentsData = await dataService.getUserAppointments(token, user.id);
                setAppointments(appointmentsData);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };
        fetchUserAppointments(); // Llamamos a la función directamente en el useEffect
    }, [user]);

    const handleUserEdit = () => {};
    const handleUserDeletion = () => {};
    
    return (
        <PageWrapper>
            <Flex flexDir={"column"} gap={"44px"}>
                <Title>Bienvenido {username}!</Title>
                <ProfileBanner
                    username={username}
                    email={email}
                    avatar={avatar}
                    phone={phone}
                    handleUserDeletion={handleUserDeletion}
                    handleUserEdit={handleUserEdit}
                />
                <Text fontSize={'30px'} textAlign={'center'} color={'white'}>Tus Citas:</Text>
                <AppointmentsTable appointments={appointments} />
            </Flex>
        </PageWrapper>
    );
};

export default ProfilePage;
