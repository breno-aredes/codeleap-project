import styled from "styled-components";

export const PostFormContent = styled.div<{ isModal: boolean }>`
  padding: ${({ isModal }) => (isModal ? "0" : "24px")};
  width: 100%;
  box-sizing: border-box;
  border: ${({ isModal, theme }) =>
    isModal ? "none" : `1px solid ${theme.colors.border}`};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h1 {
    font-weight: 700;
    font-size: 22px;
  }
`;
