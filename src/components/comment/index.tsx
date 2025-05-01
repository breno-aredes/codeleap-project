import React, { useState } from "react";
import * as S from "./styles";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";
import { FaHeart } from "react-icons/fa";
// import { useAuth } from "../../hooks/useAuth";
import { CommentProps } from "./types";
import DeleteComment from "../modal/deleteItem";
import { useLoading } from "../../hooks/useLoading";
import { PostService } from "../../services/post";
import { toast } from "react-toastify";

const Comment: React.FC<CommentProps> = ({
  name,
  content,
  timestamp,
  mentions,
  commentId,
  postId,
  loadComents,
}) => {
  const [deleteIsVisible, setDeleteIsVisible] = useState(false);
  // const { username } = useAuth();
  const { setLoading } = useLoading();
  const postService = PostService();
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

  const handleDelete = async () => {
    try {
      setLoading(true);
      await postService.deleteComment(postId, commentId);
      toast.success("Comment deleted successfully!");
      loadComents();
      setDeleteIsVisible(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao deletar o post:", error);
      toast.error("Error deleting the post. Please try again.");
    }
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
          {/* {username === name && ( */}
          <>
            <img
              src={TrashIcon}
              alt="Trash"
              onClick={() => setDeleteIsVisible(true)}
            />
            <img src={EditIcon} alt="Edit" />
          </>
          {/*  )} */}
          <S.ReactionIconsContainer>
            <FaHeart />
            <span>0</span>
          </S.ReactionIconsContainer>
        </S.IconsContainer>
      </S.Footer>

      <DeleteComment
        isVisible={deleteIsVisible}
        onConfirm={handleDelete}
        setIsVisible={setDeleteIsVisible}
      />
    </S.Container>
  );
};

export default Comment;
