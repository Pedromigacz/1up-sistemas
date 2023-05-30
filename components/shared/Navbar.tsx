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

const NavbarComponent = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeNavbar = () => {
    setMobileOpen(false);
  };

  return (
    <Nav as='nav'>
      <NavInnerContainer>
        <Link href='#home' scroll={false}>
          <LogoIcon />
        </Link>
        <DesktopNavList>
          <li>
            <CustomLink href='#home' scroll={false}>
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink href='#servicos' scroll={false}>
              Serviços
            </CustomLink>
          </li>
          <li>
            <CustomLink href='#tecnologias' scroll={false}>
              Tecnologias
            </CustomLink>
          </li>
        </DesktopNavList>
        <AnimatePresence>
          {mobileOpen ? (
            <MobileNavList
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={closeNavbar}
            >
              <motion.li
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.16,
                }}
              >
                <CustomLink href='#home' onClick={closeNavbar} scroll={false}>
                  Home
                </CustomLink>
              </motion.li>
              <motion.li
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.22,
                }}
              >
                <CustomLink
                  href='#servicos'
                  onClick={closeNavbar}
                  scroll={false}
                >
                  Serviços
                </CustomLink>
              </motion.li>
              <motion.li
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.28,
                }}
              >
                <CustomLink
                  href='#tecnologias'
                  onClick={closeNavbar}
                  scroll={false}
                >
                  Tecnologias
                </CustomLink>
              </motion.li>
              <motion.li
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.34,
                }}
              >
                <CustomLink href='#contato' scroll={false}>
                  Contato
                </CustomLink>
              </motion.li>
              <SocialMediaListContainer>
                <SocialMediaList>
                  <motion.li
                    initial={{
                      y: 60,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                  >
                    <Link
                      href='https://www.instagram.com/umupsistemas/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{
                      y: 60,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                  >
                    <Link
                      href='https://www.instagram.com/umupsistemas/'
                      target='_blank'
                    >
                      <FacebookIcon />
                    </Link>
                  </motion.li>
                </SocialMediaList>
              </SocialMediaListContainer>
            </MobileNavList>
          ) : null}
        </AnimatePresence>

        <CtaButton href='#contato' scroll={false}>
          Entre em Contato
        </CtaButton>
        <BurguerMenu
          onClick={() => {
            setMobileOpen((prev) => !prev);
          }}
          $active={mobileOpen}
        >
          <BurguerMenuIcon />
        </BurguerMenu>
      </NavInnerContainer>
    </Nav>
  );
};

const Nav = styled(GenericSection)`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  @media (min-width: 1000px) {
    position: static;

    height: 120px;
  }
`;

const NavInnerContainer = styled(GenericInnerContainer)`
  display: flex;
  align-items: center;
  background-color: var(--background-main);
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

const MobileNavList = styled(motion.ul)`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  position: fixed;
  top: 0px;
  left: 0px;
  background: var(--background-2);
  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

interface CtaButtonProps {
  href: string;
  scroll: boolean;
}

const CtaButton = styled(MainButton).attrs({ as: Link })<CtaButtonProps>`
  @media (max-width: 999px) {
    display: none;
  }
`;

interface BurguerMenuProps {
  $active: boolean;
}

const BurguerMenu = styled.button<BurguerMenuProps>`
  padding: 6px;
  margin: -6px;
  margin-left: auto;

  svg * {
    transition: 400ms ease-in-out;
  }

  .middleBar {
    stroke: ${(props) => (props.$active ? 'transparent' : '#ffffff')};
    transform: ${(props) => (props.$active ? 'translateX(25px)' : 'none')};
  }

  .bottomBar {
    transform: ${(props) =>
      props.$active
        ? 'rotate(-41.36deg) translateX(-15px) translateY(-2px)'
        : 'rotate(none)'};
    width: ${(props) => (props.$active ? '24px' : '19px')};
  }

  .topBar {
    transform: ${(props) =>
      props.$active
        ? 'rotate(41.36deg) translateX(6.5px) translateY(-6.5px)'
        : 'rotate(none)'};
    width: ${(props) => (props.$active ? '26px' : '19px')};
  }

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
