import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 800px;

  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
`;

export const NoItens = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
