import React, { useState } from "react";
import { InputContent } from "../../styles/globalStyles";
import * as S from "./styles";
import Button from "../button";

const CommentForm = () => {
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
        <Button color="blue">Comment</Button>
      </S.ButtonContent>
    </InputContent>
  );
};

export default CommentForm;
