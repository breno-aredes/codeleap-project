export interface EditPostProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  postId: number;
  fetchPosts: () => Promise<void>;
  title: string;
  content: string;
}
