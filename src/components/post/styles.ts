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
