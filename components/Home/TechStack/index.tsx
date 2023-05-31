import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
  Title2,
} from '@/components/shared/sharedComponents';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const TechStackSliderComponent = dynamic(() => import('./Slider'), {
  suspense: true,
});

const TechStackComponent = (): JSX.Element => {
  return (
    <TechStackSection id='tecnologias'>
      <TechStackInnerContainer>
        <Title2>Tecnologias que Utilizamos</Title2>
        <CustomParagraph>
          Conheça nossa <strong>Tech Stack</strong>, conhecida, aprovada e
          utilizada pelas mais renomadas empresas de tecnologia ao redor do
          mundo
        </CustomParagraph>
        <TechStackSliderComponent />
      </TechStackInnerContainer>
    </TechStackSection>
  );
};

const TechStackSection = styled(GenericSection)`
  background-image: url('/images/TechStackGrid.svg#svgView(preserveAspectRatio(none))');
  background-position: center;
  background-repeat: no-repeat;
  padding: 200px 0;

  @media (max-width: 780px) {
    padding: 50px 0;
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

const TechStackInnerContainer = styled(GenericInnerContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1724px;

  @media (max-width: 1724px) {
    max-width: 1424px;
  }

  @media (max-width: 1424px) {
    max-width: 1124px;
  }

  @media (max-width: 1124px) {
    max-width: 824px;
  }

  @media (max-width: 824px) {
    max-width: 524px;
  }

  @media (max-width: 500px) {
    max-width: 428px;
  }

  @media (max-width: 400px) {
    max-width: 396px;
    width: 100%;
  }
`;

const CustomParagraph = styled(Paragraph)`
  margin-bottom: 100px;

  @media (max-width: 780px) {
    margin-bottom: 32px;
  }
`;

export default TechStackComponent;
