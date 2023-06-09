import styled from 'styled-components';

import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
  Title2,
} from '@/components/shared/sharedComponents';
import Service from '@/components/Home/Services/Service';

// Image imports
import SoftwareSobDeman from '@/public/images/software-sob-demanda.png';
import CienciaDeDados from '@/public/images/ciencia-de-dados.png';
import Websites from '@/public/images/websites.png';

const services = [
  {
    imageSrc: SoftwareSobDeman,
    title: (
      <>
        Software sob <strong>Demanda</strong>
      </>
    ),
    paragraph: (
      <>
        Desenvolvemos aplicativos sob demanda, adaptados às necessidades
        exclusivas de sua empresa. Maximize sua eficiência, automatize tarefas
        repetitivas e alcance seus objetivos de negócios com nossas soluções:
      </>
    ),
    list: [
      <>Aplicativos Android e IOS</>,
      <>Aplicativos Web</>,
      <>Aplicativos Desktop</>,
    ],
  },
  {
    imageSrc: CienciaDeDados,

    title: <>Ciência de Dados</>,
    paragraph: (
      <>
        Maximize a eficiência e precisão dos seus negócios com nossas avançadas
        soluções de ciência de dados. Oferecemos uma ampla gama de soluções
        personalizadas para atender às suas necessidades exclusivas.
      </>
    ),
    list: [
      <>
        <strong>Inteligência Artificial</strong>
      </>,
      <>Chatbot</>,
      <>Reconhecimento Facial</>,
      <>Análise de Dados</>,
    ],
  },
  {
    imageSrc: Websites,

    title: <>Websites</>,
    paragraph: (
      <>
        Aprimore a presença online do seu negócio com nossas soluções
        personalizadas de desenvolvimento de websites sob demanda. Sites
        elegantes, otimizados para <strong>SEO</strong> e{' '}
        <strong>extremamente rápidos</strong>. perfeitos para atingir os
        resultados que você espera.
      </>
    ),
    list: [<>Landing Pages</>, <>E-Commerces</>, <>Sites institucionais</>],
  },
];

const ServicesComponents = (): JSX.Element => {
  return (
    <ServicesSection id='servicos'>
      <ServicesSectionInnerContainer>
        <CustomTitle2>
          Conheça nosso serviço de <strong>Excelência</strong>
        </CustomTitle2>
        <CustomParagraph>
          Conheça nosso compromisso com a excelência em serviços e descubra por
          que somos a escolha ideal para suas necessidades
        </CustomParagraph>
        <ServicesContainer>
          {services.map((serviceData, key) => (
            <Service {...serviceData} key={`Service_${key}`} />
          ))}
        </ServicesContainer>
        {/* <Service /> */}
      </ServicesSectionInnerContainer>
    </ServicesSection>
  );
};

const ServicesSection = styled(GenericSection)`
  @media (max-width: 1000px) {
    padding-top: 100px;
    margin-top: -100px;
  }
`;

const ServicesSectionInnerContainer = styled(GenericInnerContainer)`
  padding-top: 50px;

  article:nth-child(2n) {
    flex-direction: row-reverse;
  }
`;

const CustomTitle2 = styled(Title2)`
  margin: 0 auto;
`;

const CustomParagraph = styled(Paragraph)`
  margin: 0 auto 30px auto;
  max-width: 880px;

  @media (min-width: 780px) {
    margin-bottom: 90px;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 780px) {
    gap: 30px;
  }

  @media (min-width: 1000px) {
    gap: 75px;
  }
`;

export default ServicesComponents;
