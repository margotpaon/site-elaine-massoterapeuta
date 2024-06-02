// src/components/Participar.js

import React from "react"
import { Box, Heading, Button, VStack } from "@chakra-ui/react"
import { Link as ScrollLink } from "react-scroll"

const Agendamento = () => {
  return (
    <Box bg="teal.500" color="white" py={20} textAlign="center">
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          Como posso participar?
        </Heading>
        <ScrollLink to="mentoria" smooth duration={500}>
          <Button colorScheme="teal" size="lg" bg="white" color="teal.500">
            Quero saber mais
          </Button>
        </ScrollLink>
      </VStack>
    </Box>
  )
}

export default Agendamento
