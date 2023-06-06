import {
  GenericSection,
  GenericInnerContainer,
  Title1,
  Paragraph,
  MainButton,
} from '@/components/shared/sharedComponents';
import styled from 'styled-components';
import DoubleChevronIcon from '@/components/shared/icons/doubleChevron';
import Link from 'next/link';
import HeroGridBackground from '../shared/icons/HeroGrid';

const HeroComponent = (): JSX.Element => {
  return (
    <GenericSectionWithBackground id='home'>
      <BackgroundSvg>
        <HeroGridBackground />
      </BackgroundSvg>
      <HomeSectionInnerContainer>
        <HeroContainer>
          <Title1>
            Softwares <strong>personalizados</strong> para aumentar sua{' '}
            <strong>eficiência</strong>. Dê <strong>Um UP!</strong>
          </Title1>
          <Paragraph as='h2'>
            Tenha ao seu lado uma equipe experiente e dedicada de
            desenvolvedores que irão resolver as dores da sua empresa.
          </Paragraph>
          <CustomButton href='#servicos' scroll={false}>
            Conheça Nossos Serviços <DoubleChevronIcon />
          </CustomButton>
        </HeroContainer>
      </HomeSectionInnerContainer>
    </GenericSectionWithBackground>
  );
};

const BackgroundSvg = styled.div`
  position: relative;
  grid-row-start: 1;
  grid-column-start: 1;
`;

const HomeSectionInnerContainer = styled(GenericInnerContainer)`
  grid-row-start: 1;
  grid-column-start: 1;
`;

const GenericSectionWithBackground = styled(GenericSection)`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 85px;
  padding-bottom: 56px;

  @media (max-width: 780px) {
    padding-top: 0px;
    padding-bottom: 0px;
    background-size: 100% 205px;
    margin-top: 120px;
    margin-bottom: 120px;
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

interface CustomButtonProps {
  href: string;
  scroll: boolean;
}

const CustomButton = styled(MainButton).attrs({ as: Link })<CustomButtonProps>`
  margin: 50px auto 0 auto;
  display: flex;
  gap: 12px;
  align-items: center;
`;
export default HeroComponent;
