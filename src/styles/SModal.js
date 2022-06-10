import styled from "styled-components";

export const SModal = styled.div`
  position: fixed;
  z-index: 99;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${({ theme }) => theme.bg};
  border-radius: 2px;
  box-shadow: 0 0 16px ${({ theme }) => theme.bgAlpha};
`;

export const SModalHeader = styled.header`
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const SModalBody = styled.main`
  padding: 1rem;
`;

export const SModalFooter = styled.footer`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;
