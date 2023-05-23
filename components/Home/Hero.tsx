import {
  GenericSection,
  GenericInnerContainer,
  Title1,
  Paragraph,
  MainButton,
} from '@/components/shared/sharedComponents';
import styled from 'styled-components';
import DoubleChevronIcon from '@/components/shared/icons/doubleChevron';

const HeroComponent = (): JSX.Element => {
  return (
    <GenericSectionWithBackground>
      <GenericInnerContainer>
        <HeroContainer>
          <Title1>
            Softwares <strong>personalizados</strong> para aumentar sua{' '}
            <strong>eficiência</strong>. Dê <strong>Um UP!</strong>
          </Title1>
          <Paragraph as='h2'>
            Tenha ao seu lado uma equipe experiente e dedicada de
            desenvolvedores que irão resolver as dores da sua empresa.
          </Paragraph>
          <CustomButton>
            Conheça Nossos Serviços <DoubleChevronIcon />
          </CustomButton>
        </HeroContainer>
      </GenericInnerContainer>
    </GenericSectionWithBackground>
  );
};

const GenericSectionWithBackground = styled(GenericSection)`
  background-image: url('/images/HeroGrid.svg#svgView(preserveAspectRatio(none))');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 48px;
  padding-top: 85px;
  padding-bottom: 56px;

  @media (max-width: 780px) {
    padding-top: 0px;
    padding-bottom: 0px;
    background-size: 100% 205px;
  }

  @media (max-width: 1000px) {
    padding-top: 100px;
  }
`;

const HeroContainer = styled.div`
  padding: 98px 32px 16px 32px;
  position: relative;
  max-width: 970px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ::before {
    content: '';
    background: #57ffdc;
    outline: 1px solid red;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0.05;
    filter: blur(100px);
    border-radius: 100px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 780px) {
    padding: 0 0 0 0;
  }
`;

const CustomButton = styled(MainButton)`
  margin: 50px auto 0 auto;
  display: flex;
  gap: 12px;
  align-items: center;
`;
export default HeroComponent;
