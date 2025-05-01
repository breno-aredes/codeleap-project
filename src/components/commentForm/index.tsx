import React, { useState } from "react";
import { InputContent } from "../../styles/globalStyles";
import * as S from "./styles";
import Button from "../button";
import { useLoading } from "../../hooks/useLoading";
import { PostService } from "../../services/post";
import { toast } from "react-toastify";
import { CommentFormProps } from "./types";

const CommentForm: React.FC<CommentFormProps> = ({ postId, loadComents }) => {
  const { setLoading } = useLoading();
  const postService = PostService();

  const [text, setText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [users] = useState(["breno-aredes", "john-doe", "jane-smith"]);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);

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
    setText(updatedText);
    setShowSuggestions(false);
  };

  const handleCreateComment = async () => {
    if (!text.trim()) {
      toast.error("Comment cannot be empty.");
      return;
    }

    try {
      setLoading(true);

      await postService.CreateComment(postId, {
        content: text.trim(),
      });
      await loadComents();
      toast.success("Comment created successfully!");
      setText("");
      setLoading(false);
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
        <Button color="blue" onClick={handleCreateComment}>
          Comment
        </Button>
      </S.ButtonContent>
    </InputContent>
  );
};

export default CommentForm;
