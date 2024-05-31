import React from 'react';
import { Box, Flex, Link, Image, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} boxShadow="md" position="fixed" top="0" left="0" right="0" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <Link href="/" display="flex" alignItems="center">
          <Image src="/path/to/logo.png" alt="Logo" boxSize="50px" />
          <Box fontSize="xl" fontWeight="bold" ml={2}>Conversão <Box as="span" fontWeight="normal">Extrema</Box></Box>
        </Link>
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Link href="#" px={4} py={2} color="gray.600" _hover={{ color: 'black', textDecoration: 'none' }}>Como funciona</Link>
          <Link href="#" px={4} py={2} color="gray.600" _hover={{ color: 'black', textDecoration: 'none' }}>Como participar</Link>
          <Link href="#" px={4} py={2} color="gray.600" _hover={{ color: 'black', textDecoration: 'none' }}>Histórias de sucesso</Link>
          <Link href="#" px={4} py={2} color="gray.600" _hover={{ color: 'black', textDecoration: 'none' }}>Tiago Tessmann</Link>
        </Flex>
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onOpen}
          bg="transparent"
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Link href="#" onClick={onClose}>Como funciona</Link>
              <Link href="#" onClick={onClose}>Como participar</Link>
              <Link href="#" onClick={onClose}>Histórias de sucesso</Link>
              <Link href="#" onClick={onClose}>Tiago Tessmann</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
