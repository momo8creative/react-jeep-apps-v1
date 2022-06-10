import styled from "styled-components";

export const SToastContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  background-color: ${({ theme, status }) =>
    status ? theme[status] : theme.bgAlpha};
  color: ${({ theme }) => theme.bg};
`;
