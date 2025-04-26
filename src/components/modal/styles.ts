import styled from "styled-components";

export const ModalBackground = styled.main<{ isWide: boolean }>`
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: default;
  opacity: ${({ isWide }) => (isWide ? "0.8" : "1")};
  pointer-events: auto;
`;

export const ModalContainer = styled.div<{ isWide: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${({ isWide }) => (isWide ? "660px" : "500px")};
  min-height: 100px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  opacity: 1;
`;
