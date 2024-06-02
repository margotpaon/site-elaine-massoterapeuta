// src/components/MentoriaFuncionamentoDetalhado.js

import React from "react"
import { Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react"

const DrenagemDetalhada = () => {
  return (
    <Box py={20} textAlign="center">
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          Como funciona a Mentoria Conversão Extrema?
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mt={10} textAlign="left">
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="md">1. Cadastro</Heading>
            <Text>Inscreva-se na mentoria através do nosso formulário online.</Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="md">2. Avaliação</Heading>
            <Text>Nossa equipe fará uma análise detalhada do seu perfil e do seu negócio.</Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="md">3. Planejamento</Heading>
            <Text>Criação de um plano estratégico personalizado para suas necessidades.</Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="md">4. Implementação</Heading>
            <Text>Orientações práticas e acompanhamento durante a execução do plano.</Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="md">5. Resultados</Heading>
            <Text>Monitoramento dos resultados e ajustes para otimização contínua.</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default DrenagemDetalhada
