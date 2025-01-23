import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {
            isRouteErrorResponse(error)
            ? "You have landed on uncharted territory, let's go back home"
            : "An unexpected error occu red"
          }
        </Text>
      </Box>
    </>
  )
}

export default ErrorPage;