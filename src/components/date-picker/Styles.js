import styled from "styled-components";

export const SDateContainer = styled.div`
  padding: 0.5rem 0;
  width: 80vw;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const SDateValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.bg1};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const SDateTanggal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;

  & > * {
    width: calc(100% / 7 - 0.2rem);
  }
`;

export const SDateTanggalItem = styled.button`
  font-size: 1rem;
  border: none;
  padding: 0.5rem 0;
  background-color: ${({ theme, active }) =>
    active == "true" ? theme.primary : ""};
  color: ${({ theme, active, minggu }) =>
    minggu == "true" ? "red" : active == "true" ? theme.bg : ""};
`;
