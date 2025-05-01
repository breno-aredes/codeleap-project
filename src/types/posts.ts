export interface CreatePost {
  username: string;
  title: string;
  content: string;
  created_datetime: string;
}

export interface UpdatePost {
  title: string;
  content: string;
}

export interface CreateCommentType {
  content: string;
}
