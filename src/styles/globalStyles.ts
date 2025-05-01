import styled from "styled-components";

export const ButtonContent = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 16px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input,
  textarea {
    width: 100%;
    height: 32px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    box-sizing: border-box;
    padding: 8px 11px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0%;
    }
    &:focus {
      outline: none;
    }
  }

  textarea {
    height: 74px;
    resize: none;
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.inputBorder};
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 50px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 50px;
    }
  }

  label {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.colors.red.primaryRed};
    font-weight: 400;
    font-size: 12px;
    margin-top: 6px;
  }
`;
