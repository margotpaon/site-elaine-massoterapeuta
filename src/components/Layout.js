import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box as="main" mt={8} mb="80px" maxW="1200px" mx="auto" px={4}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
