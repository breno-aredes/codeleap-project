import styled from "styled-components";

export const HeaderContent = styled.header`
  height: 80px;

  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-weight: 700;
    font-size: 22px;
    padding-left: 37px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
