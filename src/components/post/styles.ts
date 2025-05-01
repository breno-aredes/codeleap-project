import styled from "styled-components";

export const PostContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 24px;

  img {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.5s;
    padding: 5px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const PostHeader = styled.header`
  padding: 20px 24px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 15px 15px 0px 0px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  h1 {
    font-weight: 700;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const PostData = styled.div`
  padding: 24px;

  h3 {
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 16px;
    white-space: pre-line;
  }
`;

export const PostMain = styled.main`
  color: ${({ theme }) => theme.colors.inputBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    font-size: 18px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    text-align: right;
  }
`;

export const ReactionIconsContainer = styled.div<{ isColored?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  svg {
    width: 23px;
    height: 23px;

    cursor: pointer;
    transition: transform 0.3s;
    color: ${({ theme, isColored }) =>
      isColored ? theme.colors.primary : theme.colors.secondary};
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const PostFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0px 0px 15px 15px;
`;

export const ReactionContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ReactionSection = styled.div`
  gap: 24px;
  padding: 16px;
`;

export const CommentOpen = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (!isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

export const CommentSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  padding: 30px 24px 24px 24px;

  gap: 28px;
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
`;
