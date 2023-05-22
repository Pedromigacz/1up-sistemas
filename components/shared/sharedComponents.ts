import styled from "styled-components";

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
  font-family: var(--font-main);
  font-weight: 700;
  font-size: 25px;

  color: var(--text-3);
  background: var(--background-3);

  box-shadow: 0px 14px 80px rgba(255, 255, 255, 0.07),
    0px 5.84887px 33.4221px rgba(255, 255, 255, 0.0503198),
    0px 3.12708px 17.869px rgba(255, 255, 255, 0.0417275),
    0px 1.75302px 10.0172px rgba(255, 255, 255, 0.035),
    0px 0.931014px 5.32008px rgba(255, 255, 255, 0.0282725),
    0px 0.387416px 2.21381px rgba(255, 255, 255, 0.0196802);

  border-radius: var(--rounded-sm);
  padding: 10px 20px;

  :hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-2);
  font-weight: 800;
  font-size: 50px;

  letter-spacing: -0.01em;

  color: var(--text-main);
`;

export const SubTitle = styled.h2`
  font-family: "JUST Sans";
  font-weight: 800;
  font-size: 30px;
  line-height: 39px;

  color: #ffffff;
`;

export const Paragraph = styled.p`
  font-family: var(--font-main);
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: var(--text-main);
`;
