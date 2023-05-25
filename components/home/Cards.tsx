import styled from "styled-components";
import Image from "next/image";

import FirstImage from "public/images/FirstImage.png";
import SecondImage from "public/images/SecondImage.png";
import ThreeImage from "public/images/ThreeImage.png";

import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
} from "../shared/sharedComponents";
import MarksIcon from "../shared/icons/Marks";

const CardsPage = (): JSX.Element => {
  return (
    <>
      <GenericSection as='section'>
        <GenericInnerContainer>
          <CardsContainer>
            <Card>
              <ProfileContainer>
                <ImageContainer>
                  <Image src={FirstImage} alt={""} />
                </ImageContainer>
                <div>
                  <Name>Alibaba</Name>
                  <Cargo>E-Commerce</Cargo>
                </div>
                <Craze>
                  <MarksIcon />
                </Craze>
              </ProfileContainer>
              <CustomParagraph>
                Tivemos experiências muito positivas trabalhando com o pessoal
                da 1up Sistemas. Profissionalismo e atendimento ao cliente
                impecáveis.
              </CustomParagraph>
            </Card>
            <Card>
              <ProfileContainer>
                <ImageContainer>
                  <Image src={SecondImage} alt={""} />
                </ImageContainer>
                <div>
                  <Name>Facebook</Name>
                  <Cargo>Social Media</Cargo>
                </div>
                <Craze>
                  <MarksIcon />
                </Craze>
              </ProfileContainer>
              <CustomParagraph>
                I was blown away by the level of professionalism and attention
                to detail that this company provided. From start to finish, they
                made my experience easy and stress-free.
              </CustomParagraph>
            </Card>
            <Card>
              <ProfileContainer>
                <ImageContainer>
                  <Image src={ThreeImage} alt={""} />
                </ImageContainer>
                <div>
                  <Name>Alibaba</Name>
                  <Cargo>E-Commerce</Cargo>
                </div>
                <Craze>
                  <MarksIcon />
                </Craze>
              </ProfileContainer>
              <CustomParagraph>
                I was blown away by the level of professionalism and attention
                to detail that this company provided. From start to finish, they
                made my experience easy and stress-free.
              </CustomParagraph>
            </Card>
          </CardsContainer>
        </GenericInnerContainer>
      </GenericSection>
    </>
  );
};

const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  li:nth-child(2n) svg path {
    fill: #2589bd;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const Card = styled.li`
  background-color: var(--background-4);
  padding: 50px 50px 80px 40px;
  border-radius: 20px;

  @media (max-width: 1200px) {
    padding: 40px 40px 34px 40px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 48px;

  @media (max-width: 1200px) {
    img {
      width: 45px;
      height: 45px;
    }
  }
`;

const ImageContainer = styled.div`
  border-radius: 100%;
`;

const Name = styled.h3`
  font-family: var(--font-main);
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: var(--text-main);
`;

const Cargo = styled.p`
  font-family: var(--font-main);
  font-size: 15px;
  line-height: 17px;

  color: var(--text-grey);
`;

const Craze = styled.div`
  margin-left: auto;
`;

const CustomParagraph = styled(Paragraph)`
  @media (max-width: 1200px) {
    max-width: 390px;
  }
`;

export default CardsPage;
