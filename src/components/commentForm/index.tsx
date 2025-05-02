import React, { useState } from "react";
import { InputContent } from "../../styles/globalStyles";
import * as S from "./styles";
import Button from "../button";
import { useLoading } from "../../hooks/useLoading";
import { PostService } from "../../services/post";
import { toast } from "react-toastify";
import { CommentFormProps, commentType } from "./types";
import { CommentSchema } from "../../schemas/comment.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CommentForm: React.FC<CommentFormProps> = ({
  postId,
  loadComents,
  users,
}) => {
  const { setLoading } = useLoading();
  const postService = PostService();

  const [showSuggestions, setShowSuggestions] = useState(false);

  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  const { register, handleSubmit, setValue, watch } = useForm<commentType>({
    resolver: yupResolver(CommentSchema),
    mode: "onChange",
  });

  const text = watch("content") || "";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue("content", value);

    const match = value.match(/(^|\s)@(\w*)$/);
    if (match) {
      const query = match[2];
      setFilteredUsers(
        users.filter((user) => user.startsWith(query)).slice(0, 10)
      );
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleUserSelect = (user: string) => {
    const updatedText = text.replace(/(^|\s)@(\w*)$/, `$1@${user} `);
    setValue("content", updatedText);
    setShowSuggestions(false);
  };

  const handleCreateComment = async (data: commentType) => {
    try {
      setLoading(true);

      await postService.CreateComment(postId, {
        content: data.content.trim(),
      });
      await loadComents();
      toast.success("Comment created successfully!");
      setValue("content", "");
    } catch (error) {
      toast.error("Error creating the comment. Please try again.");
      console.error("Error creating comment:", error);
      setLoading(false);
    }
  };

  return (
    <InputContent>
      <textarea
        placeholder="Comment here"
        maxLength={100}
        {...register("content")}
        value={text}
        onChange={handleChange}
      />
      {showSuggestions && (
        <S.List>
          {filteredUsers.map((user) => (
            <li key={user} onClick={() => handleUserSelect(user)}>
              {user}
            </li>
          ))}
        </S.List>
      )}
      <S.ButtonContent>
        <Button
          color="blue"
          onClick={handleSubmit(handleCreateComment)}
          disabled={text.trim() === ""}
        >
          Comment
        </Button>
      </S.ButtonContent>
    </InputContent>
  );
};

export default CommentForm;
