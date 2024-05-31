import * as React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Bem-vindo ao Gatsby com Chakra UI
      </Heading>
      <Button colorScheme="teal" size="lg">
        Clique aqui
      </Button>
    </Box>
  </Layout>
);

export default IndexPage;
