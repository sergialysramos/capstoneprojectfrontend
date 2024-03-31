import React, { useContext } from 'react'
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Title from '../../components/Title/Title'
import { Flex } from '@chakra-ui/react'
import { AuthContext } from '../../contexts/AuthContext'



const ProfilePage = () => {
    const {user} = useContext(AuthContext)
    const { username, email, avatar, phone } = user
    
    const handleUserEdit = () => { }
    const handleUserDeletion = () => { }



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
            handleUserEdit={handleUserEdit} />
        </Flex>
        </PageWrapper>
    )
}

export default ProfilePage

