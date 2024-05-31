import React from 'react';
import { Box, Text, Flex, Image, Link } from '@chakra-ui/react';
import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons

const About = () => {
    const lg = 16;
  return (
    <Box as="section" id="sobre" bg="#f2f2f2" py={20}>
      <Flex
        align="center"
        justify="center"
        flexDir="row"
        gap={8}
        paddingX={345}
      >
        <Image
          src="https://i.imgur.com/o2yY24C.png"
          alt="Tiago Tessmann"
          width={360}
          height={360}
          borderRadius={10}
        />
        <Box>
          <Text as="h2" fontSize={36} fontWeight="bold" marginLeft={1}>
            Tiago Tessmann
          </Text>
          <Text as="p" fontSize={lg} textAlign={'justify'}>
            Após investir milhões em anúncios no Google e Facebook e ter
            gerenciado milhares de contas nesses 10 anos (e continuo fazendo
            isso.. eu decidi ajudar pessoas comuns a atingirem seu próximo
            nível de faturamento mais rápido utilizando todo o poder da
            internet.
          </Text>
          <Text as="p" fontSize={lg} textAlign={'justify'}>
            Tiago é uma das maiores referências de anúncios online do Brasil,
            funcionário de uma das maiores agências de tráfego pago do país e
            criador do método Conversão Extrema.
          </Text>


        <Flex mt={4} gap={4}>
        <Link
            href="https://www.instagram.com/tiagotesssmann/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Box as="span" bg="#007bff" display="inline-block" color="#fff" padding={4} borderRadius="full" cursor="pointer">
            <FaInstagram size={24} />  
            </Box>
        </Link>
        <Link
            href="https://www.youtube.com/c/TiagoTessmannOficial"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Box as="span" bg="#dc3545" display="inline-block" color="#fff" padding={4} borderRadius="full" cursor="pointer">
            <FaYoutube size={24} />  
            </Box>
        </Link>
        </Flex>

        </Box>
      </Flex>
    </Box>
  );
};

export default About;
