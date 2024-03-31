import { Button as ChakraButton } from "@chakra-ui/react"
import React from "react"
import { COLORS } from "../../theme"

const SubmitButton = () => {
    return (
        <ChakraButton
            _hover={{
                backgroundColor: COLORS.PRIMARY,
            }}
            minH={"56px"}
            width={"100%"}
            fontSize={"24px"}
            marginTop={"54px"}
            borderRadius={"20px"}
            backgroundColor={"black"}
            fontWeight={"bold"}
            color={"white"}
            type="submit"
        >
            Submit
        </ChakraButton>
    )
}

export default SubmitButton