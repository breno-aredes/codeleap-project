import React, { useState } from "react";
import * as S from "./styles";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";
import { FaHeart } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { CommentProps } from "./types";
import DeleteComment from "../modal/deleteItem";
import { useLoading } from "../../hooks/useLoading";
import { PostService } from "../../services/post";
import { toast } from "react-toastify";
import EditComment from "../modal/editComment";

const Comment: React.FC<CommentProps> = ({
  name,
  content,
  timestamp,
  mentions,
  commentId,
  postId,
  loadComents,
  likesCount,
  isLiked,
}) => {
  const [deleteIsVisible, setDeleteIsVisible] = useState(false);
  const [editIsVisible, setEditIsVisible] = useState(false);
  const [likes, setLikes] = useState(likesCount);
  const [hasLiked, setHasLiked] = useState(isLiked);
  const { username } = useAuth();
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
      console.error("Erro ao deletar o comentário:", error);
      toast.error("Error deleting the comment. Please try again.");
    }
  };

  const handleLike = async () => {
    try {
      setLoading(true);
      if (hasLiked) {
        setLikes((prevLikes) => prevLikes - 1);
        setHasLiked(false);
      } else {
        setLikes((prevLikes) => prevLikes + 1);
        setHasLiked(true);
      }

      await postService.likeComment(commentId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error liking the comment:", error);
      toast.error("Error liking the comment. Please try again later.");
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
          {username === name && (
            <>
              <img
                src={TrashIcon}
                alt="Trash"
                onClick={() => setDeleteIsVisible(true)}
              />
              <img
                src={EditIcon}
                alt="Edit"
                onClick={() => setEditIsVisible(true)}
              />
            </>
          )}
          <S.ReactionIconsContainer isColored={hasLiked}>
            <FaHeart onClick={handleLike} />
            <span>{likes}</span>
          </S.ReactionIconsContainer>
        </S.IconsContainer>
      </S.Footer>
      <DeleteComment
        isVisible={deleteIsVisible}
        onConfirm={handleDelete}
        setIsVisible={setDeleteIsVisible}
      />
      <EditComment
        commentId={commentId}
        content={content}
        isVisible={editIsVisible}
        loadComents={loadComents}
        postId={postId}
        setIsVisible={setEditIsVisible}
        key={commentId}
      />
    </S.Container>
  );
};

export default Comment;
