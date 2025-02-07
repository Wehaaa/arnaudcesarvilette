import { ContentNode } from "@/gql/graphql";

export interface PageContentNode extends ContentNode {
  content?: string;
  title?: string;
}

export interface PostContentNode extends ContentNode {
  content?: string;
  title?: string;
  author?: {
    node: {
      name: string;
    };
  };
}