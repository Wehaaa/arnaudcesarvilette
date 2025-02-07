export const POST_FIELDS = `
  fragment PostFields on Post {
    id
    title 
    excerpt
    date
    uri
    categories {
      nodes {
        id
        slug
        name
      }
    }
    featuredImage {
      node {
        sourceUrl
        altText
        title
        mediaDetails {
          sizes(include: [MEDIUM_LARGE, LARGE]) {
            name
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS = `
  ${POST_FIELDS}
  query GetPosts($first: Int = 6, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        ...PostFields
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const GET_POST = `
  query PostQuery($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
    contentNode(id: $slug, idType: $idType) {
      ...on Post {
        content
        title
        date
        status
        excerpt
        categories {
          nodes {
            name
            slug
            id
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
            mediaDetails {
              sizes(include: [MEDIUM_LARGE, LARGE]) {
                name
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
