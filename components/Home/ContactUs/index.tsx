import styled from 'styled-components';
import Image from 'next/image';

import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
  Title2,
} from '@/components/shared/sharedComponents';
import ContactIllustration from '@/public/images/contato.png';
import FormComponent from '@/components/Home/ContactUs/Form';
import ContactDataComponent from './ContactData';

const ContactUsComponent = (): JSX.Element => {
  return (
    <ContactSection>
      <ContactInnerContainer>
        <ContentContainer>
          <Title2>
            <strong>Trabalhe</strong> Conosco
          </Title2>
          <CustomParagraph>
            Entre em contato conosco para tirar dúvidas, obter mais informações
            ou solicitar um orçamento. Nossa equipe está pronta para atender
            você.
          </CustomParagraph>
          <FormComponent />
          <ContactDataComponent />
        </ContentContainer>
        <AsideContainer>
          <AsideImage
            src={ContactIllustration}
            fill
            alt='mac screen with development content open on it'
          />
        </AsideContainer>
      </ContactInnerContainer>
    </ContactSection>
  );
};

const ContactSection = styled(GenericSection)`
  background-color: var(--background-2);
`;

const ContactInnerContainer = styled(GenericInnerContainer)`
  display: block;
  padding: 64px 32px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 11fr 9fr;
    column-gap: 150px;
  }

  @media (min-width: 780px) {
    padding: 160px 32px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2,
  p {
    text-align: left !important;
  }
`;

const CustomParagraph = styled(Paragraph)`
  max-width: 730px;
`;

const AsideContainer = styled.aside`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    position: relative; // Important for NEXT IMAGE!!!
    aspect-ratio: 59 / 72;
    max-width: 593px;
  }
`;

const AsideImage = styled(Image)`
  position: absolute; // Important for NEXT IMAGE!!!
  object-fit: cover;
  border-radius: var(--rounded);
  box-shadow: 0px -2px 80px #000000,
    0px -0.835552px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px -0.446726px 17.869px rgba(0, 0, 0, 0.0417275),
    0px -0.250431px 10.0172px rgba(0, 0, 0, 0.035),
    0px -0.133002px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px -0.0553451px 2.21381px rgba(0, 0, 0, 0.0196802);
`;

export default ContactUsComponent;
