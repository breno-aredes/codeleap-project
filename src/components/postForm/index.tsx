import { ButtonContent } from "../../styles/globalStyles";
import Button from "../button";
import * as S from "./styles";
import { PostFormProps } from "./types";

const PostForm: React.FC<PostFormProps> = ({ isModal = false }) => {
  return (
    <S.PostFormContent isModal={isModal}>
      <ButtonContent>
        <Button color="blue">Create</Button>
      </ButtonContent>
    </S.PostFormContent>
  );
};

export default PostForm;
