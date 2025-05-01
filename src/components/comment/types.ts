export interface CommentProps {
  name: string;
  content: string;
  timestamp: string;
  mentions: string[];
  commentId: string;
  postId: number;
  loadComents: () => Promise<void>;
  likesCount: number;
  isLiked: boolean;
}
