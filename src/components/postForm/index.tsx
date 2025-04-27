import { ButtonContent, InputContent } from "../../styles/globalStyles";
import Button from "../button";
import * as S from "./styles";
import { PostFormProps } from "./types";
import React, { useEffect } from "react";

const PostForm: React.FC<PostFormProps> = ({
  isModal = false,
  isEdit = false,
  setIsVisible,
  useForm,
  onConfirm,
  title = "",
  content = "",
}) => {
  const { register, handleSubmit, formState, reset } = useForm;

  useEffect(() => {
    reset({ title, content });
  }, [title, content, reset]);

  const onSubmit = (data: any) => {
    onConfirm(data);
    reset();
    if (setIsVisible) setIsVisible(false);
  };

  return (
    <S.PostFormContent isModal={isModal}>
      <h1>{isEdit ? "Edit item" : "What’s on your mind?"}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContent>
          <label>Title</label>
          <input
            placeholder="Hello world"
            {...register("title", { required: true })}
          />
          {formState.errors.title && (
            <span>{formState.errors.title.message}</span>
          )}
        </InputContent>

        <InputContent>
          <label>Content</label>
          <textarea
            placeholder="Content here"
            {...register("content", { required: true })}
          />
          {formState.errors.content && (
            <span>{formState.errors.content.message}</span>
          )}
        </InputContent>

        {isEdit && setIsVisible ? (
          <ButtonContent>
            <Button color="white" onClick={() => setIsVisible(false)}>
              Cancel
            </Button>
            <Button color="green" type="submit" disabled={!formState.isValid}>
              Save
            </Button>
          </ButtonContent>
        ) : (
          <ButtonContent>
            <Button color="blue" type="submit" disabled={!formState.isValid}>
              Create
            </Button>
          </ButtonContent>
        )}
      </form>
    </S.PostFormContent>
  );
};

export default PostForm;
