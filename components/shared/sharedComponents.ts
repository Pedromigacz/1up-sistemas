import styled from 'styled-components';

export const GenericInnerContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: var(--container-padding);
  margin: 0 auto;
`;

export const GenericSection = styled.section`
  width: 100%;
  display: inline-grid;
`;

export const MainButton = styled.button`
  padding: 10px 20px;
  font-size: 2.5rem;
  font-family: var(--font-body);
  font-weight: 700;
  background: var(--accent-cyan);
  color: var(--text-negative-main);
  border-radius: var(--rounded-sm);
  box-shadow: 0px 14px 80px rgba(255, 255, 255, 0.07),
    0px 5.84887px 33.4221px rgba(255, 255, 255, 0.0503198),
    0px 3.12708px 17.869px rgba(255, 255, 255, 0.0417275),
    0px 1.75302px 10.0172px rgba(255, 255, 255, 0.035),
    0px 0.931014px 5.32008px rgba(255, 255, 255, 0.0282725),
    0px 0.387416px 2.21381px rgba(255, 255, 255, 0.0196802);

  /* transition: 800ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    box-shadow: 0px 14px 80px rgba(255, 255, 255, 0.09),
      0px 5.84887px 33.4221px rgba(255, 255, 255, 0.056),
      0px 3.12708px 17.869px rgba(255, 255, 255, 0.044),
      0px 1.75302px 10.0172px rgba(255, 255, 255, 0.04),
      0px 0.931014px 5.32008px rgba(255, 255, 255, 0.03),
      0px 0.387416px 2.21381px rgba(255, 255, 255, 0.02);
  } */

  @media (max-width: 780px) {
    font-size: 1.5rem;
    padding: 8px 16px;
  }
`;

// text

export const Title1 = styled.h1`
  font-family: var(--font-title);
  font-weight: 800;
  color: var(--text-main);
  font-size: 3rem;
  line-height: 125%;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: 780px) {
    font-size: 5rem;
  }
`;

export const Title2 = styled(Title1)``;

export const Title3 = styled.h3`
  font-family: var(--font-title);
  font-weight: 800;
  color: var(--text-main);
  font-size: 2.5rem;

  line-height: 125%;
  letter-spacing: -0.01em;
  margin-bottom: 7px;

  @media (min-width: 780px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--text-main);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 780px) {
    font-size: 1.5rem;
  }
`;
