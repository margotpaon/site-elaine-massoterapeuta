// src/components/HistoriasDeSucesso.js

import React from "react"
import { Box, Heading, SimpleGrid, VStack, Image, Text } from "@chakra-ui/react"

const historias = [
  {
    nome: "João Silva",
    testemunho: "A mentoria foi essencial para o crescimento do meu negócio online.",
    imagem: "/images/testemunho-joao.png"
  },
  {
    nome: "Maria Oliveira",
    testemunho: "Com as estratégias ensinadas, consegui aumentar minhas vendas em 50%.",
    imagem: "/images/testemunho-maria.png"
  },
  // Adicione mais histórias aqui
]

const HistoriasDeSucesso = () => {
  return (
    <Box py={20} textAlign="center" bg="gray.50">
      <Heading as="h2" size="xl" mb={10}>
        Histórias de Sucesso
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {historias.map((historia, index) => (
          <VStack key={index} spacing={3} bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image
              borderRadius="full"
              boxSize="150px"
              src={historia.imagem}
              alt={historia.nome}
            />
            <Text fontWeight="bold">{historia.nome}</Text>
            <Text>{historia.testemunho}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default HistoriasDeSucesso
