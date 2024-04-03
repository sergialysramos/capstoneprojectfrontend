import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import EditPenIcon from "../EditPenIcon/EditPenIcon"

const ProfileBanner = ({
    avatar,
    username,
    email,
    phone,
    handleUserEdit,
}) => {
    return (
        <Flex justifyContent={"center"}>
            <Flex
                w={"100%"}
                maxW={"1280px"}
                minH={"450px"}
                padding={"80px 52px"}
                alignItems={"center"}
                border={'3px solid'}
                borderRadius={"30px"}
                position={"relative"}
                gap={"80px"}
                boxShadow={"0px 0px 5px 0px rgba(255, 255, 255, 0.25);"}
            >
                <Avatar width={"180px"} height={"180px"} src={avatar} />
                <Flex flexDir={"column"} gap={"25px"}>
                    <Text fontSize={"32px"} fontWeight={"bold"} color={'white'}>
                        Nombre: {username}
                    </Text>
                    <Text fontSize={"32px"} fontWeight={"bold"} color={'white'}>
                        Email: {email}
                    </Text>
                    <Text fontSize={"32px"} fontWeight={"bold"} color={'white'}>
                        Teléfono: {phone}
                    </Text>
                </Flex>
                <Flex gap={"18px"} position={"absolute"} top={"24px"} right={"24px"}>
                    <Box cursor={"pointer"} onClick={handleUserEdit}>
                        <EditPenIcon />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProfileBanner