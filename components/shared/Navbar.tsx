import styled from 'styled-components';
import {
  GenericInnerContainer,
  GenericSection,
  MainButton,
} from '@/components/shared/sharedComponents';
import LogoIcon from '@/components/shared/icons/logo';
import Link from 'next/link';

const NavbarComponent = (): JSX.Element => {
  return (
    <Nav as='nav'>
      <NavInnerContainer>
        <LogoIcon />
        <NavList>
          <li>
            <CustomLink href='/'>Home</CustomLink>
          </li>
          <li>
            <CustomLink href='/'>Serviços</CustomLink>
          </li>
          <li>
            <CustomLink href='/'>Tecnologias</CustomLink>
          </li>
        </NavList>
        <CtaButton>Entre em Contato</CtaButton>
      </NavInnerContainer>
    </Nav>
  );
};

const Nav = styled(GenericSection)`
  padding: 35px 0;
`;

const NavInnerContainer = styled(GenericInnerContainer)`
  display: flex;
  align-items: center;
`;

const CustomLink = styled(Link)`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 2.5rem;
  padding: 6px 10px;
  border-radius: var(--rounded-sm);
  color: #ffffff;

  transition: 400ms ease-in-out;

  outline: 2px solid transparent;
  outline-offset: -2px;

  &:hover {
    color: var(--accent-cyan);
    outline-color: var(--accent-cyan);
  }
`;

const NavList = styled.ul`
  display: flex;
  margin-left: 98px;
  gap: 38px;
`;

const CtaButton = styled(MainButton)`
  margin-left: auto;
`;

export default NavbarComponent;
