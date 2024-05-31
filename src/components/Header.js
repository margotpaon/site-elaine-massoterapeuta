import React from 'react';
import { Box, Flex, Link, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/" fontSize="lg" fontWeight="bold" color="white">Logo</Link>
        </Box>
        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <Link href="#" px={2} py={1} rounded="md" _hover={{ bg: 'teal.700' }} color="white">Home</Link>
          <Link href="#" px={2} py={1} rounded="md" _hover={{ bg: 'teal.700' }} color="white">About</Link>
          <Link href="#" px={2} py={1} rounded="md" _hover={{ bg: 'teal.700' }} color="white">Services</Link>
          <Link href="#" px={2} py={1} rounded="md" _hover={{ bg: 'teal.700' }} color="white">Contact</Link>
        </Flex>
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onOpen}
          color="white"
          bg="teal.500"
          _hover={{ bg: 'teal.600' }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Link href="#" onClick={onClose}>Home</Link>
              <Link href="#" onClick={onClose}>About</Link>
              <Link href="#" onClick={onClose}>Services</Link>
              <Link href="#" onClick={onClose}>Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
