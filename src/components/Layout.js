import React from 'react';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    
    <Box>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
