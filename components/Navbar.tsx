import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  GenericInnerContainer,
  GenericSection,
  MainButton,
} from "@/components/shared/sharedComponents";

import UPIcon from "./shared/icons/1UPicon";
import InstagramIcon from "./shared/icons/InstagramIcon";
import FacebookIcon from "./shared/icons/FacebookIcon";
import BurguerMenuIcon from "./shared/icons/BurguerMenuIcon";

const NavbarComponent = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Nav as='nav'>
      <NavContainer>
        <UPIcon />
        <DesktopList>
          <li>
            <CustomLink href='/'>Home</CustomLink>
          </li>
          <li>
            <CustomLink href='/'>Serviços</CustomLink>
          </li>
          <li>
            <CustomLink href='/'>Tecnologias</CustomLink>
          </li>
        </DesktopList>
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
                <CustomLink href='/'>Home</CustomLink>
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
                <CustomLink href='/'>Serviços</CustomLink>
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
                <CustomLink href='/'>Tecnologias</CustomLink>
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
                <CustomLink href='/'>Contato</CustomLink>
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
                    <InstagramIcon />
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
                    <FacebookIcon />
                  </motion.li>
                </SocialMediaList>
              </SocialMediaListContainer>
            </MobileNavList>
          ) : null}
        </AnimatePresence>

        <CtaButton>Entre em Contato</CtaButton>
        <BurguerMenu
          onClick={() => {
            setMobileOpen((prev) => !prev);
          }}
          $active={mobileOpen}
        >
          <BurguerMenuIcon />
        </BurguerMenu>
      </NavContainer>
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

const NavContainer = styled(GenericInnerContainer)`
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

  :hover {
    outline: 3px solid var(--background-3);
    outline-offset: -2px;
    transition: 100ms;
  }

  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

const DesktopList = styled.ul`
  flex-direction: row;
  position: static;
  background: transparent;
  display: flex;

  margin-left: 98px;
  margin-right: auto;
  gap: 38px;

  @media (max-width: 1000px) {
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

const CtaButton = styled(MainButton)`
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

  /* svg * {
    transition: 400ms ease-in-out;
  }

  .middleBar {
    stroke: ${(props) => (props.$active ? "transparent" : "#ffffff")};
    transform: ${(props) => (props.$active ? "translateX(25px)" : "none")};
  }

  .bottomBar {
    transform: ${(props) =>
    props.$active
      ? "rotate(-41.36deg) translateX(-15px) translateY(-2px)"
      : "rotate(none)"};
    width: ${(props) => (props.$active ? "24px" : "19px")};
  }

  .topBar {
    transform: ${(props) =>
    props.$active
      ? "rotate(41.36deg) translateX(6.5px) translateY(-6.5px)"
      : "rotate(none)"};
    width: ${(props) => (props.$active ? "26px" : "19px")};
  } */

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
