export interface Post {
  id?: string;
  title: string;
  image: string;
  author: string;
  onCreate?: Date;
  onUpdate?: Date;
  published?: boolean;
  content: any;
}