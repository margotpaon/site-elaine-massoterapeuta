// src/components/MentoriaIntro.js

import React from "react"
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react"

const DrenagemIntro = () => {
  return (
    <Box id="mentoria" py={20} textAlign="center">
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          O que é a Mentoria Conversão Extrema?
        </Heading>
        <Text maxW="xl" fontSize="lg">
          A mentoria Conversão Extrema é um programa especializado que oferece as melhores ferramentas e estratégias para
          aumentar suas vendas na internet. Com a orientação de especialistas, você aprenderá técnicas avançadas que
          irão transformar seu negócio e aumentar seus resultados.
        </Text>
        <Image src="/path/to/your/image.png" alt="Mentoria Gráfica" />
      </VStack>
    </Box>
  )
}

export default DrenagemIntro
