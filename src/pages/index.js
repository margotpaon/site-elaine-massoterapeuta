import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header'
import HeroSection from '../components/HeroSection';
import LeafletMap from '../components/LeafletMap';
import Faq from '../components/Faq';
import About from '../components/About';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton'
import DrenagemIntro from '../components/DrenagemIntro';
import DrenagemIndicacao from '../components/DrenagemIndicacao';
import Agendamento from '../components/Agendamento';
import DrenagemDetalhada from '../components/DrenagemDetalhada';
import Depoimentos from '../components/Depoimentos'


const IndexPage = () => (
  <Layout>
      <Header />
      <HeroSection />
      <DrenagemIntro />
      <DrenagemIndicacao />
      <Agendamento />
      <DrenagemDetalhada />
      <Depoimentos />
      <About />
      {/* <Box my={10}>
        <LeafletMap />
      </Box> */}
      <Faq />
      <Footer />
      <WhatsAppButton />
  </Layout>
);

export default IndexPage;
