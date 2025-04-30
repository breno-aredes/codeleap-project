import * as S from "./styles";
import { PostProps } from "./types";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";

import EditPost from "../modal/editPost";
import { useState } from "react";
import DeletePost from "../modal/deletePost";
import { useUser } from "../../hooks/useUser";
import { PostService } from "../../services/post";
import { toast } from "react-toastify";
import { useLoading } from "../../hooks/useLoading";

import { FaHeart } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

import CommentMentions from "../comment";

const Post: React.FC<PostProps> = ({
  title,
  name,
  time,
  text,
  id,
  fetchPosts,
}) => {
  const [editIsVisible, setEditIsVisible] = useState(false);
  const [deleteIsVisible, setDeleteIsVisible] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const { username } = useUser();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const { setLoading } = useLoading();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await PostService.deletePost(id);
      toast.success("Post deleted successfully!");
      fetchPosts();
      setDeleteIsVisible(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao deletar o post:", error);
      toast.error("Error deleting the post. Please try again.");
    }
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prevLikes) => prevLikes - 1);
      setHasLiked(false);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
      setHasLiked(true);
    }
  };

  return (
    <S.PostContainer>
      <S.PostHeader>
        <h1>{title}</h1>
        {username === name && (
          <S.IconsContainer>
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
          </S.IconsContainer>
        )}
      </S.PostHeader>
      <S.PostData>
        <S.PostMain>
          <h2>@{name}</h2>
          <p>{time}</p>
        </S.PostMain>
        <h3>{text}</h3>
      </S.PostData>

      <S.PostFooter>
        <S.ReactionIconsContainer isColored={hasLiked}>
          <FaHeart onClick={handleLike} />
          <span>{likes}</span>
        </S.ReactionIconsContainer>
        <S.ReactionIconsContainer isColored={isCommentOpen}>
          <IoIosChatboxes
            onClick={() => {
              setIsCommentOpen(!isCommentOpen);
            }}
          />
          <span>0 </span>
        </S.ReactionIconsContainer>
      </S.PostFooter>

      {isCommentOpen && (
        <S.CommentSection>
          <CommentMentions />
        </S.CommentSection>
      )}

      <EditPost
        isVisible={editIsVisible}
        setIsVisible={setEditIsVisible}
        postId={id}
        fetchPosts={fetchPosts}
        title={title}
        content={text}
      />
      <DeletePost
        isVisible={deleteIsVisible}
        setIsVisible={setDeleteIsVisible}
        onConfirm={handleDelete}
      />
    </S.PostContainer>
  );
};

export default Post;
