import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';

const FAQComponent = () => {
  return (
    <Box as="section" aria-label="Perguntas frequentes">
      <Text as="h2" fontSize="xl" fontWeight="bold" mb={6}>
        Perguntas Frequentes
      </Text>

      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box as="span">O que é a Mentoria do Conversão Extrema?</Box>
          </AccordionButton>
          <AccordionPanel>
            <Text>
              A Mentoria do Conversão Extrema é um treinamento 100% online que mostra a passo a passo para você atrair mais clientes e aumentar as suas vendas e se tornar referência no seu mercado através das principais ferramentas de vendas da internet, como Google, YouTube, Instagram e Facebook, independente do seu nível de conhecimento ou até se você tem pouco investimento para iniciar.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span">Como posso garantir uma vaga?</Box>
          </AccordionButton>
          <AccordionPanel>
            <Text>
              As vagas para entrar na Mentoria ficam abertas por tempo limitado, ou seja, você não consegue entrar em qualquer momento, apenas em alguns meses específicos do ano. Caso as vagas não estejam abertas neste momento, você pode cadastrar o seu e-mail na lista de espera no início dessa página. Assim, você será avisado em uma próxima oportunidade.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span">Por que eu criei a Mentoria do Conversão Extrema?</Box>
          </AccordionButton>
          <AccordionPanel>
            <Text>
              Eu criei a Mentoria do Conversão Extrema porque acredito que qualquer pessoa pode ter sucesso online, independentemente do seu nível de conhecimento ou experiência. Com as ferramentas e estratégias certas, você pode atrair mais clientes, aumentar suas vendas e se tornar referência no seu mercado.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span">O Conversão Extrema é uma empresa certificada Google?</Box>
          </AccordionButton>
          <AccordionPanel>
            <Text>
              Sim, o Conversão Extrema é uma empresa certificada Google. Isso significa que somos especialistas em usar as ferramentas do Google para gerar resultados para nossos clientes.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQComponent;
