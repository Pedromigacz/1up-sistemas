import { Paragraph, Title3 } from '@/components/shared/sharedComponents';
import styled from 'styled-components';
import Image from 'next/image';
import SoftwareSobDeman from '@/public/images/software-sob-demanda.png';

const ServiceComponent = (): JSX.Element => {
  return (
    <Article>
      <ContentContainer>
        <Title3>
          Software sob <strong>Demanda</strong>
        </Title3>
        <CustomParagraph>
          Desenvolvemos aplicativos sob demanda, adaptados às necessidades
          exclusivas de sua empresa. Maximize sua eficiência, automatize tarefas
          repetitivas e alcance seus objetivos de negócios com nossas soluções:
        </CustomParagraph>
        <ul>
          <CustomListItem>Aplicativos Android e IOS</CustomListItem>
          <CustomListItem>Aplicativos Web</CustomListItem>
          <CustomListItem>Aplicativos Desktop</CustomListItem>
        </ul>
      </ContentContainer>
      <Aside>
        <AsideImage
          src={SoftwareSobDeman}
          alt='two personal computer screen and a keyboard on a dark room'
          placeholder='blur'
          fill
        />
      </Aside>
    </Article>
  );
};

const Article = styled.article`
  margin-bottom: 20px;

  @media (min-width: 780px) {
    display: flex;
    gap: 40px;
  }

  @media (min-width: 1000px) {
    gap: 200px;
  }
`;

const ContentContainer = styled.div`
  max-width: 640px;

  @media (min-width: 780px) {
    flex: 1;
  }
`;

const CustomParagraph = styled(Paragraph)`
  text-align: start;
  margin-bottom: 10px;
`;

const CustomListItem = styled(CustomParagraph).attrs({ as: 'li' })`
  margin-bottom: 5px;
  padding-left: 2.5rem;

  :before {
    background: var(--accent-blue-darker);
    border-radius: 0.25rem;
    color: red;
    content: '';
    display: block;
    font-weight: var(--font-weight-bold);
    position: relative;
    right: 2.4rem;
    top: 0.5rem;
    height: 0.8rem;
    width: 0.8rem;
    margin-bottom: -0.8rem;

    @media (min-width: 780px) {
      right: 2.4rem;
      top: 0.7rem;
      height: 1rem;
      width: 1rem;
      margin-bottom: -1rem;
    }
  }
`;

const Aside = styled.aside`
  position: relative; // Important for NEXT IMAGE!!!

  max-width: 640px;
  width: 100%;
  aspect-ratio: 40 / 27;
  margin-top: 10px;
  box-shadow: 0px -2px 80px #000000,
    0px -0.835552px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px -0.446726px 17.869px rgba(0, 0, 0, 0.0417275),
    0px -0.250431px 10.0172px rgba(0, 0, 0, 0.035),
    0px -0.133002px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px -0.0553451px 2.21381px rgba(0, 0, 0, 0.0196802);

  @media (min-width: 780px) {
    flex: 1;
  }
`;

const AsideImage = styled(Image)`
  max-width: 100%;
  object-fit: cover;
  border-radius: var(--rounded);
  position: absolute; // Important for NEXT IMAGE!!!
`;

export default ServiceComponent;
