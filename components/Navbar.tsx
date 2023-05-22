import styled from "styled-components";
import {
  GenericInnerContainer,
  GenericSection,
  MainButton,
} from "./shared/sharedComponents";
import UPIcon from "./icons/1UPicon";
import MobileIcon from "./icons/Mobile";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <>
      <GenericSection>
        <CustomGenericInnerContainer>
          <NavContainer>
            <IconContainer>
              <UPIcon />
            </IconContainer>
            <ButtonsLinks>
              <li>
                <CustomLink href='/'>Home</CustomLink>
              </li>
              <li>
                <CustomLink href='/'>Serviços</CustomLink>
              </li>
              <li>
                <CustomLink href='/'>Tecnologias</CustomLink>
              </li>
            </ButtonsLinks>
          </NavContainer>
          <CustomMainButton>Entre em Contato</CustomMainButton>
          <MobileIconContainer>
            <MobileIcon />
          </MobileIconContainer>
        </CustomGenericInnerContainer>
      </GenericSection>
    </>
  );
};

const CustomGenericInnerContainer = styled(GenericInnerContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const ButtonsLinks = styled.ul`
  display: flex;
  gap: 50px;
  margin-left: 98px;
`;

const CustomLink = styled(Link)`
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 25px;

  color: var(--text-main);

  :hover {
    cursor: pointer;
    outline: 2px solid var(--background-3);
    color: var(--background-3);
    border-radius: 5px;
    outline-offset: 5px;

    transition: 20ms;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

const CustomMainButton = styled(MainButton)`
  @media (max-width: 920px) {
    display: none;
  }
`;

const MobileIconContainer = styled.div`
  display: none;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 920px) {
    display: flex;
  }
`;

export default Navbar;
