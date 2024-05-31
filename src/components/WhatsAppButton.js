import React from 'react';
import { Link, Box, IconButton } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <Link href="https://wa.me/5511999999999" isExternal>
      <Box
        position="fixed"
        bottom="45"
        right="4"
        zIndex="1000"
      >
        <IconButton
          icon={<FaWhatsapp />}
          colorScheme="whatsapp"
          isRound={true}
          size="lg"
          aria-label="Contact us on WhatsApp"
        />
      </Box>
    </Link>
  );
};

export default WhatsAppButton;
