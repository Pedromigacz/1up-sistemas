import styled from 'styled-components';
import Image from 'next/image';

import ClientOne from '@/public/images/Client1.png';
import ClientTwo from '@/public/images/Client2.png';
import ClientThree from '@/public/images/Client3.png';

import {
  GenericInnerContainer,
  GenericSection,
  Paragraph,
} from '@/components/shared/sharedComponents';
import QuoteIcon from '@/components/shared/icons/Quote';

const TestimonialsSection = (): JSX.Element => {
  return (
    <>
      <GenericSection as='section'>
        <GenericInnerContainer>
          <CardsContainer>
            <Card>
              <ProfileContainer>
                <ImageContainer>
                  <Image src={ClientOne} alt={'Profile Icon'} />
                </ImageContainer>
                <div>
                  <Name>Alibaba</Name>
                  <Cargo>E-Commerce</Cargo>
                </div>
                <Craze>
                  <QuoteIcon />
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
                  <Image src={ClientTwo} alt={'Profile Icon'} />
                </ImageContainer>
                <div>
                  <Name>Facebook</Name>
                  <Cargo>Social Media</Cargo>
                </div>
                <Craze>
                  <QuoteIcon />
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
                  <Image src={ClientThree} alt={'Profile Icon'} />
                </ImageContainer>
                <div>
                  <Name>Alibaba</Name>
                  <Cargo>E-Commerce</Cargo>
                </div>
                <Craze>
                  <QuoteIcon />
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

  margin-bottom: 210px;

  li:nth-child(2n) svg path {
    fill: #2589bd;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

const Card = styled.li`
  background-color: var(--background-2);
  padding: 50px 50px 80px 40px;
  border-radius: 20px;

  box-shadow: 0px -2px 80px rgba(0, 0, 0, 0.5),
    0px -0.835552px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px -0.446726px 17.869px rgba(0, 0, 0, 0.0417275),
    0px -0.250431px 10.0172px rgba(0, 0, 0, 0.035),
    0px -0.133002px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px -0.0553451px 2.21381px rgba(0, 0, 0, 0.0196802);

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
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: var(--text-main);
`;

const Cargo = styled.p`
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 17px;

  color: var(--text-2);
`;

const Craze = styled.div`
  margin-left: auto;
`;

const CustomParagraph = styled(Paragraph)`
  text-align: left;

  @media (max-width: 1200px) {
    max-width: 390px;
  }
`;

export default TestimonialsSection;
