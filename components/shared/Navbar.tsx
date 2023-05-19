import styled from 'styled-components';
import {
  GenericInnerContainer,
  GenericSection,
  MainButton,
} from '@/components/shared/sharedComponents';
import LogoIcon from '@/components/shared/icons/logo';
import Link from 'next/link';
import BurguerMenuIcon from '@/components/shared/icons/burguerMenuIcon';
import InstagramIcon from '@/components/shared/icons/instagramIcon';
import FacebookIcon from '@/components/shared/icons/facebookIcon';
import { useState } from 'react';

const NavbarComponent = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Nav as='nav'>
      <NavInnerContainer>
        <LogoIcon />
        <DesktopNavList>
          <li>
            <CustomLink href='/'>Home</CustomLink>
          </li>
          <li>
            <CustomLink href='/'>Serviços</CustomLink>
          </li>
          <li>
            <CustomLink href='/'>Tecnologias</CustomLink>
          </li>
        </DesktopNavList>
        {mobileOpen ? (
          <MobileNavList>
            <li>
              <CustomLink href='/'>Home</CustomLink>
            </li>
            <li>
              <CustomLink href='/'>Serviços</CustomLink>
            </li>
            <li>
              <CustomLink href='/'>Tecnologias</CustomLink>
            </li>
            <li>
              <CustomLink href='/'>Contato</CustomLink>
            </li>
            <SocialMediaListContainer>
              <SocialMediaList>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
              </SocialMediaList>
            </SocialMediaListContainer>
          </MobileNavList>
        ) : null}

        <CtaButton>Entre em Contato</CtaButton>
        <BurguerMenu
          onClick={() => {
            setMobileOpen((prev) => !prev);
          }}
        >
          <BurguerMenuIcon />
        </BurguerMenu>
      </NavInnerContainer>
    </Nav>
  );
};

const Nav = styled(GenericSection)`
  height: 100px;

  @media (min-width: 1000px) {
    height: 120px;
  }
`;

const NavInnerContainer = styled(GenericInnerContainer)`
  display: flex;
  align-items: center;
`;

const CustomLink = styled(Link)`
  font-family: var(--font-title);
  font-weight: 600;
  padding: 6px 10px;
  border-radius: var(--rounded-sm);
  font-size: 4.8rem;
  color: #ffffff;

  transition: 400ms ease-in-out;

  outline: 2px solid transparent;
  outline-offset: -2px;

  &:hover {
    color: var(--accent-cyan);
    outline-color: var(--accent-cyan);
  }

  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

const DesktopNavList = styled.ul`
  flex-direction: row;
  margin-left: 98px;
  margin-right: auto;

  gap: 38px;

  position: static;
  width: unset;
  height: unset;
  background: transparent;
  display: flex;

  @media (max-width: 999px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  width: 100%;
  height: calc(100vh - 100px);
  position: fixed;
  top: 99px;
  left: 0px;
  background: var(--background-2);
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const CtaButton = styled(MainButton)`
  @media (max-width: 999px) {
    display: none;
  }
`;

const BurguerMenu = styled.button`
  padding: 6px;
  margin: -6px;
  margin-left: auto;

  @media (min-width: 1000px) {
    display: none;
    margin-left: 0;
  }
`;

const SocialMediaListContainer = styled.li`
  margin-top: 21px;
`;

const SocialMediaList = styled.ul`
  display: flex;
  gap: 22px;
`;

export default NavbarComponent;
