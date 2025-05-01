import React from "react";
import * as S from "./styles";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";
import { FaHeart } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { CommentProps } from "./types";

const Comment: React.FC<CommentProps> = ({
  name,
  content,
  timestamp,
  mentions,
}) => {
  const { username } = useAuth();
  const highlightMentions = (text: string, mentions: string[]) => {
    const mentionRegex = new RegExp(`@(${mentions.join("|")})`, "gi");
    return text
      .split(mentionRegex)
      .map((part, index) =>
        mentions.includes(part.toLowerCase()) ? (
          <span key={index}>@{part}</span>
        ) : (
          part
        )
      );
  };

  return (
    <S.Container>
      <S.Header>
        <strong>@{name}</strong>
      </S.Header>
      <S.Content>
        <h2>{highlightMentions(content, mentions)}</h2>

        <S.Timestamp>{timestamp}</S.Timestamp>
      </S.Content>

      <S.Footer>
        <S.IconsContainer>
          {username === name && (
            <>
              <img src={TrashIcon} alt="Trash" />
              <img src={EditIcon} alt="Edit" />
            </>
          )}
          <S.ReactionIconsContainer>
            <FaHeart />
            <span>0</span>
          </S.ReactionIconsContainer>
        </S.IconsContainer>
      </S.Footer>
    </S.Container>
  );
};

export default Comment;
