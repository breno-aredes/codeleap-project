import { ButtonContent, InputContent } from "../../styles/globalStyles";
import Button from "../button";
import * as S from "./styles";
import { PostFormProps } from "./types";

const PostForm: React.FC<PostFormProps> = ({ isModal = false }) => {
  return (
    <S.PostFormContent isModal={isModal}>
      <h1>What’s on your mind?</h1>
      <InputContent>
        <label>Tittle</label>
        <input placeholder="Hello world"></input>
      </InputContent>

      <InputContent>
        <label>Content</label>
        <textarea placeholder="Content here"></textarea>
      </InputContent>
      <ButtonContent>
        <Button color="blue">Create</Button>
      </ButtonContent>
    </S.PostFormContent>
  );
};

export default PostForm;
