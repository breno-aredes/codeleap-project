import React from "react";
import Modal from "..";
import { ModalContent } from "./styles";
import { EditPostProps } from "./types";
import PostForm from "../../postForm";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostService } from "../../../services/post";
import { useLoading } from "../../../hooks/useLoading";
import { PostSchema } from "../../../schemas/posts.schemas";

const EditPost: React.FC<EditPostProps> = ({
  isVisible,
  setIsVisible,
  postId,
  fetchPosts,
  title,
  content,
}) => {
  const { setLoading } = useLoading();

  const formMethods = useForm({
    resolver: yupResolver(PostSchema),
  });

  const handleUpdatePost = async (data: { title: string; content: string }) => {
    try {
      setLoading(true);
      await PostService.updatePost(postId, data);
      fetchPosts();
      setLoading(false);
      setIsVisible(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao atualizar o post:", error);
    }
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} isWide>
      <ModalContent>
        <PostForm
          isModal
          isEdit
          setIsVisible={setIsVisible}
          useForm={formMethods}
          onConfirm={handleUpdatePost}
          title={title}
          content={content}
        />
      </ModalContent>
    </Modal>
  );
};

export default EditPost;
