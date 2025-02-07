import { ContentNode } from "@/gql/graphql";

export interface Landing {
  id: string
  title: string
  excerpt: string
  uri: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
      title: string
    }
  }
}

export interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface Landings {
  landings: Landing[];
}

export interface LandingContentNode extends ContentNode {
  content?: string;
  title?: string;
  excerpt?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      title: string;
    };
  };
  date?: string;
  status?: string;
}