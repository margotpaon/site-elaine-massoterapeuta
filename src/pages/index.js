import * as React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton'


const IndexPage = () => (
  <Layout>
    <Box p={5}>
      <HeroSection />
      <Footer />
      <WhatsAppButton />
    </Box>
  </Layout>
);

export default IndexPage;
