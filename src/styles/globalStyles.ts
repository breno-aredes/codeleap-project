import styled from "styled-components";

export const ButtonContent = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 100%;
    height: 32px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    box-sizing: border-box;
    padding: 8px 11px;
    margin-bottom: 16px;

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
  }

  label {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;
