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
        <Link
          href='https://api.whatsapp.com/send/?phone=5515996744567&text&type=phone_number&app_absent=0'
          target='_blank'
        >
          <Paragraph>(15) 9 9674-4567</Paragraph>
        </Link>
      </div>
      <div>
        <Label>Email</Label>
        <Link href='mailto:contato@umupsistemas.com.br' target='_blank'>
          <Paragraph>contato@umupsistemas.com.br</Paragraph>
        </Link>
      </div>
      <div>
        <Label>Endereço</Label>
        <Link href='https://goo.gl/maps/6ZNq1uUh5xoEuZAw6' target='_blank'>
          <Paragraph>Rua Elias Valio, 99 Centro Pilar do Sul</Paragraph>
        </Link>
      </div>
      <SocialMediaIconsContainer>
        <Link
          href='https://www.facebook.com/profile.php?id=100091738211299'
          target='_blank'
          aria-label='Página do facebook'
        >
          <FacebookIcon />
        </Link>
        <Link
          href='https://www.instagram.com/umupsistemas/'
          target='_blank'
          aria-label='Página do instagram'
        >
          <InstagramIcon />
        </Link>
      </SocialMediaIconsContainer>
    </ContactData>
  );
};

const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 40px;
  }
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
