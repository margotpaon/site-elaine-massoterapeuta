import React from 'react';
import { Box, Image, Text, Link, HStack, VStack, Icon, Heading } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const ProfileSection = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={{ base: 4, md: 8 }} bg="white">
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        maxW="1200px"
        boxShadow="lg"
        rounded="md"
        overflow="hidden"
      >
        <Image
          src="https://via.placeholder.com/400" // Substitua pela URL da imagem correta
          alt="Tiago Tessmann"
          w={{ base: '100%', md: '50%' }}
          h={{ base: 'auto', md: '100%' }}
          objectFit="cover"
        />
        <VStack
          w={{ base: '100%', md: '50%' }}
          p={{ base: 4, md: 8 }}
          alignItems="flex-start"
          spacing={4}
        >
          <Heading as="h2" size="lg">
            Tiago Tessmann
          </Heading>
          <Text>
            Após investir milhões em anúncios no Google e Facebook e ter gerenciado milhares de contas nesses 10 anos (e continuo fazendo isso)... eu decidi ajudar pessoas comuns a atingirem seu próximo nível de faturamento mais rápido utilizando todo o poder da internet.
          </Text>
          <Text>
            Tiago é uma das maiores referências de anúncios online do Brasil, fundador de uma das maiores agências de tráfego pago do país e criador do método Conversão Extrema.
          </Text>
          <Text fontWeight="bold">Siga nas redes:</Text>
          <HStack spacing={4}>
            <Link href="https://youtube.com" isExternal>
              <Icon as={FaYoutube} w={6} h={6} color="red.500" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebookF} w={6} h={6} color="blue.500" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} w={6} h={6} color="pink.500" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} color="blue.700" />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProfileSection;
