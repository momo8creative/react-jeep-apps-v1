import styled from "styled-components";

export const SBackdrop = styled.div`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgAlpha};
`;
