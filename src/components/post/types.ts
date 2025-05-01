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
  comments_count: number;
}

export interface CommentPost {
  id: string;
  post_id: number;
  user_id: string;
  content: string;
  created_at: string;
  mentioned_users: string[];
  likes_count: number;
  is_liked: boolean;
  user_name: string;
}
