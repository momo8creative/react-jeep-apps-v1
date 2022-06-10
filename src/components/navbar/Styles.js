import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset } from "../../styles/Variables";

export const SNavbar = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
`;

export const SNavbarButton = styled.button`
  ${btnReset};
  padding: 0.5rem;
  svg {
    font-size: 1.5rem;
    opacity: 0.6;
  }
`;

export const SNavbarBrand = styled(Link)`
  padding: 0.5rem;
`;
