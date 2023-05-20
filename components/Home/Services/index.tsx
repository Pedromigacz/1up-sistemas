import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
  Title2,
} from '@/components/shared/sharedComponents';
import styled from 'styled-components';
import Service from '@/components/Home/Services/Service';

const ServicesComponents = (): JSX.Element => {
  return (
    <GenericSection>
      <ServicesSectionInnerContainer>
        <Title2>
          Conheça nosso serviço de <strong>Excelência</strong>
        </Title2>
        <CustomParagraph>
          Conheça nosso compromisso com a excelência em serviços e descubra por
          que somos a escolha ideal para suas necessidades
        </CustomParagraph>
        <Service />
        {/* <Service /> */}
      </ServicesSectionInnerContainer>
    </GenericSection>
  );
};

const ServicesSectionInnerContainer = styled(GenericInnerContainer)`
  padding-top: 50px;
`;

const CustomParagraph = styled(Paragraph)`
  margin-bottom: 30px;
`;

export default ServicesComponents;
