import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import QuoteIcon from '@/components/shared/icons/Quote';

import { Paragraph } from '@/components/shared/sharedComponents';

interface TestimonialCardProps {
  name: string;
  companyName: string;
  image: StaticImageData;
  testimonial: string;
}

const TestimonialCard = ({
  name,
  companyName,
  image,
  testimonial,
}: TestimonialCardProps): JSX.Element => {
  return (
    <Card>
      <ProfileContainer>
        <ImageContainer>
          <Image src={image} alt={'Profile Icon'} />
        </ImageContainer>
        <ProfileData>
          <Name>{name}</Name>
          <CompanyName>{companyName}</CompanyName>
        </ProfileData>
        <QuoteIcon />
      </ProfileContainer>
      <CustomParagraph>{testimonial}</CustomParagraph>
    </Card>
  );
};

const Card = styled.li`
  background-color: var(--background-2);
  padding: 48px 40px 56px 40px;
  border-radius: 20px;

  /* temporary styles */
  max-width: 378px;
  margin: 0 auto;
  /* temporery styles */

  box-shadow: 0px -2px 80px rgba(0, 0, 0, 0.5),
    0px -0.835552px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px -0.446726px 17.869px rgba(0, 0, 0, 0.0417275),
    0px -0.250431px 10.0172px rgba(0, 0, 0, 0.035),
    0px -0.133002px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px -0.0553451px 2.21381px rgba(0, 0, 0, 0.0196802);

  @media (max-width: 1400px) {
    padding: 40px 40px 35px 40px;
  }

  @media (max-width: 400px) {
    padding: 32px 32px 35px 32px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 48px;

  svg {
    min-width: 29px;
  }

  @media (max-width: 1400px) {
    margin-bottom: 32px;
    gap: 20px;
  }

  @media (max-width: 780px) {
    svg {
      min-width: 18px;
      width: 18px;
    }
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  border-radius: 100%;

  @media (max-width: 1400px) {
    img {
      width: 45px;
      height: 45px;
    }
  }
`;

const Name = styled.h3`
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 3rem;
  line-height: 2.3rem;

  color: var(--text-main);

  @media (max-width: 1400px) {
    font-size: 2rem;
  }
`;

const CompanyName = styled.p`
  font-family: var(--font-body);
  font-size: 2rem;

  color: var(--text-2);

  @media (max-width: 1400px) {
    font-size: 1.5rem;
  }
`;

const ProfileData = styled.div`
  margin-right: auto;
`;

const CustomParagraph = styled(Paragraph)`
  text-align: left;
  line-height: 2.2rem;

  @media (max-width: 1200px) {
    max-width: 390px;
  }

  @media (max-width: 1400px) {
    font-size: 1.5rem;
    line-height: 1.7rem;
  }
`;

export default TestimonialCard;
