export interface EditCommentProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  postId: number;
  commentId: string;
  loadComents: () => Promise<void>;
  content: string;
}
