import styled from "styled-components";

export const SModalAlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  width: 60vw;
  color: ${({ theme, variant }) => (variant ? theme[variant] : "inherit")};

  & > svg {
    font-size: 4rem;
  }
`;
