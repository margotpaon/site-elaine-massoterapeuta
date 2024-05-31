import React from 'react';
import { Link, Box } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    
    <Link
      href="https://wa.me/5511952732303?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20drenagem%20linfática."
      target="_blank"
      rel="noopener noreferrer"
      >
      <Box zIndex="1000"
        position="fixed"
        bottom="150px" 
        right="6%"
        bg={'teal'}
        borderRadius="full"
        size={70}
        padding={'15px'}
      >         <FaWhatsapp color='white' size={70}/>
      </Box>
    </Link>


  );
};

export default WhatsAppButton;
