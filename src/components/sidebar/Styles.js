import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../styles/Variables";

export const SSidebar = styled.div`
  @media screen and (max-width: ${v.mdWidth}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bgAlpha};
    display: ${({ show }) => (show ? "flex" : "none")};
  }
`;

export const SSidebarButton = styled.button`
  @media screen and (max-width: ${v.mdWidth}) {
    ${btnReset};
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    padding: 0.5rem;
    color: ${({ theme }) => theme.bg};

    svg {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: ${v.mdWidth}) {
    display: none;
  }
`;

export const SNavMenu = styled.nav`
  @media screen and (max-width: ${v.mdWidth}) {
    width: 80%;
    background-color: ${({ theme }) => theme.bgBase};
  }
`;

export const SMenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
