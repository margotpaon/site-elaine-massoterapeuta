import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      as="section"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage="url('/path/to/your/background-image.jpg')" // opcional, para adicionar uma imagem de fundo
      bgSize="cover"
      bgPosition="center"
      color="black"
      px={4}
    >
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl">
          Bem-vindo ao Nosso Site
        </Heading>
        <Heading as="h2" size="lg">
          Nós oferecemos soluções inovadoras
        </Heading>
        <Button colorScheme="teal" size="lg">
          Saiba Mais
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
