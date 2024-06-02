// src/components/PerguntasFrequentes.js

import React from "react"
import { Box, Heading, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

const faqs = [
  {
    pergunta: "O que é a Mentoria Conversão Extrema?",
    resposta: "A Mentoria Conversão Extrema é um programa especializado em estratégias de vendas online, liderado por Tiago Tessmann, para ajudar empreendedores e profissionais de marketing a aumentar suas vendas e otimizar suas campanhas."
  },
  {
    pergunta: "Como a mentoria pode me ajudar?",
    resposta: "A mentoria oferece orientação personalizada, estratégias testadas e acompanhamento contínuo para garantir que você obtenha os melhores resultados possíveis em suas campanhas de marketing digital."
  },
  // Adicione mais perguntas e respostas aqui
]

const Faq = () => {
  return (
    <Box py={20} textAlign="center" bg="gray.50">
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          Perguntas Frequentes
        </Heading>
        <Accordion allowMultiple width="full" maxW="xl" textAlign="left">
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.pergunta}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {faq.resposta}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Box>
  )
}

export default Faq
