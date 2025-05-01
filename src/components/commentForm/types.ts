export interface CommentFormProps {
  postId: number;
  loadComents: () => Promise<void>;
}
