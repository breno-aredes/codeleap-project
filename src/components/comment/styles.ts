import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  margin-bottom: 5px;
  position: absolute;
  top: -20px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgb(202, 202, 202);
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Timestamp = styled.span`
  font-size: 12px;
  color: #888 !important;
`;

export const Content = styled.p`
  margin: 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 8px;

  span {
    width: auto;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.div`
  margin-bottom: 5px;
  position: absolute;
  bottom: -30px;
  right: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgb(202, 202, 202);
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 8px;

  img,
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    transition: background-color 0.5s;
    padding: 5px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const ReactionIconsContainer = styled.div<{ isColored?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  svg {
    color: ${({ theme, isColored }) =>
      isColored ? theme.colors.primary : theme.colors.secondary};
  }
`;
