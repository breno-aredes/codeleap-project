export interface PostProps {
  name: string;
  time: string;
  title: string;
  text: string;
  id: number;
  fetchPosts: () => Promise<void>;
}
