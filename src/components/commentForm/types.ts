export interface CommentFormProps {
  postId: number;
  loadComents: () => Promise<void>;
  users: string[];
}

export interface commentType {
  content: string;
}
