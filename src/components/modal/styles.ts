import styled from "styled-components";

export const ModalBackground = styled.main<{ isWide: boolean }>`
  background-color: ${({ theme, isWide }) =>
    isWide ? theme.colors.backgroundWithOpacity : theme.colors.background};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: default;
  pointer-events: auto;
`;

export const ModalContainer = styled.div<{ isWide: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${({ isWide }) => (isWide ? "660px" : "500px")};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  opacity: 1;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 700px) {
    width: 80vw;
  }
`;
