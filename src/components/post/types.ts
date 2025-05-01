export interface PostProps {
  data: Post;
  fetchPosts: () => Promise<void>;
}

export interface Post {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: string;
  likes_count: number;
  is_liked: boolean;
}
