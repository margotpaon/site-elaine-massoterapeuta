// src/components/Footer.js

import React from 'react';
import { Box, Text, Link, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      bg="gray.800"
      color="white"
      py={4}
    >
      <VStack spacing={2}>
        <Text fontSize="lg" fontWeight="bold">
          <Link href="/">
            <img src="/path/to/logo-small.png" alt="Logo" style={{ maxWidth: '100px' }} />
          </Link>
        </Text>
        <Box>
          <Link href="/terms" mr={2}>
            Termos de Uso
          </Link>
          <Link href="/privacy">
            Política de Privacidade
          </Link>
        </Box>
        <Text fontSize="sm">
          Copyright © 2024 Elevation Treinamentos LTDA. CNPJ: 50.058.456/0001-80
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
