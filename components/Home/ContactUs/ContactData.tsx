import styled from 'styled-components';
import { Paragraph } from '@/components/shared/sharedComponents';
import Link from 'next/link';
import FacebookIcon from '@/components/shared/icons/facebookIcon';
import InstagramIcon from '@/components/shared/icons/instagramIcon';

const ContactDataComponent = (): JSX.Element => {
  return (
    <ContactData>
      <div>
        <Label>Telefone</Label>
        <Paragraph>+123 4567 8912</Paragraph>
      </div>
      <div>
        <Label>Email</Label>
        <Paragraph>developer@company.com</Paragraph>
      </div>
      <div>
        <Label>Endereço</Label>
        <Paragraph>Brazil, St. AB 12</Paragraph>
      </div>
      <SocialMediaIconsContainer>
        <Link href='#'>
          <FacebookIcon />
        </Link>
        <Link href='#'>
          <InstagramIcon />
        </Link>
      </SocialMediaIconsContainer>
    </ContactData>
  );
};

const ContactData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 40px;
  margin-top: 32px;
`;

const Label = styled(Paragraph)`
  font-weight: bold;
  margin-bottom: 8px;
`;

const SocialMediaIconsContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export default ContactDataComponent;
