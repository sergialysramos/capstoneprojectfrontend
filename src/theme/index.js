import { extendTheme } from "@chakra-ui/react"

export const COLORS = {
    PRIMARY: "#CE9C65",
    SECONDARY: "black",
    TERTIARY: "#6D6E70"

}

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: COLORS.SECONDARY, 
                overscrollBehavior: "none",
                color: COLORS.TERTIARY,
                
            },

        },
    },
})
