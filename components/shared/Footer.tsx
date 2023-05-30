import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  GenericInnerContainer,
  GenericSection,
  MainButton,
} from '@/components/shared/sharedComponents';
import LogoIcon from '@/components/shared/icons/logo';
import BurguerMenuIcon from '@/components/shared/icons/burguerMenuIcon';
import InstagramIcon from '@/components/shared/icons/instagramIcon';
import FacebookIcon from '@/components/shared/icons/facebookIcon';

const FooterComponent = (): JSX.Element => {
  return (
    <Footer as='footer'>
      <FooterInnerContainer>
        <Link href='#home' scroll={false}>
          <LogoIcon color='var(--text-negative-main)' />
        </Link>
        <FooterLinks>
          <FooterLinkContainer>
            <Link href='#home' scroll={false}>
              Home
            </Link>
          </FooterLinkContainer>
          <FooterLinkContainer>
            <Link href='#servicos' scroll={false}>
              Serviços
            </Link>
          </FooterLinkContainer>
          <FooterLinkContainer>
            <Link href='#tecnologias' scroll={false}>
              Tecnologias
            </Link>
          </FooterLinkContainer>
          <FooterLinkContainer>
            <Link href='#contato' scroll={false}>
              Contato
            </Link>
          </FooterLinkContainer>
        </FooterLinks>
      </FooterInnerContainer>
    </Footer>
  );
};

const Footer = styled(GenericSection)`
  background-color: var(--accent-cyan);
`;

const FooterInnerContainer = styled(GenericInnerContainer)`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding: 24px 32px;
  gap: 48px;

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
  }

  svg {
    width: 54px;
    height: 29px;
  }
  @media (min-width: 780px) {
    svg {
      width: 72px;
      height: 40px;
    }
  }
`;

const FooterLinks = styled.ul`
  display: grid;
  width: 100%;
  row-gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 500px) {
    display: flex;
    width: unset;
    gap: 16px;
    margin-left: auto;
  }

  @media (min-width: 780px) {
    gap: 40px;
  }
`;

const FooterLinkContainer = styled.li`
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.8rem;

  color: var(--text-negative-main);

  @media (min-width: 780px) {
    font-size: 2rem;
  }
`;

export default FooterComponent;
