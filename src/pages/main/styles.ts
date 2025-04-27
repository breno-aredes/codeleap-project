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
