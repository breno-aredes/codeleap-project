import * as S from "./styles";
import { PostProps } from "./types";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";

const Post: React.FC<PostProps> = ({ title, name, hour, text }) => {
  return (
    <S.PostContainer>
      <S.PostHeader>
        <h1>{title}</h1>
        <S.IconsContainer>
          <img src={TrashIcon} alt="Trash" />
          <img src={EditIcon} alt="Edit" />
        </S.IconsContainer>
      </S.PostHeader>
      <S.PostData>
        <S.PostMain>
          <h2>{name}</h2>
          <p>{hour}</p>
        </S.PostMain>
        <h3>{text}</h3>
      </S.PostData>
    </S.PostContainer>
  );
};

export default Post;
