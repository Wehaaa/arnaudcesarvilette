import { ContentNode } from "@/gql/graphql";

export interface Post {
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
      mediaDetails?: {
        sizes: {
          name: string;
          sourceUrl: string;
        }[];
      };
    }
  }
  categories: {
    nodes: {
      id: string
      slug: string
      name: string
    }[]
  }
  topics: {
    nodes: {
      id: string
      slug: string
      name: string
    }[]
  }
}

export interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface Posts {
  posts: Post[];
}

export interface PostContentNode extends ContentNode {
  content?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  status?: string;
  categories: {
    nodes: {
      name: string;
      slug: string;
      id: string;
    }[];
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      title: string;
      mediaDetails?: {
        sizes: {
          name: string;
          sourceUrl: string;
        }[];
      };
    };
  };
}