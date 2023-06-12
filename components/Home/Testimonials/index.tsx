import styled from 'styled-components';

import {
  GenericInnerContainer,
  GenericSection,
} from '@/components/shared/sharedComponents';
import TestimonialCard from './TestimonialCard';

import ClientOne from '@/public/images/Client1.png';
import ClientTwo from '@/public/images/Client2.png';
import ClientThree from '@/public/images/Client3.png';

const TestimonialsSection = (): JSX.Element => {
  return (
    <GenericSection>
      <CardsContainer as='ul'>
        <TestimonialCard
          name='Pedro H'
          companyName='Migacz Brothers'
          image={ClientOne}
          testimonial='Tivemos experiências muito positivas trabalhando com o pessoal da 1up Sistemas. Profissionalismo e atendimento ao cliente impecáveis.'
        />
        {/* <TestimonialCard
          name='João'
          companyName='Facebook'
          image={ClientTwo}
          testimonial='I was blown away by the level of professionalism and attention to detail that this company provided. From start to finish, they made my experience easy and stress-free.'
        />
        <TestimonialCard
          name='Nome do Contratante'
          companyName='Nome de Empresa'
          image={ClientThree}
          testimonial='I was blown away by the level of professionalism and attention to detail that this company provided. From start to finish, they made my experience easy and stress-free.'
        /> */}
      </CardsContainer>
    </GenericSection>
  );
};

const CardsContainer = styled(GenericInnerContainer)`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  gap: 20px;

  margin-top: 260px;
  margin-bottom: 150px;

  li:nth-child(2n) svg path {
    fill: #2589bd;
  }

  /* @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 44px;
  }
`;

export default TestimonialsSection;
