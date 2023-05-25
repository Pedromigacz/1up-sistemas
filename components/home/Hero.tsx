import styled from "styled-components";
import {
  GenericInnerContainer,
  GenericSection,
  MainButton,
  Paragraph,
  Title,
} from "../shared/sharedComponents";
import DoubleArroIcon from "../shared/icons/DoubleArrow";

const Hero = (): JSX.Element => {
  return (
    <>
      <CustomGenericSection>
        <CustomGenericInnerContainer>
          <Title>
            Softwares <strong>personalizados</strong> para aumentar sua
            <strong> eficiência</strong>. Dê <strong> Um UP!</strong>
          </Title>
          <CustomParagraph>
            Tenha ao seu lado uma equipe experiente e dedicada de
            desenvolvedores que irão resolver as dores da sua empresa.
          </CustomParagraph>
          <MainButton>
            Conheça Nossos Serviços <DoubleArroIcon />
          </MainButton>
        </CustomGenericInnerContainer>
      </CustomGenericSection>
    </>
  );
};

const CustomGenericSection = styled(GenericSection)`
  background-image: url("/images/HeroGrid.svg#svgView(preserveAspectRatio(none))");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 82px;
  margin-bottom: 321px;

  @media (max-width: 1000px) {
    margin-top: 155px;
  }
`;

const CustomGenericInnerContainer = styled(GenericInnerContainer)`
  text-align: center;
  max-width: 980px;

  @media (max-width: 1000px) {
    min-width: 324px;
    max-width: 720px;
  }
`;

const CustomParagraph = styled(Paragraph)`
  margin-bottom: 50px;
`;

export default Hero;
