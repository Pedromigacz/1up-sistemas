import styled from 'styled-components';

import Image, { StaticImageData } from 'next/image';

interface TechItemProps {
  title: string;
  paragraph: string;
  Icon: StaticImageData;
  // socialProof: (() => JSX.Element)[];
}

const TechItemComponent = ({
  title,
  paragraph,
  Icon,
}: // socialProof,
TechItemProps): JSX.Element => {
  return (
    <TechItemContainer>
      <IconContainer>
        <CustomImage src={Icon} alt='' fill />
      </IconContainer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      {/* <ShowcaseList>
        {socialProof.map((SocialProofIcon, key) => (
          <SocialProofIconWrapper key={`SocialProofIcon_${key}`}>
            <SocialProofIcon />
          </SocialProofIconWrapper>
        ))}
      </ShowcaseList> */}
    </TechItemContainer>
  );
};

const TechItemContainer = styled.div`
  background-color: var(--background-main);
  border: 2px solid var(--background-2);
  border-top-left-radius: var(--rounded);
  border-bottom-right-radius: var(--rounded);
  border-top-right-radius: var(--rounded-sm);
  border-bottom-left-radius: var(--rounded-sm);

  width: 100%;
  max-width: 280px;
  height: 480px;
  padding: 70px 32px 40px 32px;

  font-family: var(--font-body);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  height: 66px;
  width: 100%;
  position: relative;

  margin-bottom: 17px;
`;

const CustomImage = styled(Image)`
  position: static;
  object-fit: contain;
  object-position: left;
`;

const Title = styled.h3`
  font-size: 3rem;
  margin-bottom: 4px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: var(--text-main);
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;

const ShowcaseList = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
`;

const SocialProofIconWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-self: flex-start;
`;

export default TechItemComponent;
