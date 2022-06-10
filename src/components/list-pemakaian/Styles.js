import styled from "styled-components";
import { btnReset, v } from "../../styles/Variables";

export const SListContainer = styled.ul`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const SListItemAction = styled.div`
  display: none;
  @media screen and (min-width: ${v.mdWidth}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.bgAlpha};
  }

  @media screen and (max-width: ${v.mdWidth}) {
    width: 100%;
    justify-content: center;
    padding: 0.5rem 0;
  }
`;

export const SListActionButton = styled.button`
  ${btnReset};
  padding: 0.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.bg};
  border-right: 1px solid ${({ theme }) => theme.bg2};
  color: ${({ theme, variant }) => (variant ? theme[variant] : "")};

  :last-child {
    border: none;
  }

  :hover {
    filter: brightness(150%);
    background-color: ${({ theme, variant }) =>
      variant ? theme[variant] : ""};
    color: ${({ theme, variant }) =>
      variant == "warning" ? theme.text : theme.bg};
  }
  @media screen and (max-width: ${v.mdWidth}) {
    border: none;
    outline: 1px solid ${({ theme }) => theme.bgAlpha};
    border-radius: 2px;
  }
`;

export const SList = styled.li`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  background-color: ${({ theme }) => theme.bg};
  padding: 0.5rem;
  border-radius: 2px;

  :hover {
    ${SListItemAction} {
      display: flex;
    }
  }

  @media screen and (min-width: ${v.mdWidth}) {
    position: relative;
  }
`;

export const SListItemLeft = styled.div`
  background-color: ${({ theme }) => theme.bg3};
  color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  & > * {
    text-align: center;
    padding: 0 0.5rem;
  }
`;

export const SListItem = styled.div`
  display: flex;
  flex-direction: column;

  small {
    margin-top: auto;
  }
`;

export const SListItemRight = styled.div`
  margin-left: auto;
  text-align: right;
`;
