import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const FAQ = () => {
  return (
    <Box w="100%" maxW="800px" mx="auto" p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Perguntas Frequentes
      </Heading>
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    O que é a Mentoria do Conversão Extrema? Como posso garantir uma vaga?
                  </Box>
                  {isExpanded ? (
                    <Icon as={MinusIcon} />
                  ) : (
                    <Icon as={AddIcon} />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A Mentoria do Conversão Extrema é um treinamento 100% online que mostra o passo a passo para você atrair mais clientes e aumentar as suas vendas e se tornar referência no seu mercado através das principais ferramentas de vendas da internet, como o Google, YouTube, Instagram e Facebook - <strong>independente do seu nível de conhecimento ou até se você tem pouco investimento para iniciar.</strong>
                <br /><br />
                Dentro da Mentoria, você aprenderá estratégias atualizadas e únicas, que são capazes de funcionar para qualquer tipo de negócio. Afinal de contas, independentemente do que você venda, dominar os anúncios online não é mais uma opção e sim, uma obrigação.
                <br /><br />
                As vagas para entrar na Mentoria ficam disponíveis por tempo limitado, ou seja, você não consegue entrar em qualquer momento, apenas em alguns meses específicos do ano. Caso as vagas não estejam abertas neste momento, você pode cadastrar o seu e-mail na lista de espera no início dessa página. Assim, você será avisado em uma próxima oportunidade.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Por que eu criei a Mentoria do Conversão Extrema?
                  </Box>
                  {isExpanded ? (
                    <Icon as={MinusIcon} />
                  ) : (
                    <Icon as={AddIcon} />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A resposta para essa pergunta...
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    O Conversão Extrema é uma empresa certificada Google?
                  </Box>
                  {isExpanded ? (
                    <Icon as={MinusIcon} />
                  ) : (
                    <Icon as={AddIcon} />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A resposta para essa pergunta...
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
