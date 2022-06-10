import styled from "styled-components";
import { btnReset } from "../../styles/Variables";

export const SButton = styled.button`
  ${btnReset};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  letter-spacing: 0.2px;
  outline-offset: -2px;
  outline: ${({ theme, outline, variant }) =>
    outline
      ? variant
        ? "2px solid " + theme[variant]
        : "2px solid " + theme.text
      : ""};
  color: ${({ theme, outline, variant }) =>
    outline
      ? variant
        ? variant == "warning"
          ? theme.text
          : theme[variant]
        : theme.text
      : theme.bg};
  background-color: ${({ theme, outline, variant }) =>
    outline ? theme.bg : variant ? theme[variant] : theme.secondary};

  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "")};
`;
