import React, { useEffect } from "react";
import Modal from "..";
import { ButtonContent, ModalContent } from "./styles";
import { EditCommentProps } from "./types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostService } from "../../../services/post";
import { useLoading } from "../../../hooks/useLoading";

import { toast } from "react-toastify";
import { InputContent } from "../../../styles/globalStyles";
import Button from "../../button";
import { commentType } from "../../commentForm/types";
import { CommentSchema } from "../../../schemas/comment.schema";

const EditComment: React.FC<EditCommentProps> = ({
  isVisible,
  setIsVisible,
  postId,
  commentId,
  loadComents,
  content,
}) => {
  const { setLoading } = useLoading();
  const postService = PostService();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    reset,
  } = useForm<commentType>({
    resolver: yupResolver(CommentSchema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({ content });
  }, [, content, reset]);

  const text = watch("content") || "";

  const handleUpdateComment = async (data: commentType) => {
    try {
      setLoading(true);

      const updatedData = {
        ...data,
        comment_id: commentId,
      };

      await postService.updateComment(postId, updatedData);
      loadComents();
      toast.success("Comment updated successfully!");
      setIsVisible(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update the comment. Please try again.");
      console.error("Erro ao atualizar o post:", error);
    }
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} isWide>
      <ModalContent>
        <h1>{"Edit item"}</h1>
        <InputContent>
          <textarea
            placeholder="Comment here"
            maxLength={100}
            {...register("content")}
            value={text}
          />
          <ButtonContent>
            <Button color="white" onClick={() => setIsVisible(false)}>
              Cancel
            </Button>
            <Button
              color="green"
              onClick={handleSubmit(handleUpdateComment)}
              disabled={!isValid}
            >
              Save
            </Button>
          </ButtonContent>
        </InputContent>
      </ModalContent>
    </Modal>
  );
};

export default EditComment;
