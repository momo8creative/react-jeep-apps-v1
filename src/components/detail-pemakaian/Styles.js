import styled from "styled-components";

export const SContainer = styled.div`
  padding: 0.5rem 1rem;
`;

export const SContent = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 0.5rem 1rem;
`;

export const SRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  padding: 0.2rem 0;

  & > h5 {
    width: 100%;
  }
  & > div {
    flex: 1;
  }

  & h4 {
    background-color: ${({ theme }) => theme.bg1};
    padding: 0.5rem 1rem;
  }
`;

export const SFooter = styled.footer`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 1rem;

  & > * {
    flex: 1;
  }
`;
