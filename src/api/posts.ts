import posts, { Post } from "../data/posts";

export const getAllPosts = async (): Promise<Post[]> => {
  // simulate async fetch
  return Promise.resolve(posts);
};

export const getPostById = async (id: number): Promise<Post | undefined> => {
  const found = posts.find((p) => p.id === id);
  return Promise.resolve(found);
};
