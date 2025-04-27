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
  const { username } = useUser();
  const { setLoading } = useLoading();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await PostService.deletePost(id);
      toast.success("Post deletado com sucesso!");
      fetchPosts();
      setDeleteIsVisible(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao deletar o post:", error);
      toast.error("Erro ao deletar o post. Tente novamente.");
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

      <EditPost isVisible={editIsVisible} setIsVisible={setEditIsVisible} />
      <DeletePost
        isVisible={deleteIsVisible}
        setIsVisible={setDeleteIsVisible}
        onConfirm={handleDelete}
      />
    </S.PostContainer>
  );
};

export default Post;
