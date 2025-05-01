export interface CommentFormProps {
  postId: number;
  loadComents: () => Promise<void>;
}

export interface commentType {
  content: string;
}
