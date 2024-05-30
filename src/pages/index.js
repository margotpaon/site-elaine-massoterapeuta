import * as React from "react"
import { Box, Heading, Button } from "@chakra-ui/react"

const IndexPage = () => (
  <Box p={5}>
    <Heading as="h1" size="xl" mb={4}>
      Bem-vindo ao Gatsby com Chakra UI
    </Heading>
    <Button colorScheme="teal" size="lg">
      Clique aqui
    </Button>
  </Box>
)

export default IndexPage
