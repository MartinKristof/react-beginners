export type TPost = {
  id: string;
  name: string;
  publishedAt: number;
  text: string;
};

export type TErrors = {
  name: { message: string };
  text: { message: string };
};
