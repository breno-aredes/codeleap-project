import styled from "styled-components";

export const HeaderContent = styled.header`
  min-height: 80px;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-weight: 700;
    font-size: 22px;
    padding-left: 37px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ExitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
