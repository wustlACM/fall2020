/*
 * interfaces.tsx
 *
 * This file declares typescript interfaces to match
 * database documents as well as API json responses.
 *
 */

export interface Post {
  title: string;
  brief: string;
  media: string;
  markdown: string;
  resources?: string[];
}

export const emptyPost = () => {
  return {
    title: "",
    brief: "",
    media: "",
    markdown: "",
  };
};
