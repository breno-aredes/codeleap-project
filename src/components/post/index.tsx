import * as S from "./styles";
import { PostProps } from "./types";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";

import EditPost from "../modal/editPost";
import { useState } from "react";
import DeletePost from "../modal/deletePost";

import { PostService } from "../../services/post";
import { toast } from "react-toastify";
import { useLoading } from "../../hooks/useLoading";

import { FaHeart } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

import CommentForm from "../commentForm";
import Comment from "../comment";
import { useAuth } from "../../hooks/useAuth";
import formatTime from "../../utils/formatTime";

const Post: React.FC<PostProps> = ({ data, fetchPosts }) => {
  const [editIsVisible, setEditIsVisible] = useState(false);
  const [deleteIsVisible, setDeleteIsVisible] = useState(false);
  const [likes, setLikes] = useState(data.likes_count);
  const [hasLiked, setHasLiked] = useState(data.is_liked);
  const { username } = useAuth();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const { setLoading } = useLoading();
  const postService = PostService();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await postService.deletePost(data.id);
      toast.success("Post deleted successfully!");
      fetchPosts();
      setDeleteIsVisible(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao deletar o post:", error);
      toast.error("Error deleting the post. Please try again.");
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
      await postService.likePost(data.id);
      fetchPosts();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error liking the post:", error);
      toast.error("Error liking the post. Please try again.");
    }
  };

  return (
    <S.PostContainer>
      <S.PostHeader>
        <h1>{data.title}</h1>
        {username === data.username && (
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
          <h2>@{data.username}</h2>
          <p>{formatTime(data.created_datetime)}</p>
        </S.PostMain>
        <h3>{data.content}</h3>
      </S.PostData>

      <S.PostFooter>
        <S.ReactionContainer>
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
            <span>1 </span>
          </S.ReactionIconsContainer>
          <span> ver comentarios</span>
        </S.ReactionContainer>

        <S.CommentSection style={{ marginBottom: "20px" }}>
          <Comment
            name="teste"
            content="blablablbablabla fdskj çdfjsflkas fçads çfasdç fjadçsf jçads jfçadsjfçljsçfdjsa çff jdflç ajsfa dsfaslkfa djlk "
            timestamp="1231"
          />
          <Comment
            name="teste2 "
            content="blablablbablabla "
            timestamp="12:31"
          />
        </S.CommentSection>
      </S.PostFooter>

      {isCommentOpen && (
        <S.CommentSection>
          <CommentForm />
        </S.CommentSection>
      )}

      <EditPost
        isVisible={editIsVisible}
        setIsVisible={setEditIsVisible}
        postId={data.id}
        fetchPosts={fetchPosts}
        title={data.title}
        content={data.content}
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
