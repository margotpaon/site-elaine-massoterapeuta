import React from 'react';
import { Box, Link, VStack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg="teal.500"
      color="white"
      position="fixed"
      bottom={0}
      width="100%"
      py={4}
      textAlign="center"
    >
      <Box mb={4}>
        <Link href="/" fontSize="lg" fontWeight="bold" color="white">Logo</Link>
      </Box>
      <VStack spacing={2}>
        <Link href="#" color="white">Termos de Uso</Link>
        <Link href="#" color="white">Política de Privacidade</Link>
      </VStack>
      <Text mt={4}>Copyright © 2024 Elevation Treinamentos LTDA. CNPJ: 50.058.456/0001-80</Text>
    </Box>
  );
};

export default Footer;
