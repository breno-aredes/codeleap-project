import * as S from "./styles";
import { CommentPost, PostProps } from "./types";
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

import { useAuth } from "../../hooks/useAuth";
import formatTime from "../../utils/formatTime";
import { AiOutlineCaretDown } from "react-icons/ai";
import Comment from "../comment";

const Post: React.FC<PostProps> = ({ data, fetchPosts }) => {
  const [editIsVisible, setEditIsVisible] = useState(false);
  const [deleteIsVisible, setDeleteIsVisible] = useState(false);
  const [likes, setLikes] = useState(data.likes_count);
  const [hasLiked, setHasLiked] = useState(data.is_liked);
  const { username } = useAuth();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const { setLoading } = useLoading();
  const postService = PostService();
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [postComments, setPostComments] = useState<CommentPost[] | null>(null);

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
      toast.error("Error liking the post. Please try again later.");
    }
  };

  const fetchLoadComments = async () => {
    try {
      setLoading(true);
      const response = await postService.loadPostComments(data.id);
      setPostComments(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching post comments:", error);
      toast.error("Error fetching comments. Please try again later.");
    }
  };

  const handleCommentIsOpen = async () => {
    if (!commentIsOpen) {
      await fetchLoadComments();
    }
    setLoading(false);
    setCommentIsOpen(!commentIsOpen);
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
        <S.ReactionSection>
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
          </S.ReactionContainer>
          <S.CommentOpen isOpen={commentIsOpen}>
            <h2 onClick={() => handleCommentIsOpen()}>
              <AiOutlineCaretDown /> see comments
              <AiOutlineCaretDown />
            </h2>
          </S.CommentOpen>
        </S.ReactionSection>

        {commentIsOpen && (
          <S.CommentSection style={{ marginBottom: "20px" }}>
            {postComments?.map((comment) => (
              <Comment
                key={comment.id}
                name={""}
                content={comment.content}
                mentions={comment.mentioned_users}
                timestamp={formatTime(comment.created_at).toLocaleString()}
              />
            ))}
          </S.CommentSection>
        )}
      </S.PostFooter>

      {isCommentOpen && (
        <S.CommentSection>
          <CommentForm postId={data.id} loadComents={fetchLoadComments} />
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
