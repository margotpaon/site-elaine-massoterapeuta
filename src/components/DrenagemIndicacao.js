// src/components/MentoriaFuncionamento.js

import React from "react"
import { Box, Heading, SimpleGrid, VStack, Icon, Text } from "@chakra-ui/react"
import { FaUserTie, FaLaptopCode, FaChartLine, FaUsers } from "react-icons/fa"

const MentoriaFuncionamento = () => {
  return (
    <Box bg="gray.100" py={20} textAlign="center">
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          A Mentoria Conversão Extrema funciona pra mim?
        </Heading>
        <SimpleGrid columns={[1, null, 2, 4]} spacing={10} mt={10}>
          <VStack>
            <Icon as={FaUserTie} w={10} h={10} color="teal.500" />
            <Text fontSize="lg">Empreendedores</Text>
          </VStack>
          <VStack>
            <Icon as={FaLaptopCode} w={10} h={10} color="teal.500" />
            <Text fontSize="lg">Profissionais de Marketing</Text>
          </VStack>
          <VStack>
            <Icon as={FaChartLine} w={10} h={10} color="teal.500" />
            <Text fontSize="lg">Gestores de Vendas</Text>
          </VStack>
          <VStack>
            <Icon as={FaUsers} w={10} h={10} color="teal.500" />
            <Text fontSize="lg">Consultores</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default MentoriaFuncionamento
