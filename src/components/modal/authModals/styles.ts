import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 8px;
  }
  p {
    font-weight: 400;
    font-size: 14px;

    width: 100%;
    text-align: center;
  }
  span {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
  input {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.red.primaryRed};
    font-weight: 400;
    font-size: 12px;
    margin-top: 4px;
    margin-left: 4px;
  }
`;
