import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
  Title2,
} from '@/components/shared/sharedComponents';
import styled from 'styled-components';
import TechStackSliderComponent from './Slider';

const TechStackComponent = (): JSX.Element => {
  return (
    <TechStackSection>
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
`;

const TechStackInnerContainer = styled(GenericInnerContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1724px;
`;

const CustomParagraph = styled(Paragraph)`
  margin-bottom: 100px;
`;

export default TechStackComponent;
