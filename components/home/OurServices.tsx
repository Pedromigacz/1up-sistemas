import styled from "styled-components";
import Image from "next/image";

import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
  SubTitle,
  Title,
} from "../shared/sharedComponents";

import Desktop1 from "public/images/Desktop1.png";
import Desktop2 from "public/images/Desktop2.png";
import PointIcon from "../shared/icons/Point";

const OurServicesPage = (): JSX.Element => {
  return (
    <>
      <GenericSection>
        <GenericInnerContainer as='section'>
          <TitleContainer>
            <Title as='h2'>
              Conheça nosso serviço de <strong>Excelência</strong>
            </Title>
            <Paragraph>
              Conheça nosso compromisso com a excelência em serviços e descubra
              por que somos a escolha ideal para suas necessidades
            </Paragraph>
          </TitleContainer>
          <Container>
            <TextContainer>
              <CustomTitle as='h3'>
                Software sob <strong>Demanda</strong>
              </CustomTitle>
              <CustomParagraph>
                Desenvolvemos aplicativos sob demanda, adaptados às necessidades
                exclusivas de sua empresa. Maximize sua eficiência, automatize
                tarefas repetitivas e alcance seus objetivos de negócios com
                nossas soluções:
              </CustomParagraph>
              <ul>
                <Li>
                  <PointIcon />
                  Aplicativos Android e IOS
                </Li>
                <Li>
                  <PointIcon />
                  Aplicativos Web
                </Li>
                <Li>
                  <PointIcon />
                  Aplicativos Desktop
                </Li>
              </ul>
            </TextContainer>
            <ImageContainer>
              <Image src={Desktop1} alt={""} />
            </ImageContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src={Desktop2} alt={""} />
            </ImageContainer>
            <TextContainer>
              <CustomTitle as='h3'>Ciência de Dados</CustomTitle>
              <CustomParagraph>
                Potencialize a eficiência e precisão dos seus negócios com nosso
                software de ciência de dados sob demanda. Soluções
                personalizadas para suas necessidades únicas.
              </CustomParagraph>
              <ul>
                <Li>
                  <PointIcon />
                  <strong>Inteligência Artificial</strong>
                </Li>
                <Li>
                  <PointIcon />
                  Chatbot
                </Li>
                <Li>
                  <PointIcon />
                  Reconhecimento Facial
                </Li>
              </ul>
            </TextContainer>
          </Container>
          <Container>
            <TextContainer>
              <CustomTitle as='h3'>Websites</CustomTitle>
              <CustomParagraph>
                Aprimore a presença online do seu negócio com nossas soluções
                personalizadas de desenvolvimento de websites sob demanda. Sites
                elegantes, otimizados para <strong>SEO</strong> e{" "}
                <strong>extremamente rápidos</strong>. perfeitos para atingir os
                resultados que você espera.
              </CustomParagraph>
              <ul>
                <Li>
                  <PointIcon />
                  Landing Pages
                </Li>
                <Li>
                  <PointIcon />
                  E-Commerces
                </Li>
                <Li>
                  <PointIcon />
                  Sites institucionais
                </Li>
              </ul>
            </TextContainer>
            <ImageContainer>
              <Image src={Desktop2} alt={""} />
            </ImageContainer>
          </Container>
        </GenericInnerContainer>
      </GenericSection>
    </>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  max-width: 880px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 75px;
`;

const CustomTitle = styled(Title)`
  font-size: 30px;
  margin-bottom: 5px;
`;

const TextContainer = styled.div``;

const ImageContainer = styled.div``;

const CustomParagraph = styled(Paragraph)`
  margin-bottom: 10px;
  max-width: 640px;
`;

const Li = styled.li`
  font-family: var(--font-main);
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 5px;

  color: var(--text-main);

  svg {
    margin-right: 14px;
  }
`;

export default OurServicesPage;
