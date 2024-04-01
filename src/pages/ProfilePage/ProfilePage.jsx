// En el componente ProfilePage
import React, { useContext, useEffect, useState } from 'react';
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/Title/Title';
import { Flex, Text } from '@chakra-ui/react';
import { AuthContext } from '../../contexts/AuthContext';
import AppointmentsTable from '../../components/AppointmentsTable/AppointmentsTable';
import dataService from '../../services/data.service';
import { COLORS } from '../../theme';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);
    const { username, email, avatar, phone } = user;
    const [appointments, setAppointments] = useState([]);

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

    useEffect(() => {
        fetchUserAppointments();
    }, [user]);

    const handleUserEdit = () => {};
    const handleUserDeletion = () => {};

    const handleStatusUpdate = async (appointmentId, status) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("No token found");
                return;
            }
            await dataService.updateAppointmentStatus(token, appointmentId, status);
            // Refetch appointments after update
            fetchUserAppointments();
        } catch (error) {
            console.error('Error updating appointment status:', error);
        }
    };

    return (
        <PageWrapper>
            <Flex flexDir={"column"} gap={"44px"}>
                <Title color={COLORS.PRIMARY}>Bienvenido {username}!</Title>
                <ProfileBanner
                    username={username}
                    email={email}
                    avatar={avatar}
                    phone={phone}
                    handleUserDeletion={handleUserDeletion}
                    handleUserEdit={handleUserEdit}
                />
                <Text fontSize={'30px'} textAlign={'center'} color={'white'} fontWeight={'bold'}>Tus Citas:</Text>
                <AppointmentsTable appointments={appointments} handleStatusUpdate={handleStatusUpdate} />
            </Flex>
        </PageWrapper>
    );
};

export default ProfilePage;
