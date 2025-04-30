import styled from "styled-components";

export const ButtonContent = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
`;

export const List = styled.ul`
  position: absolute;
  bottom: 103%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 8px 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  max-height: 150px;
  overflow-y: auto;
  box-sizing: border-box;

  li {
    padding: 4px 10px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
