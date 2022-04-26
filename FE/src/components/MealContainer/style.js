import styled from "styled-components";

export const Header = styled.h2`
  color: ${({ theme: { color } }) => color.grey1};
  font-size: ${({ theme: { fontSize } }) => fontSize.xLarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  line-height: 38px;
  letter-spacing: -0.008em;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  width: 1392px;
  height: 557px;
  margin: 0 auto;
`;
