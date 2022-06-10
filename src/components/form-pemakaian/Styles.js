import styled from "styled-components";
import { inputReset } from "../../styles/Variables";

export const SFormBody = styled.main`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const SFormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 1rem;
`;

export const SFormGroupTitle = styled.h4`
  width: 100%;
`;

export const SFormGroup = styled.article`
  flex: 1;

  label {
    font-size: 90%;
    opacity: 0.7;
  }
`;

export const SFormControl = styled.input`
  ${inputReset};
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${({ theme, readOnly }) =>
    readOnly ? theme.bg1 : theme.bg};
  outline: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  :focus {
    outline: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const SFormFooter = styled.footer`
  padding: 0.5rem 1rem;
`;
