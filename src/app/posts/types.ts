export type TPost = {
  id: number;
  name: string;
  publishedAt: Date;
  text: string;
};

export type TErrors = {
  name: { message: string };
  text: { message: string };
};
