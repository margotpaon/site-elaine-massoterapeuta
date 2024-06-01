import React from 'react';
import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Header from '../components/Header'
import HeroSection from '../components/HeroSection';
import LeafletMap from '../components/LeafletMap';
import FAQComponent from '../components/Faq';
import About from '../components/About';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton'


const IndexPage = () => (
  <Layout>
      <Header />
      <HeroSection />
      <About />
      {/* <Box my={10}>
        <LeafletMap />
      </Box> */}
      <FAQComponent />
      <Footer />
      <WhatsAppButton />
  </Layout>
);

export default IndexPage;
