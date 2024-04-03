import { Flex, Text } from "@chakra-ui/layout"
import CustomLink from "../CustomLink/CustomLink"

const AuthLink = ({ onClick, children, to }) => {
    return (
        <CustomLink
            onClick={onClick}
            borderRadius="30px"
            padding={"6px 15px"}
            backgroundColor={"#E2E2E2"}
            color={"black"}
            to={to}
        >
            <Flex justify={"center"} alignItems={"center"}>
                <Text as={"span"} fontSize={"20px"}>
                    {children}
                </Text>
            </Flex>
        </CustomLink>
    )
}

export default AuthLink
