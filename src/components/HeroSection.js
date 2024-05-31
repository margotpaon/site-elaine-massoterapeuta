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
      bg="white" // fundo branco conforme a imagem fornecida
      color="black"
      px={4}
      textAlign="center"
    >
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" fontWeight="bold">
          Domine as Maiores Ferramentas de Vendas da Internet
        </Heading>
        <Text fontSize="lg">
          Atraia mais clientes com anúncios inteligentes no Google, Youtube, Facebook e Instagram
        </Text>
        <Button
          colorScheme="green"
          bgGradient="linear(to-r, green.300, green.500)"
          size="lg"
          px={8}
        >
          Quero entrar na mentoria
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
