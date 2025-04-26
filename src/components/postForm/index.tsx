import { ButtonContent, InputContent } from "../../styles/globalStyles";
import Button from "../button";
import * as S from "./styles";
import { PostFormProps } from "./types";

const PostForm: React.FC<PostFormProps> = ({
  isModal = false,
  isEdit = false,
  title,
  setIsVisible,
}) => {
  return (
    <S.PostFormContent isModal={isModal}>
      <h1>{title ? title : "What’s on your mind?"}</h1>
      <InputContent>
        <label>Title</label>
        <input placeholder="Hello world"></input>
      </InputContent>

      <InputContent>
        <label>Content</label>
        <textarea placeholder="Content here"></textarea>
      </InputContent>
      {isEdit && setIsVisible ? (
        <ButtonContent>
          <Button color="white" onClick={() => setIsVisible(false)}>
            Cancel
          </Button>
          <Button color="green">Save</Button>
        </ButtonContent>
      ) : (
        <ButtonContent>
          <Button color="blue">Create</Button>
        </ButtonContent>
      )}
    </S.PostFormContent>
  );
};

export default PostForm;
